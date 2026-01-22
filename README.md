# UGC Creator Portfolio

A bold and eye-catching UGC creator portfolio web app with a fashion runway aesthetic. Think Vogue editorial meets TikTok energy.

## Features

### Landing Page
- Gallery grid showcasing multiple UGC creators
- Profile photo, name, and niche for each creator
- Smooth animations with Framer Motion
- Hover effects revealing creator bios

### Individual Portfolio Pages (`/[creatorname]`)
- **Hero Section**: Creator photo, name, bio, and contact button
- **AI Disclosure Badge**: Shows content creation method (AI-Generated, AI-Enhanced, Hybrid, or Human-Created)
- **Gallery**: Masonry-style grid layout for work samples with lightbox
- **Stats Section**: Followers, engagement rate, brands worked with
- **Testimonials Carousel**: Client testimonials with smooth transitions
- **Brand Logos**: Showcase of collaborated brands

### Design
- Bold typography with gradient text effects
- Smooth scroll animations and hover effects
- Vibrant accent colors (pink, purple, cyan, gold)
- Clean white/neutral base
- Video-first design approach
- Fully mobile responsive

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animation library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── [slug]/
│   │   └── page.tsx          # Dynamic creator portfolio pages
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Landing page
│   └── globals.css            # Global styles
├── components/
│   ├── AIDisclosureBadge.tsx  # AI content disclosure badge
│   ├── CreatorCard.tsx        # Creator preview card
│   ├── Gallery.tsx            # Image/video gallery with lightbox
│   └── TestimonialsCarousel.tsx # Testimonials slider
├── data/
│   └── creators.ts            # Mock creator data
├── types/
│   └── creator.ts             # TypeScript interfaces
└── next.config.ts             # Next.js configuration
```

## Creator Data Structure

Each creator includes:
- Basic info (name, photo, niche, bio)
- AI disclosure type
- Stats (followers, engagement rate, brands worked with)
- Gallery items (images/videos)
- Client testimonials
- Brand collaboration logos

## AI Disclosure Types

- **AI-Generated** 🤖 - Content created entirely by AI
- **AI-Enhanced** ✨ - Human content enhanced with AI tools
- **Hybrid (Human + AI)** 🤝 - Combination of human and AI work
- **Human-Created** 👤 - Fully human-created content

## Customization

### Adding New Creators

Edit `/data/creators.ts` and add new creator objects following the `Creator` interface defined in `/types/creator.ts`.

### Styling

- Global styles: `/app/globals.css`
- Color scheme: Update CSS variables in `globals.css`
- Tailwind config: Inline theme in `globals.css`

## Features Highlights

- ✨ Smooth page transitions with Framer Motion
- 📱 Fully responsive design
- 🎨 Fashion runway aesthetic
- 🖼️ Image gallery with lightbox
- 💫 Animated testimonials carousel
- 🏷️ AI content disclosure badges
- ⚡ Optimized with Next.js Image component

## License

MIT

---

Built with ❤️ for UGC creators
