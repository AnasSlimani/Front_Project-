/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/**/*.html",
  ],
  theme: {
    extend: {
      
      colors:{
        primary:"#ff8901",
        secondary:"#fb923c",
      },
      
      container:{
        center:true,
        padding:{
          default:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
         "2xl":'6rem',
        }
      }
    },
  },
  plugins: [],
};


