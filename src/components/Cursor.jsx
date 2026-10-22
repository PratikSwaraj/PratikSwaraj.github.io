import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, .card, .filter-btn';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only mouse-style pointers get the custom cursor
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const root = document.documentElement;
    root.classList.add('custom-cursor');

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE)) {
        ring.classList.add('hover');
      }
    };

    const onOut = (e) => {
      const next = e.relatedTarget;
      if (!next || !next.closest || !next.closest(INTERACTIVE)) {
        ring.classList.remove('hover');
      }
    };

    const onDown = () => ring.classList.add('press');
    const onUp = () => ring.classList.remove('press');

    // The ring eases toward the pointer, which gives it a trailing feel
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      root.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}