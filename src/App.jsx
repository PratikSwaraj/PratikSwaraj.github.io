import { useState } from 'react';
import Intro from './components/Intro.jsx';
import Walkthrough from './components/Walkthrough.jsx';
import Cursor from './components/Cursor.jsx';
import Hud from './components/Hud.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onDone={() => setShowIntro(false)} />}
      <Walkthrough />
      <div className="veil" aria-hidden="true" />
      <Cursor />
      <Nav />
      <Hud />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}