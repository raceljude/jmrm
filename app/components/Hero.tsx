import { profile } from "../data/resume";
import Icon from "./Icon";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "8", label: "Core Skills" },
  { value: "2", label: "Major Projects" },
];

const specializations = ["Analytics", "KPI Dashboards", "Strategy", "Automation"];

export default function Hero() {
  return (
    <section id="hero" className="hero section--accent" aria-label="Portfolio introduction">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="availability">
              <span className="status-dot" aria-hidden="true" />
              Available for opportunities
            </p>

            <div>
              <h1 className="hero-title">
                Jessa Mae <span className="surname">Maigue</span>
              </h1>
              <p className="hero-role">{profile.title}</p>
            </div>

            <p className="hero-summary">{profile.about}</p>

            <div className="button-row">
              <a className="button button-primary" href="#experience">
                View My Work
                <Icon name="arrow-right" size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>
            </div>

            <dl className="hero-stats" aria-label="Career highlights">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <aside className="profile-panel" aria-label="Profile summary">
            <div className="profile-panel-header">
              <span className="avatar-mark" aria-hidden="true">
                JM
              </span>
              <div>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>
              </div>
            </div>

            <ul className="profile-list">
              <li>
                <Icon name="map-pin" className="mini-icon" />
                <span>{profile.location}</span>
              </li>
              <li>
                <Icon name="mail" className="mini-icon" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Icon name="phone" className="mini-icon" />
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
            </ul>

            <ul className="specialization-list" aria-label="Specializations">
              {specializations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
