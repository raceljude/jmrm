import { experience } from "../data/resume";
import Icon from "./Icon";

export default function Experience() {
  return (
    <section id="experience" className="section section--accent">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-intro">
            6+ years of progressive growth in marketing analytics, strategy, and leadership.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.role}-${job.period}`}>
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <p className="period">{job.period}</p>
                </div>

                <ul className="check-list">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Icon name="check" className="check-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
