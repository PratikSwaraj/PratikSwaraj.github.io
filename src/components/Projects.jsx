import { useRef, useState } from 'react';
import { projects } from '../data/portfolio.js';

const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);
  const detailsId = `project-details-${index}`;

  // Tilt and spotlight follow the mouse (mouse only; touch scrolls normally)
  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card || e.pointerType !== 'mouse') return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
    card.style.transform =
      `perspective(900px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 10}deg) translateY(-4px)`;
  };

  const handlePointerLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <article
      className="card"
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="spot" aria-hidden="true" />

      <div className="plan" aria-hidden="true">
        {project.plan.map(([left, top, width, height], i) => (
          <i
            key={i}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${width}%`,
              height: `${height}%`,
              '--i': i,
            }}
          />
        ))}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className={`details ${open ? 'open' : ''}`} id={detailsId}>
        <div>
          <p>{project.details}</p>
        </div>
      </div>

      <button
        type="button"
        className="toggle"
        aria-expanded={open}
        aria-controls={detailsId}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Hide details' : 'View details'}
      </button>

      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="room right">
      <div className="wrap">
        <article className="panel wide">
          <div className="label">
            <span className="mono">Room 03</span>
            <span>Projects</span>
          </div>
          <h2>Selected work</h2>

          <div className="filters" role="group" aria-label="Filter projects by technology">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="filter-btn"
                aria-pressed={filter === tag}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="count mono">
            Showing {visible.length} of {projects.length}
          </p>

          <div className="cards">
            {visible.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}