import { technologies } from '../data/portfolio.js';

export default function Marquee() {
  // Listed twice so the scroll loop is seamless
  const items = [...technologies, ...technologies];

  return (
    <div className="marquee" aria-label="Technologies">
      <div className="track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}