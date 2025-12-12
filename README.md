# Jacob C Portfolio Website 🕹️

A retro arcade-style portfolio website showcasing projects, achievements, and professional experience. Built with modern web technologies and featuring a unique pixel-art aesthetic inspired by classic NES/SNES games.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router for server-side rendering and optimal performance
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development for improved code quality and maintainability
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Key Features & Implementation

#### Frontend Architecture
- **App Router** - Next.js 13+ App Router for file-based routing and layouts
- **Server Components** - Optimized server-side rendering for better performance
- **Client Components** - Interactive features using React hooks and state management
- **Image Optimization** - Next.js Image component for automatic image optimization and lazy loading

#### UI/UX Features
- **Interactive Image Slideshow** - Custom-built carousel component with navigation controls
- **Keyboard Navigation** - Full keyboard support (arrow keys, Enter) for accessibility
- **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes
- **Pixel Art Aesthetic** - Custom CSS with retro color palette and pixel fonts
- **Dynamic Routing** - Dynamic project pages with slug-based routing

#### Performance Optimizations
- **Static Generation** - Pre-rendered pages for fast load times
- **Code Splitting** - Automatic code splitting by Next.js
- **Image Optimization** - Automatic WebP conversion and responsive images
- **CSS Optimization** - Tailwind CSS purging for minimal bundle size

## 📁 Project Structure

```
app/
  ├── components/
  │   └── ImageSlideshow.tsx    # Reusable image carousel component
  ├── data/
  │   └── projects.ts           # TypeScript project data structure
  ├── projects/
  │   ├── page.tsx              # Projects listing (Arcade Room)
  │   └── [slug]/
  │       └── page.tsx           # Dynamic project detail pages
  ├── achievements/
  │   └── page.tsx               # Skills/achievements showcase
  ├── about/
  │   └── page.tsx               # Professional profile page
  ├── layout.tsx                 # Root layout with metadata
  ├── page.tsx                   # Home page (Start Game menu)
  └── globals.css                # Global styles and CSS variables
```

## 🎨 Key Features

### 1. Arcade-Style Navigation
- Retro-inspired main menu with keyboard navigation
- Projects displayed as interactive "arcade cabinets"
- Achievement system showcasing technical skills

### 2. Project Showcase
- **Dynamic Project Pages** - Individual pages for each project with detailed descriptions
- **Image Slideshow** - Multi-image carousel with navigation controls and indicators
- **Technology Tags** - Visual representation of tech stack for each project
- **Featured Projects** - Highlighted projects with special badges

### 3. Professional Profile
- Work experience display
- Education information
- Skills and technologies grid
- Contact information with social links

### 4. Achievements System
- Skills presented as unlockable achievements
- Progress tracking with visual indicators
- Achievement badges with icons and descriptions

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup
No environment variables required for basic functionality. The site is fully static and ready to deploy.

## 📦 Dependencies

### Production
- `next@14.0.4` - React framework
- `react@^18.2.0` - UI library
- `react-dom@^18.2.0` - React DOM rendering

### Development
- `typescript@^5` - Type checking
- `tailwindcss@^3.3.0` - CSS framework
- `@types/node`, `@types/react`, `@types/react-dom` - TypeScript definitions

## 🎯 Notable Technical Achievements

1. **Type-Safe Project Data** - TypeScript interfaces for project structure ensuring type safety
2. **Reusable Components** - Modular component architecture (ImageSlideshow)
3. **Performance Optimized** - Server-side rendering, image optimization, and code splitting
4. **Accessible Design** - Keyboard navigation and semantic HTML
5. **Responsive Layout** - Mobile-first design with Tailwind CSS breakpoints
6. **Dynamic Content** - Dynamic routing for project pages with slug-based URLs
7. **Modern React Patterns** - Hooks, functional components, and client/server component separation

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (Recommended) - Zero-config deployment for Next.js
- **Netlify** - Supports Next.js with build configuration
- **Any Node.js hosting** - Can be deployed as a static export or Node.js app

### Build Output
- Static HTML, CSS, and JavaScript
- Optimized images and assets
- Server-side rendered pages for SEO

## 📝 Customization

### Adding Projects
Edit `app/data/projects.ts` to add new projects. Supports:
- Single image (`imageUrl`)
- Multiple images for slideshow (`imageUrls`)
- Technologies array
- Featured project flag

### Updating Content
- **About Page**: `app/about/page.tsx`
- **Achievements**: `app/achievements/page.tsx`
- **Home Page**: `app/page.tsx`
- **Styling**: `app/globals.css` and `tailwind.config.js`

## 🎨 Design System

- **Color Palette**: Retro arcade colors (#1a1a2e, #00d2ff, #6c5ce7, #ffd93d)
- **Typography**: "Press Start 2P" pixel font from Google Fonts
- **Components**: Reusable arcade-style buttons, borders, and cards
- **Animations**: CSS transitions and hover effects

## 📊 Project Highlights

- **6 Featured Projects** - Showcasing full-stack, mobile, and system architecture work
- **8 Technical Achievements** - Skills and technologies demonstrated
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Fast Performance** - Optimized for Core Web Vitals and SEO

## 🔗 Links

- **Live Site**: [Add your deployed URL]
- **GitHub**: https://github.com/JacobCarmicle
- **LinkedIn**: https://www.linkedin.com/in/jacob-carmicle-79b644260
- **Email**: Jacob.Carmicle@gmail.com

---

**Status**: Production Ready 🚀

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
