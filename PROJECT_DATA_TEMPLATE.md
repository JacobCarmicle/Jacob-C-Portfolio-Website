# Project Data Template

Use this as a template for structuring your project data. You can create a `data/projects.ts` or `data/projects.json` file with this structure.

## TypeScript Interface Example

```typescript
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'api' | 'desktop' | 'other';
  featured: boolean;
  image: string; // Path to main project image
  images?: string[]; // Additional screenshots
  liveUrl?: string;
  githubUrl?: string;
  startDate: string; // YYYY-MM format
  endDate?: string; // YYYY-MM format or 'Present'
  challenges?: string[];
  solutions?: string[];
  keyFeatures: string[];
  lessonsLearned?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
    longDescription: `
      Built a complete e-commerce solution from scratch using React and Node.js. 
      The platform includes user authentication, product management, shopping cart, 
      payment processing with Stripe, and a comprehensive admin dashboard for managing 
      products, orders, and customers.
    `,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    image: '/images/projects/ecommerce-main.png',
    images: [
      '/images/projects/ecommerce-1.png',
      '/images/projects/ecommerce-2.png',
      '/images/projects/ecommerce-3.png'
    ],
    liveUrl: 'https://your-ecommerce-demo.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    startDate: '2024-01',
    endDate: '2024-03',
    challenges: [
      'Implementing secure payment processing',
      'Handling real-time inventory updates',
      'Optimizing for mobile devices'
    ],
    solutions: [
      'Integrated Stripe API with proper error handling and webhooks',
      'Used MongoDB transactions to ensure data consistency',
      'Implemented responsive design with mobile-first approach'
    ],
    keyFeatures: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Order management system',
      'Admin dashboard for product/order management',
      'Email notifications'
    ],
    lessonsLearned: 'Learned the importance of proper error handling in payment systems and the complexity of managing state in large React applications.'
  },
  {
    id: '2',
    title: 'Task Management API',
    slug: 'task-management-api',
    description: 'RESTful API for task management with authentication and real-time updates.',
    longDescription: `
      Developed a robust REST API using Node.js and Express with comprehensive 
      authentication, authorization, and real-time capabilities using WebSockets.
      Includes full CRUD operations, user management, and task collaboration features.
    `,
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT', 'Jest'],
    category: 'api',
    featured: true,
    image: '/images/projects/api-main.png',
    liveUrl: 'https://api-docs.yourproject.com',
    githubUrl: 'https://github.com/yourusername/task-api',
    startDate: '2023-11',
    endDate: '2023-12',
    keyFeatures: [
      'RESTful API design',
      'JWT-based authentication',
      'Role-based access control',
      'Real-time updates with WebSockets',
      'Comprehensive API documentation',
      'Unit and integration tests',
      'Database migrations'
    ]
  },
  // Add more projects...
];
```

## JSON Example (Alternative)

```json
{
  "projects": [
    {
      "id": "1",
      "title": "E-Commerce Platform",
      "slug": "ecommerce-platform",
      "description": "A full-stack e-commerce platform with payment integration.",
      "technologies": ["React", "Node.js", "MongoDB"],
      "category": "web",
      "featured": true,
      "image": "/images/projects/ecommerce-main.png",
      "liveUrl": "https://demo.com",
      "githubUrl": "https://github.com/username/repo",
      "keyFeatures": [
        "User authentication",
        "Product catalog",
        "Payment processing"
      ]
    }
  ]
}
```

## Minimal Example (Quick Start)

If you want to start simple, you can use this minimal structure:

```typescript
export interface SimpleProject {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: SimpleProject[] = [
  {
    title: 'My First Project',
    description: 'A simple web app that does X, Y, and Z.',
    technologies: ['React', 'CSS'],
    image: '/images/projects/project1.png',
    githubUrl: 'https://github.com/yourusername/project1'
  }
];
```

## Tips for Writing Project Descriptions

1. **Be Specific**: Instead of "Built a website", say "Built a responsive e-commerce platform with payment processing"
2. **Show Impact**: Mention user count, performance improvements, or business outcomes if applicable
3. **Highlight Challenges**: Show problem-solving skills by mentioning technical challenges you overcame
4. **Use Action Verbs**: "Developed", "Implemented", "Designed", "Optimized", "Architected"
5. **Keep it Concise**: Short description for cards, longer for detail pages

## Example Good vs Bad Descriptions

❌ **Bad**: "Made a website with React"
✅ **Good**: "Developed a responsive task management application using React and Redux, featuring real-time collaboration and offline support"

❌ **Bad**: "Used Node.js"
✅ **Good**: "Built a RESTful API with Node.js and Express, handling 1000+ requests per minute with Redis caching and PostgreSQL database"

