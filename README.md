# Karol Design System

An independent Storybook and component library for the Karol design system.

## Development
```bash
npm install
npm run storybook
```

## Build
```bash
npm run build-storybook
```

The static output is written to `storybook-static/`.

## Structure
- `.storybook/` — Storybook configuration
- `src/styles/` — Karol-prefixed design tokens and styles
- `src/components/` — reusable React components
- `src/stories/` — foundations documentation and component stories

This repository is separate from the JAKpot design-system repository and does not use its Builder. Initial tokens and patterns are adapted from the portfolio landing page CSS.
