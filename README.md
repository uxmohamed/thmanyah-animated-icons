# Video Control Icons

An interactive demonstration of animated video control icons built with Next.js and React - featuring rewind, play/pause, and forward controls with smooth animations.

## Features

- **Interactive Controls**: Click the rewind, play/pause, or forward icons to see them animate
- **Smooth Animations**: Uses Framer Motion for natural spring animations
- **Play/Pause Toggle**: Dynamic icon switching between play and pause states
- **Persistent Rotation**: Rewind and forward icons maintain their rotated position
- **Click Feedback**: Visual feedback with background highlights and scale effects
- **Modern Design**: Clean, dark theme with consistent styling
- **Responsive**: Works on all screen sizes
- **TypeScript**: Fully typed for better development experience

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animation library
- **Custom SVGs** - Hand-crafted icon designs

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd video-control-icons
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## How It Works

The demo features three custom SVG icons:

1. **Rewind Icon**: Rotates counter-clockwise (-360°) when clicked, maintains position
2. **Play/Pause Icon**: Toggles between play (triangle) and pause (bars) states
3. **Forward Icon**: Rotates clockwise (360°) when clicked, maintains position

Each icon uses:
- React state to track rotation angle and animation status
- Framer Motion for smooth spring animations
- Click feedback with background highlights and scale effects
- Consistent styling and interaction patterns

## Project Structure

```
video-control-icons/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main demo page
├── components/          # Reusable components
│   ├── ForwardIcon.tsx  # Forward control component
│   ├── RewindIcon.tsx   # Rewind control component
│   └── PlayPauseIcon.tsx # Play/pause toggle component
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── public/             # Static assets
```

## Customization

You can easily customize the demo by:

- Modifying the rotation angles in the click handlers
- Changing the animation spring settings (stiffness, damping)
- Adjusting the click feedback duration and effects
- Adding more control icons or animations
- Customizing the color scheme and styling

## License

This project is open source and available under the [MIT License](LICENSE).