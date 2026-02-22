
# GoRent – Car Rental React Js Website Template

## Project overview
Gorent is a modern, clean, and uniquely designed responsive React JS template. It is an ideal solution for car rental services, auto dealerships, vehicle leasing companies, booking platforms, and other automotive-related businesses that need an attractive and effective way to showcase their services to clients.

## Features
Includes 06+ Home versions
Includes 30+ Inner pages
Built on React 19.x
Used FontAwesome & Flaticon Icons
No Console Errors
Clean & Commented Code
Flexible, Customizable & Organized
CSS3 Animations
Advance Bootstrap 5 Framework
Truly SEO Optimized Code
Cross Browser Compatibility
W3C Validate Code
Fully Responsive
Extensive Documentation
Easy to Customize and Developer Friendly
Clean and commented code
Smooth Transition Effects
All Modern Browser Compatible [IE 11, Firefox, Chrome, Opera and Safari]
Retina Ready.
24/7 Awesome Support
Detailed documentation


## 🚀 Tech Stack
- React 19
- Vite
- React Router
- Bootstrap 5
- Framer Motion
- Swiper.js

## ✨ Features
- Client-side routing using React Router
- Smooth animations with Framer Motion
- Property sliders using Swiper
- Responsive design with Bootstrap
- Progress bars and counters for stats
- Intersection Observer for scroll-based effects

## 📦 Dependencies
- @ramonak/react-progress-bar
- framer-motion
- react-countup
- react-fast-marquee
- react-intersection-observer
- react-router
- swiper




## 🛠 Installation
Make sure Node.js is installed on your computer.

## Install dependencies:

For an existing project, run the following command from your project  directory: `npm install`
This command will create a node_modules folder and install all the  required dependencies.

## Run the project

Run the following command from your project directory: `npm run dev`
This command compiles the project and starts a local development server   at: `http://localhost:5173`.

## Production build
Run the following command to create a production build: `npm run build`
This builds the app for production in the `dist` folder. The build is optimized for the best performance.

## Further help
For more help with React.js, check out the React Router documentation: `https://reactrouter.com/`

Note: You can learn more from the official React Documentation: `https://react.dev/`
To learn Next.js, check out the Next.js Documentation: `https://nextjs.org/docs`











# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
