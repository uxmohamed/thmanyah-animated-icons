# Thmanyah Video Control Icons

An interactive demonstration of animated video control icons built with Next.js and React - featuring rewind, play/pause, and forward controls with smooth animations.

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

## Customization

You can easily customize the demo by:

- Modifying the rotation angles in the click handlers
- Changing the animation spring settings (stiffness, damping)
- Adjusting the click feedback duration and effects
- Adding more control icons or animations
- Customizing the color scheme and styling

## License

This project is open source and available under the [MIT License](LICENSE).
