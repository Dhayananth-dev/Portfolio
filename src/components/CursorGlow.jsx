import { useEffect, useRef } from 'react'

function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!glow || prefersReducedMotion) {
      return undefined
    }

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let currentX = pointerX
    let currentY = pointerY
    let frameId

    const handlePointerMove = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
      glow.classList.add('is-visible')
    }

    const handlePointerLeave = () => {
      glow.classList.remove('is-visible')
    }

    const animate = () => {
      currentX += (pointerX - currentX) * 0.12
      currentY += (pointerY - currentY) * 0.12
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
}

export default CursorGlow
