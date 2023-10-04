/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        body: ['Poppins'] 
      },
      spacing: {
        '95': '95%',
        '80': '80vh',
        '200': '200px'
      }
    },
  },
  plugins: [],
}

