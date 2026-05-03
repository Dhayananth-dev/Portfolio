import { metrics, profile } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero-section section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">DevOps + Spring Boot Deployment</p>
        <h1>
          <span>{profile.name}</span>
          {profile.role}
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View My Work
          </a>
          <a className="secondary-button" href={`mailto:${profile.email}`}>
            Contact Me
          </a>
          <a className="secondary-button" href={profile.resumeUrl} download={profile.resumeFileName}>
            Download Resume
          </a>
        </div>
      </div>

      <div className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Hero
