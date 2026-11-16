# HTML Guide

A React learning app for HTML lessons and interactive examples, built with Vite.

## Project structure

```text
src/
  app/                 App shell, route configuration, and app-wide store
  assets/              Imported images, icons, and other static assets
  features/
    html/              HTML-specific UI, data, pages, lessons, and state
  pages/               App-level pages shared across features
  shared/
    components/        Reusable components not owned by one feature
  styles/              Global styles and app-shell styles
  main.jsx             Application entry point
```

Keep future feature code together by responsibility: add CSS and JavaScript learning modules under `src/features/css/` and `src/features/javascript/`. Authentication (including login) and admin functionality can live under `src/features/auth/` and `src/features/admin/`, with feature-specific pages, components, data, and state kept inside each module.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run lint` checks the project with ESLint.
- `npm run preview` serves the production build locally.
