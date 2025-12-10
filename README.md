# Jacob C Portfolio Website 🕹️

A retro arcade-style portfolio website built with Next.js, React, and Tailwind CSS. 
Inspired by classic NES/SNES games with a pixel art aesthetic.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- 🎮 **Start Game Menu** - Classic arcade-style main menu
- 🕹️ **Arcade Cabinets** - Projects displayed as playable arcade machines
- 🏆 **Achievements** - Skills showcased as unlockable achievements
- 🎨 **Retro Aesthetic** - Pixel art design with NES/SNES color palette
- ⌨️ **Keyboard Navigation** - Use arrow keys to navigate the menu

## Project Structure

```
app/
  ├── data/
  │   └── projects.ts      # Project data
  ├── projects/
  │   ├── page.tsx         # Arcade room with cabinets
  │   └── [slug]/
  │       └── page.tsx     # Individual game details
  ├── achievements/
  │   └── page.tsx         # Achievements/skills page
  ├── about/
  │   └── page.tsx         # Player profile page
  ├── layout.tsx           # Root layout
  ├── page.tsx             # Start Game menu
  └── globals.css          # Retro arcade styles
```

## Customization

### Update Project Data
Edit `app/data/projects.ts` to add, modify, or remove projects (arcade cabinets).

### Update Achievements
Edit `app/achievements/page.tsx` to add or modify skill achievements.

### Update Personal Information
- Edit `app/page.tsx` for Start Game menu
- Edit `app/about/page.tsx` for player profile
- Update metadata in `app/layout.tsx`

### Styling
The project uses Tailwind CSS with custom retro arcade styles. 
- Colors are defined in `app/globals.css` CSS variables
- Uses "Press Start 2P" pixel font from Google Fonts
- Modify `tailwind.config.js` to extend the theme

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be easily deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform that supports Next.js

---

**Status**: Ready to customize and deploy! 🚀
