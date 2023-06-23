/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
  },
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
//   purge: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//     "./app/**/*.{js,ts,jsx,tsx}",
//         "./pages/**/*.{js,ts,jsx,tsx}",
//         "./components/**/*.{js,ts,jsx,tsx}",
          
//         // Or if using `src` directory:
//         "./src/**/*.{js,ts,jsx,tsx}",
// ],
// purge: [
//   './pages/**/*.js', './components/**/*.js'
// ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
          
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/pages/Login.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'heroblack':'#000814',
        'myYellow':'#FFD60A',
        'recoveryBg':'#F2F2F2',
        'dashboardBg':'#14213d',
        'keyTrendsText':'rgb(0, 53, 102)',
        
      },
      boxShadow:{
       "modemBox":'10px 14px 2px 56px rgba(49,46,49,0.7)',
       "modemMobileBox":"10px 14px 2px 40px rgba(49,46,49,0.7)" 
      },
      screens:{
        'xsm':{min:"200px",max:"500px"},
        'msm':'300px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px'
        
      }
     
    },
  },
  plugins: [],
  variants: {},
}
