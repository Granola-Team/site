/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: ["./src/index.html", "./src/**/*.{astro,md,mdx,js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: true,
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      backgroundImage: {
        nature:
          "url('/images/mike-benna-SBiVq9eWEtQ-unsplash.jpg')",
      },
      colors: {
        logoOrange: {
          DEFAULT: "#EDA13A",
        }
      }
    },
  },
  plugins: [],
}
