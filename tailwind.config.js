/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // Scanne tous les fichiers JS/TS/JSX/TSX dans le répertoire app
    './pages/**/*.{js,ts,jsx,tsx}',  // Scanne tous les fichiers JS/TS/JSX/TSX dans le répertoire pages
    './components/**/*.{js,ts,jsx,tsx}',  // Scanne tous les fichiers JS/TS/JSX/TSX dans le répertoire components
    './src/**/*.{js,ts,jsx,tsx}',    // Si tu utilises un répertoire src, scanne également ses fichiers
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
