/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './HomeScreen.{js,jsx,ts,tsx}',
    './Search.{js,jsx,ts,tsx}',
    // './Banner.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {customcolor: 'red'},
    },
  },
  plugins: [],
};
