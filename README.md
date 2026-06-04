# Sotota Pharmacy

Sotota Pharmacy is a React + Vite web app for pharmacy and livestock care services. It provides a Bengali-first experience for families, farms, medicine guidance, breeding support, and doctor requests.

## Features

- Home page with service overview and team introduction
- Medicine corner for general medicine, supplements, and first aid
- Livestock services and advice pages
- Artificial breeding information
- Doctor request flow
- Dashboard page for internal views
- Mobile-friendly navigation with route-based pages

## Tech Stack

- React 19
- React Router DOM
- Vite
- Tailwind CSS
- DaisyUI

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run type-check` - run TypeScript type checking

## Routes

- `/` - Home
- `/medicine` - Medicine corner
- `/livestock` - Livestock services
- `/livestock-advice` - Livestock advice
- `/breeding` - Breeding information
- `/doctor-request` - Doctor request page
- `/dashboard` - Dashboard

## Project Structure

- `src/App.jsx` - main app shell and navigation
- `src/main.jsx` - app bootstrap
- `src/pages/` - route pages and supporting UI
- `src/App.css` - app-level styles
- `src/index.css` - global styles

## Notes

The app currently uses React Router for navigation and keeps the UI content centered around Sotota Pharmacy branding and services.
