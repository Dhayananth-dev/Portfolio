import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: null, y: null }
    let particles = []
    let frameId
    let width = window.innerWidth
    let height = window.innerHeight
    const colors = [
      { light: '45, 212, 191', glow: '45, 212, 191' },
      { light: '76, 201, 240', glow: '76, 201, 240' },
      { light: '255, 107, 107', glow: '255, 107, 107' },
      { light: '255, 209, 102', glow: '255, 209, 102' },
    ]

    const createParticles = () => {
      const count = Math.min(96, Math.max(54, Math.floor(width / 18)))

      particles = Array.from({ length: count }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)]

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.4 + 1.2,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          color,
        }
      })
    }

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      createParticles()
    }

    const drawLine = (from, to, opacity) => {
      context.beginPath()
      context.moveTo(from.x, from.y)
      context.lineTo(to.x, to.y)
      context.strokeStyle = `rgba(${from.color.light}, ${opacity})`
      context.lineWidth = 1
      context.stroke()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex]
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y)

          if (distance < 142) {
            drawLine(particle, next, (1 - distance / 142) * 0.24)
          }
        }

        if (pointer.x !== null && pointer.y !== null) {
          const distanceToPointer = Math.hypot(particle.x - pointer.x, particle.y - pointer.y)

          if (distanceToPointer < 170) {
            drawLine(particle, pointer, (1 - distanceToPointer / 170) * 0.42)
          }
        }

        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(${particle.color.light}, 0.86)`
        context.shadowBlur = 14
        context.shadowColor = `rgba(${particle.color.glow}, 0.62)`
        context.fill()
        context.shadowBlur = 0

        if (!prefersReducedMotion) {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < -20) particle.x = width + 20
          if (particle.x > width + 20) particle.x = -20
          if (particle.y < -20) particle.y = height + 20
          if (particle.y > height + 20) particle.y = -20
        }
      })

      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(draw)
      }
    }

    const handlePointerMove = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const handlePointerLeave = () => {
      pointer.x = null
      pointer.y = null
    }

    resizeCanvas()
    draw()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <canvas className="particle-background" ref={canvasRef} aria-hidden="true" />
}

export default ParticleBackground
