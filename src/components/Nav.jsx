import { profile, navLinks } from '../data/portfolio.js';

export default function Nav() {
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Home">
        {profile.initials}
      </a>
      <nav className="links" aria-label="Sections">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="cta" href="#contact">
        Say hello
      </a>
    </header>
  );
}