/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster Two", "sans-serif"],
        caveat: ["Caveat", "sans-serif"]
      },
      colors: {
        "twitter-blue": "#1DA1F2",
        "primary-text": "#081A3E",
        "text-color": "#1D438A"
      }
    },
  },
  plugins: [],
}

