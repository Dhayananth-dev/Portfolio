import { techSkills } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools I use for development and deployment"
        text="A DevOps-focused stack with Spring Boot, MySQL, and server deployment experience."
      />
      <div className="skills-grid">
        {techSkills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <span className="skill-icon">
              <TechIcon name={skill.icon} />
            </span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
