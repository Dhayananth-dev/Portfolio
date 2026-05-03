import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section className="projects-section section-shell" id="projects">
      <div className="terminal-backdrop" aria-hidden="true">
        <span>$ docker compose up -d</span>
        <span>$ jenkins build spring-boot-crud</span>
        <span>$ nginx -t && systemctl reload nginx</span>
        <span>$ terraform plan</span>
      </div>
      <SectionHeading
        eyebrow="Featured Projects"
        title="Spring Boot application deployed with DevOps workflow"
        text="Projects focused on CRUD development, Docker deployment, Jenkins pipeline, EC2, and Nginx."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <span>{project.description}</span>
            </div>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
