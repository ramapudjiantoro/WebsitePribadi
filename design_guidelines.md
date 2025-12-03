# Design Guidelines: Rama Pudjiantoro Personal Website

## Design Approach
**Masculine Minimalism with Purposeful Storytelling** - Drawing inspiration from high-end personal brand sites like those of entrepreneurs and athletes, combined with the clean sophistication of Linear and the editorial elegance of Medium. The design embodies discipline, ambition, and growth through restrained yet impactful visual language.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Archivo for clean, professional headers (weights: 700-900 for headlines, 600 for subheadings)
- **Body Font**: System-ui or Inter (weights: 400-500 for body, 300 for secondary text)
- **Hierarchy**: H1 (4xl-6xl), H2 (3xl-4xl), H3 (2xl), Body (base-lg), Caption (sm)
- **Character**: Strong, confident letterforms with tight letter-spacing for headers (-0.02em)

### Layout System
**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for vertical rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 for grids, gap-6 for lists, gap-4 for tight groups
- Container: max-w-7xl for full sections, max-w-4xl for text-heavy content

### Component Library

**Navigation**
- Fixed header with blur backdrop, minimal height (h-16)
- Logo/name left-aligned, navigation links right-aligned with generous spacing (gap-8)
- Mobile: hamburger menu with full-screen overlay

**Hero Sections**
- Full viewport height (min-h-screen) with dramatic imagery
- Homepage: Large hero image showing boxing/gym/Dubai skyline with overlay gradient
- About/Vision pages: 60vh hero with supporting imagery
- Centered content with strong typographic hierarchy
- Primary CTA buttons with backdrop-blur-md background

**Content Cards**
- Borderless design with subtle hover elevation (shadow-lg on hover)
- Generous padding (p-8), rounded corners (rounded-xl)
- Grid layouts: 3 columns (desktop), 2 (tablet), 1 (mobile)

**Journal/Reflection Entries**
- Blog-style cards with date stamps, excerpt preview
- Reading time indicator, category tags
- Masonry grid or timeline layout for visual interest

**Project Showcases**
- Horizontal cards with image-text split (50-50 or 60-40)
- Alternating left-right image placement for rhythm
- Detailed descriptions with tech stack badges

**Forms (Contact)**
- Clean input fields with subtle borders, focus states with accent color
- Generous spacing between fields (gap-6)
- Large submit button as focal point

### Images Strategy
**Homepage Hero**: Powerful image of Rama boxing/training or cityscape (Dubai) with dark overlay (opacity-40) for text legibility

**About Page**: Personal photo (professional yet authentic) in circular frame or editorial crop

**Daily Journey**: Lifestyle imagery - gym equipment, journal/coffee setup, blockchain/tech screens

**Boxing & Business**: Action shots from boxing, workspace/laptop for business sections

**Projects**: Screenshots of AI automation tools, crypto wallet interfaces, business dashboards

All images should have subtle filters for cohesion (grayscale-10 or sepia-5) and consistent aspect ratios (16:9 for landscapes, 4:3 for portraits)

## Page-Specific Guidelines

**Homepage**: Hero (full viewport) → Quick intro section → Highlight cards (Vision, Journey, Projects - 3 columns) → Recent journal entries → CTA section → Footer

**About Me**: Hero with personal image → Bio narrative (max-w-3xl, centered) → Values grid (2x3 cards) → Timeline of life milestones

**Life Vision**: Hero → 5-year blueprint (horizontal timeline or numbered cards) → Long-term goals (Dubai, legacy) with supporting imagery → Progress tracker visualization

**Daily Journey**: Schedule timeline (vertical with icons) → Habit tracker visual → Photo gallery of daily activities (grid)

**Boxing & Business**: Split hero (boxing left, business right) → Dual narrative columns → Idols/inspiration section → Current ventures cards

**Projects**: Grid of project cards (2 columns) → Each project expandable or links to detail view → Tech stack and outcomes clearly displayed

**Journal**: Latest entry featured → Grid of past entries with filters → Tag cloud or category navigation

**Contact**: Centered form → Social media icon links → Email and location info

## Animations
**Minimal, Purposeful Motion**:
- Smooth scroll-triggered fade-ins for sections (opacity + translateY)
- Hover state transitions on cards (transform scale-105, shadow changes)
- Navigation scroll state changes (background blur intensifies)
- NO distracting parallax, NO carousel auto-play, NO excessive loading animations

## Accessibility
- Consistent focus states across all interactive elements (ring-2 ring-offset-2)
- Sufficient color contrast for all text (WCAG AA minimum)
- Semantic HTML structure throughout
- Alt text for all meaningful images

---

**Design Philosophy**: Every element serves the narrative of growth, discipline, and ambition. The design should feel like a personal manifesto - honest, powerful, and aspirational. Restraint in decoration, abundance in meaning.