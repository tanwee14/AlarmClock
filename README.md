# ⏰ Alarm Clock React App

This is a simple and elegant Alarm Clock built using React. It allows users to set an alarm for a specific time and alerts the user when the set time is reached.

## Features

- Displays real-time digital clock.
- Dropdown selectors to set alarm hour and minute.
- Alarm rings with an alert popup at the specified time.
- Minimal, clean, and responsive design.

## Technologies Used

- React (Hooks: `useState`, `useEffect`)
- CSS for styling

## How It Works

- The current time updates every second using `setInterval`.
- Alarm is triggered when the current hour and minute match the selected values.

## Getting Started

### Installation

```bash
git clone <your-repo-url>
cd alarm-clock-react
npm install
npm start


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
