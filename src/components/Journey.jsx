import { journey } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Journey() {
  return (
    <section className="section-shell" id="journey">
      <SectionHeading
        eyebrow="Growth path"
        title="Building depth across development and operations"
      />
      <div className="timeline">
        {journey.map((item) => (
          <article className="timeline-item" key={item.period}>
            <p>{item.period}</p>
            <h3>{item.title}</h3>
            <span>{item.details}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journey
