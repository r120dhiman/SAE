/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "pc":"1180px",
        "pc1":"1300px",
        "laptop":"830px",
        "tab":"680px",
        "phoneh":"450px",
        
     
      },
      backgroundImage:{
        "back":"url('../images/img1.png')",
      },
      fontWeight:{
        "morebold":"900"
      }
      ,
      padding: {
        "17":"6rem"
      }
    },
  },
  plugins: [],
}

