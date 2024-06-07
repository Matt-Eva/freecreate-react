/** @type {import('tailwindcss').Config} */

// Break point prefixes:
// sm - 640px
// md - 768px
// lg - 1024 px
// xl - 1280px
// 2xl - 1536px

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {},
    },
  },
  plugins: [],
};
