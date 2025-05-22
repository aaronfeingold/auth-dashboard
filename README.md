# Auth Dashboard

A TypeScript + React + Vite project that demonstrates a login interface and a protected data dashboard. This project showcases the use of a Context Factory, authorized routes, useReducer, and mock API functions to simulate authentication and data fetching. The UI is built using TailwindCSS and is visually polished.

## 🔧 Requirements

### Project Setup
- React with Vite (vite + react-ts)
- TailwindCSS pre-configured
- ESLint + Prettier (recommended but optional)

### Auth Flow
- AuthProvider using Context + useReducer (Context Factory pattern)
- Login/logout functions and token simulation (no real backend)
- Persist auth state in localStorage
- A useAuth() hook for easy consumption

### Mock API
- Simulate fetch calls with setTimeout to mock async login and dashboard data retrieval
- Mock login with fixed credentials (e.g., user@example.com / password)

### Routing
- Use React Router DOM
- Create a ProtectedRoute HOC or wrapper component to guard dashboard routes
- Unauthenticated users should be redirected to login

### Pages
- /login: login form (email/password fields)
- /dashboard: authenticated-only route showing mock data cards

### Dashboard UI
- TailwindCSS components (charts, metric cards, layout)
- Use placeholder data from mock API

### Stretch Goals (optional)
- Add a loading spinner for fetch delays
- Add dark mode toggle
- Show toast notifications for login success/failure

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

- `src/api/` - Mock API functions for auth and dashboard
- `src/components/` - Reusable components (ProtectedRoute, Spinner, Toast)
- `src/context/` - AuthContext and AuthProvider
- `src/hooks/` - useAuth hook
- `src/pages/` - Login and Dashboard pages
- `src/types/` - TypeScript interfaces for auth and dashboard

## 🔍 Features

- **Authentication**: Simulated login/logout with localStorage persistence
- **Protected Routes**: Dashboard is only accessible when authenticated
- **Mock Data**: Simulated KPIs and transactions for the dashboard
- **Responsive UI**: Built with TailwindCSS for a modern look

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Context API + useReducer
