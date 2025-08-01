# Mini Profile Card App

A React TypeScript application that displays profile cards with toggle functionality for user bios.

## Project Overview

This project was built as part of the **React & TypeScript Fundamentals – Part 1** exercise for Day 2. It demonstrates the use of React components, props, state management, event handling, and TypeScript for type safety.

## Features

- ✅ **ProfileCard Component**: Reusable component that accepts props for name, age, email, and bio (as children)
- ✅ **TypeScript Integration**: Full TypeScript support with proper type definitions
- ✅ **State Management**: Uses `useState` hook to toggle bio visibility
- ✅ **Event Handling**: Properly typed onClick event handlers
- ✅ **Responsive Design**: Mobile-friendly layout with CSS Grid
- ✅ **Professional Styling**: Clean design with gradient backgrounds and smooth animations
- ✅ **Multiple Profile Cards**: Displays 4 different user profiles

## Project Structure

```
react-profile-app/
├── src/
│   ├── components/
│   │   └── ProfileCard.tsx      # Main ProfileCard component
│   ├── App.tsx                  # Main App component with profile cards
│   ├── main.tsx                 # Application entry point
│   ├── App.css                  # Custom styles and Tailwind CSS
│   └── index.css                # Global styles
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
├── index.html                   # HTML entry point
└── README.md                    # This file
```

## Technologies Used

- **React 19.1.0** - Frontend framework
- **TypeScript 5.9.2** - Type safety and better development experience
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Grid** - Responsive layout system

## Component Details

### ProfileCard Component

The `ProfileCard` component accepts the following props:

```typescript
interface ProfileCardProps {
  name: string;      // User's full name
  age: number;       // User's age
  email: string;     // User's email address
  children: ReactNode; // Bio content passed as children
}
```

**Features:**
- Displays user information (name, age, email)
- Toggle button to show/hide bio with proper state management
- Smooth animations for bio reveal
- Fully typed with TypeScript interfaces

### App Component

The main App component renders:
- Header with app title and description
- Grid layout containing 4 ProfileCard instances
- Each card has unique user data and bio content

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (package manager)

### Installation & Running

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm run dev --host
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## TypeScript Features

This project demonstrates several TypeScript best practices:

1. **Interface Definitions**: Proper typing for component props
2. **Event Handler Typing**: Correctly typed onClick handlers
3. **State Typing**: Explicit typing for useState hooks
4. **Function Return Types**: Proper return type annotations

## Styling Approach

The application uses a combination of:
- **Tailwind CSS**: For utility classes and design system
- **Custom CSS**: For specific component styling and animations
- **CSS Grid**: For responsive layout
- **CSS Animations**: Smooth transitions and hover effects

## Key Learning Objectives Achieved

✅ **Props**: ProfileCard component accepts and uses props correctly  
✅ **Children**: Bio content is passed as children to the component  
✅ **State Management**: useState hook manages bio visibility  
✅ **Event Handling**: onClick events toggle bio display  
✅ **TypeScript**: Full type safety with interfaces and proper typing  
✅ **Component Reusability**: Single ProfileCard component used multiple times  
✅ **Styling**: Professional appearance with borders, padding, and spacing  

## Browser Compatibility

This application is compatible with all modern browsers and includes:
- Responsive design for mobile devices
- CSS Grid support
- Modern JavaScript features (ES6+)

## Future Enhancements

Potential improvements could include:
- Add user avatars/profile pictures
- Implement data fetching from an API
- Add form functionality to create new profiles
- Include social media links
- Add search and filter functionality

