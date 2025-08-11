# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for Luis Gustavo Hedel Marchiore, a Software Engineer specializing in Full-Stack Development and Computer Vision. The site features internationalization (i18n) with English and Portuguese support, dark/light theme switching, and dynamic project data fetching from GitHub.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

### Next.js App Router Structure
- Uses App Router with internationalization via `[locale]` dynamic route
- Main layout: `src/app/[locale]/layout.tsx` with metadata and providers
- Single page application: `src/app/[locale]/page.tsx`

### Internationalization (i18n)
- **Configuration**: `src/i18n.ts` with supported locales ['en', 'pt']
- **Messages**: `messages/en.json` and `messages/pt.json` contain all translations
- **Implementation**: Uses `next-intl` plugin configured in `next.config.mjs`
- **Navigation**: Custom navigation setup in `src/navigation.ts`
- **Middleware**: `src/middleware.ts` handles locale detection and routing

### Component Architecture
- **Section-based**: Components organized by page sections (AboutMe, Experience, Education, etc.)
- **Modular**: Each component in its own directory with index.tsx
- **Responsive**: Mobile (CellNav) and desktop (PcNav) navigation components
- **Modal system**: Reusable modal components in `src/components/modal/`

### Styling & UI
- **Tailwind CSS**: Primary styling framework
- **Theme system**: Dark/light mode via `next-themes` in providers
- **Custom CSS**: Additional styles in `src/styles/` directory
- **Flowbite React**: UI component library for enhanced components

### Data & Services
- **GitHub API**: `src/services/api.js` configured with GitHub API integration
- **Environment variables**: Supports both `TOKEN` and `GITHUB_TOKEN` for API access
- **Axios**: HTTP client with 15-second timeout and bearer token authentication

### Key Features
- **Dynamic Projects**: Fetches project data from GitHub API
- **Responsive Design**: Mobile-first approach with responsive navigation
- **SEO Optimized**: Comprehensive metadata and OpenGraph tags
- **Theme Toggle**: Persistent dark/light mode switching
- **Language Toggle**: Seamless switching between English and Portuguese

## Environment Variables

Set in `.env.local` (not tracked in git):
```
TOKEN=your_github_token
# or
GITHUB_TOKEN=your_github_token
```

## Important Files to Understand

- `src/providers/providers.js` - Theme provider wrapper with hydration handling
- `src/hooks/useLocale.ts` - Custom hook for locale management
- `src/services/api.js` - GitHub API configuration and axios instance
- `messages/*.json` - Translation files for all UI text
- `src/i18n.ts` - Internationalization configuration

## Development Patterns

- Components use TypeScript for type safety
- Client components marked with "use client" directive
- Custom hooks for reusable logic (locale handling)
- Modular component structure with clear separation of concerns
- Environment-based API configuration for different deployment stages