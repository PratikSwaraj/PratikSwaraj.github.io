import { useEffect, useState } from 'react';
import { rooms } from '../data/portfolio.js';

export default function Hud() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const f = Math.min(1, window.scrollY / max);
      setActive(Math.round(f * (rooms.length - 1)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="hud" aria-label="Walkthrough progress">
      {rooms.map((room, i) => (
        <span key={room.id} className={i === active ? 'on' : ''}>
          {room.label}
        </span>
      ))}
    </nav>
  );
}