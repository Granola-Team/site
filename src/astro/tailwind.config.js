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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        logoOrange: {
          DEFAULT: "#EDA13A",
        },
        logoDark: {
          DEFAULT: "#242934",
        }
      }
    },
  },
  plugins: [],
}
