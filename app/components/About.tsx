import { profile } from "../data/resume";
import Icon from "./Icon";

const capabilities = [
  ["Analytics", "Expert"],
  ["KPI Dashboards", "Advanced"],
  ["Process Improvement", "Expert"],
  ["Marketing Strategy", "Advanced"],
];

const principles = [
  {
    title: "Data-driven mindset",
    description: "Every decision is backed by solid analytics and performance insights.",
  },
  {
    title: "Systems thinker",
    description: "Building automated processes and dashboards that scale with business needs.",
  },
  {
    title: "Creative communicator",
    description: "Translating complex data into compelling narratives for diverse audiences.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section--base">
      <div className="container">
        <div className="split-layout">
          <aside className="quote-panel" aria-label="Professional focus">
            <p className="section-kicker">Who I Am</p>
            <blockquote>
              &ldquo;Turning insights into impact through data-driven decisions and creative
              strategy.&rdquo;
            </blockquote>

            <dl className="capability-grid">
              {capabilities.map(([name, level]) => (
                <div className="capability" key={name}>
                  <dt>{name}</dt>
                  <dd>{level}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div>
            <div className="section-header align-left">
              <p className="section-kicker">About Me</p>
              <h2 className="section-title">
                Analyst by craft, <span>strategist by heart</span>
              </h2>
              <p className="section-intro">{profile.about}</p>
            </div>

            <ul className="feature-list">
              {principles.map((item) => (
                <li className="feature-item" key={item.title}>
                  <span className="feature-dot" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Let&apos;s Connect
              <Icon name="arrow-right" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
