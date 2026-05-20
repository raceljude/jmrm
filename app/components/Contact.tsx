import { profile } from "../data/resume";
import Icon, { type IconName } from "./Icon";

const contactItems: Array<{
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}> = [
  {
    icon: "mail",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: "map-pin",
    label: "Location",
    value: profile.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--base">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-intro">
            Whether you have a project in mind or just want to connect - I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-list">
            {contactItems.map((item) => (
              <a
                className="card contact-card"
                href={item.href}
                key={item.label}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="icon-tile" aria-hidden="true">
                  <Icon name={item.icon} size={23} />
                </span>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
                <Icon name="arrow-right" className="contact-arrow" />
              </a>
            ))}
          </div>

          <aside className="dark-panel">
            <span className="icon-tile" aria-hidden="true">
              <Icon name="briefcase" size={28} />
            </span>
            <h3>Ready to collaborate?</h3>
            <p>
              I&apos;m open to full-time roles, freelance projects, and consulting
              opportunities in marketing analytics and strategy.
            </p>
            <a className="cta-button" href={`mailto:${profile.email}`}>
              Send Me an Email
              <Icon name="arrow-right" size={18} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
