import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="room">
      <div className="wrap">
        <article className="panel">
          <div className="label">
            <span className="mono">Room 04</span>
            <span>Skills</span>
          </div>
          <h2>Tools I reach for</h2>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}