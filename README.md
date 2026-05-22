This project demonstrates the concept about creating an in-app IDE for React Native using Expo and React Native Web. It allows you to view all screens of your app at once in a blueprint-style view and edit design tokens in real-time.

## Features

- **Blueprint View**: See all screens of your app at once
- **Live Design Token Editing**: Update colors and see changes in real time
- **Redux State Monitoring**: Watch state changes as you interact with the app
- **Expo Router**: Modern navigation with file-based routing
- **Cross-platform**: Works on iOS, Android, and Web

## Installation

## Running the App

```bash
# Start the development server
npm start

# Run on web (for IDE features)
npx expo start --web

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Using the IDE

1. Start the app in web mode
2. Navigate to `/ide` in your browser (e.g., http://localhost:8081/ide)
3. You'll see all screens of your app laid out in a blueprint view
4. Use the left panel to toggle between token editing and Redux state monitoring
5. Click on any color value to edit it and see changes in real time
6. Changes to tokens will be written to the tokens.json file

## Project Structure

```
app/
├── (app)/                # Main app routes
│   ├── _layout.tsx       # Layout for main app
│   ├── index.tsx         # Home screen
│   ├── login.tsx         # Login screen
│   ├── story-list.tsx    # Story list screen
│   ├── passage/[id].tsx  # Passage detail screen
│   └── study/[id].tsx    # Study flashcards screen
├── (ide)/                # IDE routes
│   ├── _layout.tsx       # Layout for IDE
│   └── index.tsx         # IDE main screen
├── _layout.tsx           # Root layout
├── ide.tsx               # Redirect to IDE
└── tokens.json           # Design tokens
```

## How It Works

The app uses Expo Router with two main route groups:

- `(app)`: Contains the actual app screens for normal use
- `(ide)`: Contains the special IDE view for development

The design token updates happen through a server that writes to the tokens.json file, which gets hot-reloaded by Fast Refresh.

## Credits