# Rama Pudjiantoro - Personal Website

## Overview
Website pribadi untuk Rama Pudjiantoro, mahasiswa Telkom University berusia 21 tahun yang passionate dengan boxing, AI, blockchain, dan pengembangan diri. Website ini mempresentasikan identitas, nilai hidup, visi, perjalanan harian, dan ambisi profesional secara jujur, elegan, dan modern.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons

## Project Structure
```
client/src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Navigation.tsx  # Fixed header navigation
│   ├── HeroSection.tsx # Homepage hero
│   ├── AboutPreview.tsx
│   ├── VisionPreview.tsx
│   ├── JourneyPreview.tsx
│   ├── BoxingBusinessPreview.tsx
│   ├── ProjectsPreview.tsx
│   ├── JournalPreview.tsx
│   ├── ContactCTA.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with all sections
│   ├── About.tsx       # Full biography and values
│   ├── Vision.tsx      # 5-year plan and goals
│   ├── Journey.tsx     # Daily routine
│   ├── BoxingBusiness.tsx # Boxing passion and business
│   ├── Projects.tsx    # Active projects
│   ├── Journal.tsx     # Blog/reflections
│   └── Contact.tsx     # Contact form
└── App.tsx             # Main app with routing
```

## Pages
1. **Home** (`/`) - Hero section + preview sections
2. **About** (`/about`) - Full biography, values, timeline
3. **Vision** (`/vision`) - 5-year blueprint, long-term goals
4. **Journey** (`/journey`) - Daily routine, habit tracker
5. **Boxing & Business** (`/boxing-business`) - Passion + ventures
6. **Projects** (`/projects`) - Active projects, tech stack
7. **Journal** (`/journal`) - Blog entries with search/filter
8. **Contact** (`/contact`) - Contact form, social links

## Design
- **Theme**: Minimalis, maskulin, modern
- **Colors**: Hitam, putih, gold/amber accent
- **Typography**: Inter (sans), JetBrains Mono (mono)
- **Dark Mode**: Supported via ThemeToggle

## Key Features
- Responsive design (mobile + desktop)
- Smooth scroll animations with Framer Motion
- Dark/light mode toggle
- Interactive journal with search and category filters
- Contact form with validation and success feedback

## Running the Project
```bash
npm run dev
```
The app runs on port 5000.

## Future Enhancements
- Backend integration for contact form (email sending)
- CMS for journal entries
- Blog system with real database
- Newsletter subscription
- Analytics integration
