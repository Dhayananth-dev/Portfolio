import { profile } from '../data/portfolio'

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div>
        <p className="eyebrow">Let us build something reliable</p>
        <h2>Ready to contribute to backend and DevOps teams.</h2>
      </div>
      <div className="contact-actions">
        <a className="primary-button" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="secondary-button" href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="secondary-button" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="secondary-button" href={profile.resumeUrl} download={profile.resumeFileName}>
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Contact
