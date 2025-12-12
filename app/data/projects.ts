export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'web' | 'mobile' | 'api' | 'desktop' | 'other'
  featured: boolean
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Axenon Fitness',
    slug: 'axenon-fitness',
    description: 'Full-stack fitness and nutrition platform with AI-powered meal planning, custom workout builders, and blog publishing.',
    longDescription: 'Built a full-stack fitness and nutrition platform that delivers AI-powered meal planning, custom workout builders, BMI tracking, blog publishing, and newsletter automation. Designed with a strong focus on user experience, security, and scalable architecture. The application integrates a robust Node.js/Express backend with a modern React frontend, supported by MongoDB, JWT authentication, Google OAuth, and OpenAI for personalized recommendations. Developed an AI-powered meal planner using OpenAI GPT-4 to generate user-specific meal plans, grocery lists, and macro breakdowns. Built a Workout Builder with an exercise image library, filtering, and PDF export using jsPDF + html2canvas. Implemented secure authentication flows featuring JWT-based sessions, Google OAuth login, password hashing, CSRF protection, brute-force mitigation, and account lockout mechanisms. Created a full blog + newsletter system with admin dashboards, CRUD operations, SEO optimization, and email delivery via Resend.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'JWT', 'OpenAI API', 'Google OAuth', 'Resend API', 'jsPDF', 'html2canvas'],
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'ForgeFit',
    slug: 'forgefit',
    description: 'Cross-platform mobile fitness and wellness application with real-time updates, offline mode, and achievement badges.',
    longDescription: 'ForgeFit is a cross-platform mobile fitness and wellness application developed as part of a semester-long software engineering project. The app enables users to join or create fitness challenges, track steps and workouts, log nutrition and hydration, and visualize progress through charts, leaderboards, and achievement badges. Built using Flutter and Firebase, the system supports real-time updates, offline mode with automatic synchronization, encrypted data storage, and push notifications. Designed and developed core app features including authentication, activity logging, dashboards, and challenge management. Implemented Firebase Authentication, Firestore data models, offline caching, and secure data encryption. Integrated device health APIs for step tracking and daily activity monitoring. Built responsive UI screens and chart visualizations with Flutter and Provider state management.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'iOS Development', 'Mobile Application Development'],
    category: 'mobile',
    featured: true
  },
  {
    id: '3',
    title: 'Real-Time Stock Analysis Pipeline',
    slug: 'stock-analysis-pipeline',
    description: 'Containerized real-time stock analysis pipeline with microservices architecture, data fusion, and interactive dashboard.',
    longDescription: 'Built a fully containerized real-time stock analysis pipeline that ingests, processes, and visualizes live market data and fundamental financial metrics using a microservices architecture. The system integrates multiple data sources (Yahoo Finance price data + company fundamentals), performs technical analysis (including SMA20), and serves an interactive dashboard for real-time insights. Developed three independent microservices: Price Service for polling 5-minute OHLCV data, Fundamentals Service for retrieving P/E ratio and market cap, and Analysis & Visualization Service for fusing datasets and hosting the dashboard. Implemented real-time data fusion, linking time-series data with slow-moving fundamentals. Designed and deployed a PostgreSQL data layer for persistent storage. Built an interactive dashboard using FastAPI + Dash, visualizing time-series prices, SMA20 trend lines, and key metrics with real-time refresh logic.',
    technologies: ['Python', 'FastAPI', 'Dash', 'PostgreSQL', 'SQLAlchemy', 'Pandas', 'Docker', 'Docker Compose', 'yFinance', 'Microservices'],
    category: 'other',
    featured: true
  },
  {
    id: '4',
    title: 'Three-Pass Compiler',
    slug: 'three-pass-compiler',
    description: 'Microservice-based three-pass compiler with lexical analysis, parsing, and code generation in separate Docker containers.',
    longDescription: 'Developed a three-pass compiler using a microservice architecture, with each compilation phase — lexical analysis, parsing, and code generation — deployed in separate Docker containers communicating via TCP sockets. The system tokenizes source code, constructs an Abstract Syntax Tree (AST), and generates assembly-like machine code. Designed REST/TCP endpoints for communication between compiler stages. Implemented modular services for tokenization, parsing, and code generation. Automated container orchestration using Docker Compose for cross-platform deployment. Enhanced error handling and logging between compiler passes for debugging. Demonstrated the use of containerized microservices for distributed compiler design and gained hands-on experience in system modularization, DevOps, and inter-service communication.',
    technologies: ['Python', 'Docker', 'Docker Compose', 'Flask', 'TCP Networking', 'JSON', 'Infrastructure as Code'],
    category: 'other',
    featured: false
  },
  {
    id: '5',
    title: 'P2P File Transfer & Performance Profiling',
    slug: 'p2p-file-transfer',
    description: 'Peer-to-peer file transfer application with automated performance testing, profiling, and data visualization.',
    longDescription: 'Developed a peer-to-peer (P2P) file transfer application using PHP sockets with full support for bidirectional data transfer. Focused on both functional correctness and non-functional performance optimization through systematic testing and profiling. Designed and implemented reliable file transfer protocols handling errors such as incomplete transfers and connection failures. Automated large-scale testing with Bash scripts to evaluate chunk sizes, file sizes (1MB–1GB), and stress conditions. Collected and analyzed metrics for CPU, memory, and disk I/O utilization, throughput (MB/s), and latency. Conducted load, stress, and reliability testing with 100+ iterations to ensure scalability. Created a Python data visualization suite to generate performance dashboards (throughput vs. chunk size, transfer time vs. file size, success rates, heatmaps). Optimized network performance by identifying the optimal chunk size (131,072 bytes) for maximum throughput.',
    technologies: ['PHP', 'Python', 'Bash', 'Matplotlib', 'Pandas', 'Seaborn', 'Computer Networking', 'Performance Optimization', 'Linux/WSL'],
    category: 'other',
    featured: false
  },
  {
    id: '6',
    title: 'Test Automation & CI/CD',
    slug: 'test-automation-cicd',
    description: 'DevOps workflow with test automation framework integrated into CI/CD pipelines for distributed systems.',
    longDescription: 'Designed and implemented a DevOps workflow that emphasized automation, scalability, and resilience while supporting a distributed disaster response coordination system. Built a test automation framework tightly integrated into CI/CD pipelines to improve software reliability and accelerate deployment. Developed automated unit, integration, and system tests to ensure correctness of individual modules and data flow across components. Built a test case management system enabling developers to easily create, modify, and organize test suites. Integrated testing directly into CI/CD pipelines, providing immediate feedback on code quality after commits and pull requests. Generated detailed reports (pass/fail rates, code coverage, and historical trends) to guide quality improvements. Implemented robust error handling, logging, and security practices to protect test data and streamline debugging.',
    technologies: ['DevOps', 'Automated Testing', 'CI/CD', 'Infrastructure as Code', 'Software Quality Assurance', 'Test Automation'],
    category: 'other',
    featured: false
  }
]
