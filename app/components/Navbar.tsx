"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/resume";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="nav-wrap">
        <a className="brand" href="#hero" aria-label={`${profile.name} - Home`}>
          <span className="brand-mark" aria-hidden="true">
            JM
          </span>
          <span className="brand-text">{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a className="nav-link" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Hire Me
          </a>
        </nav>

        <button
          className={`menu-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-toggle-line" aria-hidden="true" />
          <span className="menu-toggle-line" aria-hidden="true" />
          <span className="menu-toggle-line" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-nav-inner">
          {links.map((link) => (
            <a
              className="mobile-nav-link"
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="mobile-nav-link mobile-nav-cta" href={`mailto:${profile.email}`}>
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
