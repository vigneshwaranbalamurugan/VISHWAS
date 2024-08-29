/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('./src/assets/firstloginform.jpg')",
        mobile: "url('../images/bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}