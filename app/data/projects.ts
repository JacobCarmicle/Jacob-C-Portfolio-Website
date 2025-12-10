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
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
    longDescription: 'Built a complete e-commerce solution from scratch using React and Node.js. The platform includes user authentication, product management, shopping cart, payment processing with Stripe, and a comprehensive admin dashboard for managing products, orders, and customers.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce'
  },
  {
    id: '2',
    title: 'Task Management API',
    slug: 'task-management-api',
    description: 'RESTful API for task management with authentication and real-time updates.',
    longDescription: 'Developed a robust REST API using Node.js and Express with comprehensive authentication, authorization, and real-time capabilities using WebSockets. Includes full CRUD operations, user management, and task collaboration features.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT', 'Jest'],
    category: 'api',
    featured: true,
    githubUrl: 'https://github.com/example/task-api'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    longDescription: 'Created a beautiful, performant portfolio website using Next.js for optimal SEO and performance. Features include responsive design, smooth animations, and a clean, professional aesthetic.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/portfolio'
  },
  {
    id: '4',
    title: 'Weather App',
    slug: 'weather-app',
    description: 'A responsive weather application with location-based forecasts.',
    longDescription: 'Built a weather application that provides real-time weather data and forecasts. Features include location detection, search functionality, and beautiful data visualization.',
    technologies: ['React', 'JavaScript', 'CSS', 'Weather API'],
    category: 'web',
    featured: false,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather'
  }
]

