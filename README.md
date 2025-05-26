# Healthcare Dashboard

A modern, responsive healthcare dashboard built with React, TypeScript, and Tailwind CSS. This project demonstrates the implementation of a complex UI with various components like calendars, health status indicators, and appointment scheduling.

## Features

- Clean and modern UI design
- Responsive layout
- Health status visualization
- Calendar view
- Upcoming appointments
- Sidebar navigation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/healthcare-dashboard.git
cd healthcare-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
healthcare-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Calendar.tsx
│   │   │   ├── HealthStatus.tsx
│   │   │   ├── UpcomingSchedule.tsx
│   │   │   └── Dashboard.tsx
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── App.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

MIT
