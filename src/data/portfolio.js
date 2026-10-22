export const profile = {
    firstName: 'Pratik',
    lastName: 'Swaraj',
    initials: 'PS',
    role: 'Full Stack Developer',
    city: 'Bengaluru',
    location: 'Bengaluru, India',
    intro:
      'I build responsive web apps and interactive 3D walkthroughs with React.js, Three.js and Node.js, with APIs behind them that hold up in real use.',
    email: 'pratikswaraj21@gmail.com',
    phone: '+91 9546073773',
    github: 'https://github.com/PratikSwaraj',
    linkedin: 'https://www.linkedin.com/in/pratik-swaraj-672a69127/',
    cv: 'https://drive.google.com/uc?export=download&id=1zMZwTrMFZvJgPhQE09epuML4zkqJkYDz',
  };
  
  // Each room is one section of the walkthrough. Order matters: the camera moves through them in this order.
  export const rooms = [
    { id: 'entrance', label: 'Entrance' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];
  
  export const navLinks = rooms.slice(1);
  
  export const technologies = [
    'React.js', 'Three.js', 'JavaScript', 'Node.js', 'Express.js',
    'MongoDB', 'AWS', 'Tailwind CSS', 'REST APIs', 'Git',
  ];
  
  export const about = {
    title: 'Problem-solving, built into the product',
    paragraphs: [
      "I'm a full stack developer working on UI/UX and 3D visualization. At Propall I turn 2D floor plans into walkthroughs people can explore in the browser, and I enjoy the work where design, performance and backend logic meet.",
      'Before software, I ran field operations for a city gas distributor, so I know how a product has to behave on a busy day.',
    ],
    stats: [
      { value: '25+', label: 'people led in field operations' },
      { value: '14+', label: 'client relationships managed' },
      { value: '+25%', label: 'sales lift in 8 months' },
    ],
  };
  
  export const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Propall',
      when: 'May 2025 – Present · Bengaluru',
      points: [
        'Built responsive UI components with React.js, Three.js and JavaScript.',
        'Rendered immersive 3D environments for walkthrough experiences.',
        'Built Express.js and MongoDB APIs, with AI-assisted debugging.',
      ],
    },
    {
      role: 'Graduate Engineer Trainee',
      company: 'Torrent Gas',
      when: 'Aug 2020 – Aug 2021 · Uttar Pradesh',
      points: [
        'Led CNG operations and maintenance, managing 25+ personnel.',
        'Analysed station performance and lifted sales by 25% in 8 months.',
      ],
    },
  ];
  
  // plan: rectangles as [left%, top%, width%, height%] for the decorative floor plan on each card
  export const projects = [
    {
      title: '3D Walkthrough Platform',
      description: 'Converts 2D floor plans into interactive 3D walkthroughs for architects.',
      details:
        'Developed and maintained a platform that lets architects turn 2D floor plans into walkthroughs they can explore. The front end uses React.js with Three.js for the 3D interactions, and the backend runs on Express.js and MongoDB.',
      tags: ['Three.js', 'React.js', 'Express.js', 'DynamoDB'],
      plan: [[10, 18, 38, 44], [52, 18, 38, 30], [52, 52, 38, 30]],
    },
    {
      title: 'Propall Website',
      description: 'Website for Propall, a 3D walkthrough platform for architects.',
      details:
        'Developed and maintained the company’s interactive website, showcasing its services and enabling users to explore offerings and book appointments. Built engaging UI experiences using TypeScript, html, css, javascript and astro framework.',
      tags: ['TypeScript', 'HTML', 'CSS', 'JavaScript', 'Astro'],
      plan: [[10, 18, 38, 44], [52, 18, 38, 30], [52, 52, 38, 30]],
    },
    {
      title: 'Internal Admin Dashboard',
      description: 'Operations dashboard built with shadcn/ui, Vite and TanStack Router.',
      details:
        'Developed and maintained an internal admin dashboard using shadcn/ui, Vite, TanStack Router and TypeScript.',
      tags: ['TypeScript', 'Vite', 'TanStack'],
      plan: [[8, 14, 84, 18], [8, 40, 24, 46], [38, 40, 54, 46]],
    },
    {
      title: 'Personal Portfolio',
      description: 'Interactive 3D portfolio where scrolling walks through a floor plan of my work.',
      details:
        'Built a portfolio in React.js with a Three.js scene. Scrolling moves the camera through a 3D floor plan, with each section as a room. Includes a custom cursor, filterable project cards, a CV download and a contact form that opens a prefilled email.',
      tags: ['React.js', 'Three.js', 'JavaScript', 'CSS'],
      plan: [[10, 12, 80, 30], [10, 52, 36, 34], [54, 52, 36, 34]],
    },
    {
      title: 'QKart',
      description: 'Single-page shopping app with authentication, cart, checkout and address management.',
      details:
        'Built a single-page shopping app with React and REST APIs for dynamic data. Implemented authentication, cart and checkout, added responsive design with Material UI, and optimized search with debouncing.',
      tags: ['React.js', 'REST APIs', 'Material UI', 'React Router'],
      plan: [[12, 16, 36, 36], [54, 16, 34, 20], [54, 42, 34, 20], [12, 60, 76, 22]],
      },
      {
        title: 'Qtify',
        description: 'Music streaming web app with genre-based song browsing, built from a Figma design.',
        details:
          'Turned a Figma design into modular React components, including cards, carousels and tabs, with genre-based song filtering. Fetched data from the backend with REST APIs and deployed the site to Vercel.',
        tags: ['React.js', 'REST APIs', 'Material UI'],
        plan: [[8, 14, 50, 40], [62, 14, 30, 18], [62, 38, 30, 18], [8, 62, 84, 22]],
      },
  ];
  
  export const skillGroups = [
    {
      title: 'Frontend',
      items: ['React.js', 'Three.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
    },
    {
      title: 'Backend & data',
      items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'AWS'],
    },
    {
      title: 'Workflow',
      items: ['Git', 'Vercel', 'Netlify', 'Render', 'Figma', 'Cursor', 'Claude', 'Codex'],
    },
  ];