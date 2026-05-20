import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark" aria-hidden="true">
            JM
          </span>
          <strong>{profile.name}</strong>
          <span className="footer-muted">{profile.title}</span>
        </div>

        <p className="footer-muted">Copyright {new Date().getFullYear()} All rights reserved.</p>

        <nav className="footer-links" aria-label="Footer contact links">
          <a className="footer-link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="footer-link" href={`tel:${profile.phone}`}>
            Phone
          </a>
        </nav>
      </div>
    </footer>
  );
}
