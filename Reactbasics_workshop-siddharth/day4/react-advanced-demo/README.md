# React Advanced Demo

This project demonstrates advanced React concepts using TypeScript, including:

- Performance optimization with `useMemo` and `React.memo`
- Lazy loading components with `React.lazy` and `Suspense`
- Testing with React Testing Library
- Code quality with ESLint and Prettier

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx       # Component with useMemo and React.memo
│   └── LazySettings.tsx  # Component that is lazy-loaded
├── App.tsx               # Main application component
├── App.test.tsx          # Tests for the application
└── ...
```

## Features

### Counter Component

- Uses `useState` for state management
- Implements `useMemo` for an expensive computation
- Wrapped with `React.memo` to prevent unnecessary re-renders

### Lazy Loading

- Settings component is lazy-loaded using `React.lazy`
- Uses `Suspense` with a fallback UI during loading
- Triggered by a button click

### Testing

- Tests for counter increment functionality
- Tests for lazy-loaded component appearance

### Code Quality

- ESLint configuration for code linting
- Prettier configuration for code formatting
- npm scripts for linting and formatting

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run lint`

Runs ESLint to check for code issues.

### `npm run format`

Runs Prettier to format all code files.