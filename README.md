# Vision Board 2026

A minimal, aesthetic, identity-focused static Next.js application for viewing and exporting a personal vision board as a high-quality image.

## Features

- 🎨 **Calm, Cinematic Design** - Neutral colors, clean typography, intentional spacing
- 🌓 **Dark/Light Theme** - Seamless theme toggle with localStorage persistence
- ✨ **GSAP Animations** - Smooth entrance and hover animations for cards
- 🎯 **Vision Board Aesthetic** - Scattered collage layout with overlapping cards
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🖼️ **Image Export** - Export your vision board as wallpaper-ready images
- 📝 **Data-Driven** - All content managed through JSON
- ⚡ **Static Site** - Fast, deployable on Vercel
- 🎯 **Template System** - Extensible architecture for future templates
- ♿ **Accessible** - WCAG AA compliant contrast ratios and focus states

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS with CSS Variables
- GSAP for animations
- react-icons for iconography
- html-to-image for export functionality
- Static generation only (no backend, no auth)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your vision board.

### Build

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Customizing Your Vision Board

### Editing Content

All vision board content is managed in `public/data/vision-board.json`:

```json
{
  "meta": {
    "title": "2026 Vision Board",
    "template": "minimal-cinematic"
  },
  "sections": [
    {
      "id": "professional",
      "title": "Professional",
      "images": ["/images/professional-1.jpg"],
      "statements": ["I build with confidence", "Dotnet is my craft"]
    }
  ],
  "quotes": ["Your inspiring quote here"]
}
```

### Adding Images

Place your images in the `public/images/` directory and reference them in the JSON file.

Supported formats: JPG, PNG, SVG

### Export Options

The app supports three export sizes:
- **Mobile Wallpaper** (1080x1920)
- **Tablet Wallpaper** (1536x2048)
- **Desktop Wallpaper** (1920x1080)

Click the "Export as Image" button in the top-right corner to download your vision board.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── VisionBoard.tsx    # Main board component
│   ├── VisionSection.tsx  # Section component
│   ├── ImageGrid.tsx      # Image grid layout
│   ├── IdentityStatements.tsx # Statement renderer
│   ├── ExportControls.tsx # Export functionality
│   └── ui/               # UI components
├── templates/            # Vision board templates
│   └── minimal-cinematic.tsx
├── lib/                  # Utilities and types
│   ├── types.ts
│   └── utils.ts
└── public/
    ├── data/
    │   └── vision-board.json
    └── images/           # Your images
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

The app is configured for static export and will work automatically on Vercel.

### Other Static Hosts

After running `npm run build`, deploy the `out` directory to any static hosting service:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3

## Design Philosophy

This app is built as a **personal ritual tool**, not a productivity app.

- No hustle culture
- No loud gradients
- Calm, grounded, intentional
- Spacing > decoration
- Smooth, meaningful animations (not flashy)
- True vision board aesthetic with scattered layout
- Accessible color contrast in both themes

## New Features

### Theme System
- Toggle between light and dark themes using the button in the top-right
- Theme preference is saved to localStorage and persists across sessions
- Smooth transitions between themes
- All components are theme-aware with proper contrast ratios

### GSAP Animations
- Smooth entrance animations when cards first appear
- Subtle hover effects with scale transformations
- Staggered animations for a more natural feel
- Animations are disabled during export to maintain quality

### Vision Board Layout
- Central title with prominent typography
- Cards arranged in a scattered, collage-style layout
- Slight rotation on cards for a physical vision board feel
- Cards straighten on hover for better readability
- Overlapping elements with proper z-index management
- Fully responsive across all screen sizes

## License

MIT

