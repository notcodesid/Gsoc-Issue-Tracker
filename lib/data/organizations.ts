// Helper function to generate random years
const getRandomYears = () => {
    const allYears = ['2020', '2021', '2022', '2023', '2024'];
    const numYears = Math.floor(Math.random() * 3) + 1; // 1-3 years
    const years: string[] = [];
    
    while (years.length < numYears) {
      const randomYear = allYears[Math.floor(Math.random() * allYears.length)];
      if (!years.includes(randomYear)) {
        years.push(randomYear);
      }
    }
    
    return years.sort((a, b) => b.localeCompare(a)); // Sort descending
  };


export const organizations = [
  {
    name: 'TensorFlow',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=128&h=128&fit=crop',
    description: 'An open-source machine learning framework for everyone. TensorFlow is an end-to-end platform for machine learning.',
    technologies: ['Python', 'C++', 'CUDA'],
    openIssues: 42,
    url: 'https://tensorflow.org',
    years: getRandomYears(),
  },
  {
    name: 'Apache Foundation',
    logo: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=128&h=128&fit=crop',
    description: 'The Apache Software Foundation provides support for the Apache community of open-source software projects.',
    technologies: ['Java', 'Python', 'Go'],
    openIssues: 156,
    url: 'https://apache.org',
    years: getRandomYears(),
  },
  {
    name: 'Mozilla',
    logo: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=128&h=128&fit=crop',
    description: 'Mozilla is a free software community that produces the Firefox web browser and other open-source tools.',
    technologies: ['Rust', 'JavaScript', 'C++'],
    openIssues: 89,
    url: 'https://mozilla.org',
    years: getRandomYears(),
  },
  {
    name: 'Linux Foundation',
    logo: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=128&h=128&fit=crop',
    description: 'The Linux Foundation supports the creation of sustainable open source ecosystems by providing financial and intellectual resources.',
    technologies: ['C', 'Assembly', 'Shell'],
    openIssues: 234,
    url: 'https://linuxfoundation.org',
    years: getRandomYears(),
  },
  {
    name: 'Django',
    logo: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=128&h=128&fit=crop',
    description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    technologies: ['Python', 'JavaScript', 'HTML'],
    openIssues: 178,
    url: 'https://djangoproject.com',
    years: getRandomYears(),
  },
  {
    name: 'React',
    logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=128&h=128&fit=crop',
    description: 'A JavaScript library for building user interfaces maintained by Meta and a community of individual developers.',
    technologies: ['JavaScript', 'TypeScript', 'CSS'],
    openIssues: 324,
    url: 'https://reactjs.org',
    years: getRandomYears(),
  },
  {
    name: 'Vue.js',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=128&h=128&fit=crop',
    description: 'Vue.js is a progressive framework for building user interfaces, focused on declarative rendering and component composition.',
    technologies: ['JavaScript', 'TypeScript', 'HTML'],
    openIssues: 167,
    url: 'https://vuejs.org',
    years: getRandomYears(),
  },
  {
    name: 'PostgreSQL',
    logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=128&h=128&fit=crop',
    description: 'PostgreSQL is a powerful, open source object-relational database system with a strong reputation for reliability and features.',
    technologies: ['C', 'SQL', 'Python'],
    openIssues: 198,
    url: 'https://postgresql.org',
    years: getRandomYears(),
  },
  {
    name: 'Kubernetes',
    logo: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=128&h=128&fit=crop',
    description: 'An open-source system for automating deployment, scaling, and management of containerized applications.',
    technologies: ['Go', 'Docker', 'YAML'],
    openIssues: 456,
    url: 'https://kubernetes.io',
    years: getRandomYears(),
  },
  {
    name: 'Node.js',
    logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=128&h=128&fit=crop',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    technologies: ['JavaScript', 'C++', 'Python'],
    openIssues: 267,
    url: 'https://nodejs.org',
    years: getRandomYears(),
  },
  {
    name: 'Flutter',
    logo: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=128&h=128&fit=crop',
    description: 'Google\'s UI toolkit for building beautiful, natively compiled applications from a single codebase.',
    technologies: ['Dart', 'C++', 'Java'],
    openIssues: 389,
    url: 'https://flutter.dev',
    years: getRandomYears(),
  },
  {
    name: 'Rust Foundation',
    logo: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=128&h=128&fit=crop',
    description: 'The Rust Foundation supports the development of the Rust programming language, ensuring its long-term success.',
    technologies: ['Rust', 'C++', 'LLVM'],
    openIssues: 145,
    url: 'https://foundation.rust-lang.org',
    years: getRandomYears(),
  },
  {
    name: 'Python Software Foundation',
    logo: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=128&h=128&fit=crop',
    description: 'The Python Software Foundation promotes, protects, and advances the Python programming language.',
    technologies: ['Python', 'C', 'Shell'],
    openIssues: 234,
    url: 'https://python.org',
    years: getRandomYears(),
  },
  {
    name: 'GitLab',
    logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=128&h=128&fit=crop',
    description: 'GitLab is an open source end-to-end software development platform with built-in version control, issue tracking, code review, CI/CD, and more.',
    technologies: ['Ruby', 'Go', 'Vue.js'],
    openIssues: 567,
    url: 'https://gitlab.com',
    years: getRandomYears(),
  },
  {
    name: 'Jenkins',
    logo: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?w=128&h=128&fit=crop',
    description: 'Jenkins is a self-contained, open source automation server for building, deploying, and automating any project.',
    technologies: ['Java', 'Groovy', 'JavaScript'],
    openIssues: 234,
    url: 'https://jenkins.io',
    years: getRandomYears(),
  },
  {
    name: 'Elastic',
    logo: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=128&h=128&fit=crop',
    description: 'Elastic builds software to make data usable in real time and at scale for search, logging, security, and analytics use cases.',
    technologies: ['Java', 'Go', 'JavaScript'],
    openIssues: 432,
    url: 'https://elastic.co',
    years: getRandomYears(),
  },
  {
    name: 'OpenAI',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=128&h=128&fit=crop',
    description: 'OpenAI conducts AI research and democratizes access to artificial intelligence through open source projects.',
    technologies: ['Python', 'C++', 'CUDA'],
    openIssues: 178,
    url: 'https://openai.com',
    years: getRandomYears(),
  },
  {
    name: 'Debian',
    logo: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=128&h=128&fit=crop',
    description: 'Debian is a Unix-like operating system consisting entirely of free and open-source software.',
    technologies: ['C', 'C++', 'Python'],
    openIssues: 876,
    url: 'https://debian.org',
    years: getRandomYears(),
  },
  {
    name: 'GNOME Foundation',
    logo: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?w=128&h=128&fit=crop',
    description: 'The GNOME Foundation coordinates the development of the GNOME free software desktop environment.',
    technologies: ['C', 'JavaScript', 'Python'],
    openIssues: 345,
    url: 'https://gnome.org',
    years: getRandomYears(),
  },
  {
    name: 'Eclipse Foundation',
    logo: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=128&h=128&fit=crop',
    description: 'The Eclipse Foundation provides our global community of individuals and organizations with a mature, scalable, and business-friendly environment for open source software collaboration.',
    technologies: ['Java', 'C++', 'JavaScript'],
    openIssues: 567,
    url: 'https://eclipse.org',
    years: getRandomYears(),
  },
  {
    name: 'FreeBSD',
    logo: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=128&h=128&fit=crop',
    description: 'FreeBSD is an operating system used to power modern servers, desktops, and embedded platforms.',
    technologies: ['C', 'Assembly', 'Shell'],
    openIssues: 432,
    url: 'https://freebsd.org',
    years: getRandomYears(),
  }
];