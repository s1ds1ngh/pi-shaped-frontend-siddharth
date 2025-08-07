# Next.js Rendering Demo

This project demonstrates different rendering methods in Next.js using TypeScript, specifically comparing Client-Side Rendering (CSR) and Server-Side Rendering (SSR).

## Project Structure

```
pages/
├── api/
│   └── fruits.ts       # API endpoint that returns fruit data
├── csr.tsx             # Client-Side Rendering example
├── ssr.tsx             # Server-Side Rendering example
└── index.tsx           # Home page with links to examples
```

## Features

### API Route

- `/api/fruits` endpoint that returns an array of fruits
- Simulates a real API with a small delay

### Client-Side Rendering (CSR)

- Implemented in `pages/csr.tsx`
- Uses `useEffect` to fetch data from the API on the client side
- Demonstrates loading states and error handling

### Server-Side Rendering (SSR)

- Implemented in `pages/ssr.tsx`
- Uses `getServerSideProps` to fetch data on the server for each request
- Shows the server timestamp to demonstrate server-side execution

## CSR vs SSR Comparison

### Client-Side Rendering (CSR)

**How it works:**
- The browser receives an empty HTML shell from the server
- JavaScript is downloaded and executed
- React components are rendered in the browser
- Data is fetched from the API after the component mounts
- The UI updates once data is received

**Pros:**
- Reduced load on the server
- Good for highly interactive applications
- Faster subsequent page transitions
- Works well with private, user-specific data

**Cons:**
- Slower initial page load
- Poorer SEO (search engines may not see all content)
- Users see loading states
- Requires more client-side JavaScript

### Server-Side Rendering (SSR)

**How it works:**
- The server fetches data for each request
- The server renders the React components with the data
- The browser receives fully rendered HTML
- JavaScript is hydrated on the client for interactivity

**Pros:**
- Better SEO as search engines see the full content
- Faster initial page load and First Contentful Paint
- Good for static or infrequently updated content
- Works well without JavaScript enabled

**Cons:**
- Higher server load
- Slower Time to Interactive
- Full page reloads between pages
- Each request requires data fetching and rendering

## When to Use Each Method

**Use CSR when:**
- Building highly interactive applications
- Creating private dashboards or user-specific content
- SEO is not a primary concern
- You want to reduce server load

**Use SSR when:**
- SEO is important (e.g., marketing pages, blogs)
- Initial load performance is critical
- Content is the same for all users
- You want to ensure content is visible even without JavaScript

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.

### `npm run build`

Builds the app for production.

### `npm start`

Runs the built app in production mode.

### `npm run lint`

Runs ESLint to check for code issues.