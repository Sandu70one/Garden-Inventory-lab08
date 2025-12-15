# Mini Plant Manager - Lab 09

A Full-Stack Software Development lab project built with React, TypeScript, Vite, and Bootstrap.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client for API requests

## Features

### Core Components

1. **Banner** - Styled welcome banner with Bootstrap styling
2. **Header** - Application title with consistent spacing and shadow
3. **Footer** - Copyright information
4. **PlantList** - Bootstrap list-group displaying plants with active selection
5. **PlantCard** - Detailed plant view with badges, icons, and action buttons
6. **PlantForm** - Add new plants with validation
7. **PeopleDropdown** - Fetch and display users from JSONPlaceholder API

### Functionality

- **Search** - Filter plants by name or scientific name
- **Difficulty Filter** - Filter plants by difficulty level (Easy, Medium, Hard)
- **Add Plants** - Form with validation to add new plants
- **Delete Plants** - Remove plants from the collection
- **User Directory** - Browse users from external API with loading states

## Getting Started

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## Project Structure

```
mini-nursery/
├── src/
│   ├── components/
│   │   ├── Banner.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PlantList.tsx
│   │   ├── PlantCard.tsx
│   │   ├── PlantForm.tsx
│   │   └── PeopleDropdown.tsx
│   ├── services/
│   │   └── UserService.ts
│   ├── types/
│   │   └── Plant.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Lab Requirements Completed

- ✅ Task 1: Bootstrap integration in main.tsx
- ✅ Task 2: Banner component
- ✅ Task 3: Header & Footer components
- ✅ Task 4: PlantList with active selection
- ✅ Task 5: PlantCard with badges and icons
- ✅ Task 6: PlantForm with validation
- ✅ Task 7: PeopleDropdown with API integration
- ✅ Task 8 & 9: Main App with state management and filtering
- ✅ Task 10: UserService with JSONPlaceholder API

## State Management

The application uses React hooks for state management:
- `useState` for plants, selected plant, search, and filters
- `useMemo` for optimized filtering of plants
- Proper prop drilling to child components

## API Integration

The PeopleDropdown component integrates with JSONPlaceholder API:
- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Features: Loading spinner, error handling, user details card

## License

University Lab Project © 2024
