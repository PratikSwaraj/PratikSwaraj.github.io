import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/portfolio.js';

const NAME = `${profile.firstName} ${profile.lastName}`;
const BAR_DELAY = 300; // ms before the progress bar starts
const BAR_LENGTH = 2800; // ms for the progress bar to fill
const TOTAL = 3800; // ms until the intro hands over to the site

export default function Intro({ onDone }) {
  const [percent, setPercent] = useState(0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    // Visitors who prefer less motion skip the intro entirely
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      doneRef.current();
      return;
    }

    // Stop the page from scrolling while the intro plays
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';

    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, Math.max(0, (now - start - BAR_DELAY) / BAR_LENGTH));
      setPercent(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const timer = setTimeout(() => doneRef.current(), TOTAL);
    const onKey = () => doneRef.current();
    window.addEventListener('keydown', onKey);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      html.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="intro" onClick={() => doneRef.current()}>
      <div className="intro-line" aria-hidden="true" />
      <div className="intro-tilt">
        <div className="intro-name" aria-label={NAME}>
          {NAME.split('').map((ch, i) => (
            <span key={i} aria-hidden="true" style={{ '--d': i }}>
              {ch === ' ' ? '\u00a0' : ch}
            </span>
          ))}
        </div>
      </div>
      <p className="intro-role">{profile.role}</p>
      <div className="intro-bar" />
      <span className="intro-skip">Click or press a key to skip</span>
      <span className="intro-count">{percent}%</span>
    </div>
  );
}