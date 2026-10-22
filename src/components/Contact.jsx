import { useRef, useState } from 'react';
import { profile } from '../data/portfolio.js';

const mailtoHref =
  `mailto:${profile.email}?subject=${encodeURIComponent('Hello from your portfolio')}`;

export default function Contact() {
  const [copyLabel, setCopyLabel] = useState('Copy email');
  const addressRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyLabel('Copied');
    } catch {
      // Clipboard can be blocked; select the text so the visitor can copy it manually
      const range = document.createRange();
      range.selectNodeContents(addressRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      setCopyLabel('Press Ctrl+C');
    }
  };

  return (
    <section id="contact" className="room right">
      <div className="wrap">
        <article className="panel">
          <div className="label">
            <span className="mono">Room 05</span>
            <span>Contact</span>
          </div>
          <h2>Let's build something you can walk through.</h2>
          <p>Open to full stack roles and interesting product work.</p>

          <div className="contact-row">
            <a className="btn primary" href={mailtoHref}>
              Send an email
            </a>
          </div>

          <div className="contact-row">
            <span className="address" ref={addressRef}>
              {profile.email}
            </span>
            <button className="copy" type="button" onClick={copyEmail}>
              {copyLabel}
            </button>
          </div>

          <div className="contact-row">
            <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="meta">
            <span>
              <b>Phone</b> &nbsp;{profile.phone}
            </span>
            <span>
              <b>Based in</b> &nbsp;{profile.location}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}