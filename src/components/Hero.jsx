import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="entrance" className="room hero">
      <div className="wrap">
        <div className="hero-inner">
          <p className="mono">
            {profile.role} · {profile.city}
          </p>
          <h1>
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>
          <p className="lede">{profile.intro}</p>
          <div className="actions">
            <a className="btn primary" href="#projects">
              See the work
            </a>
            <a className="btn ghost" href={profile.cv} target="_blank" rel="noreferrer" download>
              Download CV
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <p className="hint mono">Scroll to walk through the plan</p>
        </div>
      </div>
    </section>
  );
}