module.exports = {
  siteTitle: 'Ameer Hamza | Software Engineer',
  siteDescription:
    'Ameer Hamza is a software engineer based in Lahore, BS in Computer Sciences and great at building exceptional, high-quality mobile apps.',
  siteKeywords:
    'Ameer Hamza, Ameer, Hamza, ameerpro, software engineer, front-end engineer, android developer, java, asian',
  siteUrl: 'https://hamzabhatti.me',
  siteLanguage: 'en_US',
  name: 'Ameer Hamza',
  location: 'Lahore, PK',
  email: 'contact@hamzabhatti.me',
  github: 'https://github.com/ameerpro',
  twitterHandle: '@realHamzaBhatti',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ameerpro',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ameerpro',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hamzabhatti.me',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/realHamzaBhatti',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
