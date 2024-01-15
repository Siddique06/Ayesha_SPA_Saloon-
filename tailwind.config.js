/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1025px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '869px'},
      // => @media (max-width: 767px) { ... }
      'm767': {'max': '769px'},
      // => @media (max-width: 767px) { ... 
      'cm': {'max': '431px'},
      'ms': {'max': '321px'},
      // => @media (max-width: 321px) { ... }
      
      
      'mm': {'min': '321px', 'max': '376px'},
      // => @media (min-width: 321px and max-width: 375px) { ... }
      'ml': {'min': '377px', 'max': '431px'},
      // => @media (min-width: 321px and max-width: 375px) { ... }
    },
    backgroundColor: {
      'body': '#F2DCF2', // Set the background color for the body
      'bg-pink': '#F8EBF9',
      'BackgroundContainer':'#FCEEFC',
      'primary': '#FFC107' ,// The primary color you want to use
      
    },
    textColor: {
      'bg-pink': '#F8EBF9',
      'txColor': '#ECADED',
      'spa': '#0000007D', // Replace with your custom color
      'HeadingColor':'rgba(147, 23, 150, 0.83)',
    },
    borderColor: {
      'customColor': '#ECADED', // Replace with your desired custom color
      'buttonBg': '#ffffff66',
      
    },
    fontFamily: {
      Navbody: ['Inknut Antiqua'],
      Navheading: ['Julius Sans One'],
      body: ['Gazpacho'],
    },
   
    extend: {
      inset: {
        '150': '140px',
        '484':'566px',
        '476':'467px',
        '335':'350px',
        '2px':'2px',
        '13.25rem':'13.25rem',
        '16rem':'16rem',
        '20.75rem':'20.75rem',
        '23rem':'23rem',
        '1.2rem':'1.2rem',
        '12.9rem':'12.9rem',
        '17.3rem':'17.3rem',
        '7.6rem':'7.6rem',
        '21rem':'21rem',
        '14.9rem':'14.9rem',
        '29.3rem':'29.3rem',
        '16.7rem':'16.7rem',
        '25rem':'25rem',



        
        
      },
      spacing: {
        '787':'787px',
        '45':'45%',
        '73px':'73px',
        '104px':'104px',
        '48%':'48%',
        '507px':'507.017px'
      },
      backgroundImage: {
        'about': "url('/assests/about1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      
    },
  },
  plugins: [],
};
