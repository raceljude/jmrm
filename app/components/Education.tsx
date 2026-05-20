import { education } from "../data/resume";
import Icon from "./Icon";

export default function Education() {
  return (
    <section id="education" className="section section--accent">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        <article className="education-card">
          <div className="education-main">
            <span className="education-icon icon-tile" aria-hidden="true">
              <Icon name="graduation" size={34} />
            </span>
            <div>
              <p className="period">{education.period}</p>
              <h3>{education.degree}</h3>
              <p className="education-major">{education.major}</p>
              <p className="education-school">
                <Icon name="map-pin" size={18} />
                {education.school}
              </p>
            </div>
          </div>

          <p className="education-quote">
            &ldquo;Foundation in marketing management - the launchpad for a career in
            analytics and strategy.&rdquo;
          </p>
        </article>
      </div>
    </section>
  );
}
