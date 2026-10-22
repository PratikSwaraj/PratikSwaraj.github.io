import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="room">
      <div className="wrap">
        <article className="panel">
          <div className="label">
            <span className="mono">Room 02</span>
            <span>Experience</span>
          </div>
          <h2>Where I've worked</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <h3>
                  {job.role} · {job.company}
                </h3>
                <div className="when">{job.when}</div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}