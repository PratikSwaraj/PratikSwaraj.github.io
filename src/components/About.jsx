import { about } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="room right">
      <div className="wrap">
        <article className="panel">
          <div className="label">
            <span className="mono">Room 01</span>
            <span>About</span>
          </div>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="stats">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}