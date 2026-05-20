import { projects } from "../data/resume";
import Icon from "./Icon";

export default function Projects() {
  return (
    <section id="projects" className="section section--tint">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Major Projects</h2>
          <p className="section-intro">Impactful initiatives where strategy met execution.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="project-content">
                <div className="project-head">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-company">{project.company}</p>
                  </div>
                  <p className="period">{project.period}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="check-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Icon name="check" className="check-icon" />
                      <span>{bullet}</span>
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
