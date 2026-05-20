import { skills } from "../data/resume";
import Icon, { type IconName } from "./Icon";

const skillIcons: Record<string, IconName> = {
  "Marketing Analytics & Data Interpretation": "chart",
  "Data Visualization & Dashboard Reporting": "trend",
  "Performance Tracking & KPI Monitoring": "target",
  "Business & Operational Analysis": "search",
  "Marketing Strategy & Insights": "lightbulb",
  "Google Sheets Automation": "settings",
  "Process Improvement & Workflow Optimization": "refresh",
  "Cross-functional Collaboration": "users",
};

export default function Skills() {
  return (
    <section id="skills" className="section section--base">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">What I Bring</p>
          <h2 className="section-title">Core Skills</h2>
          <p className="section-intro">
            A versatile toolkit built over years of hands-on experience in marketing analytics
            and strategy.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="card skill-card" key={skill}>
              <span className="skill-icon icon-tile" aria-hidden="true">
                <Icon name={skillIcons[skill]} size={24} />
              </span>
              <h3>{skill}</h3>
              <span className="skill-rule" aria-hidden="true" />
            </article>
          ))}
        </div>

        <p className="skills-note">
          Always learning, always evolving - driven by curiosity and results.
        </p>
      </div>
    </section>
  );
}
