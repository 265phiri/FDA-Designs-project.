/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        monserrat: ['Monserrat', 'sans-serif'],
        urbanist:  ['Urbanist', 'sans-serif'],
        allura: ['Allura', 'cursive'],
        josefin:['Josefin Sans', 'sans-serif']
      
      },
      fontSize: {
        ten: ['10px'],
        fourteen: ['14px'],
        seventeen: ['17px'],
        twenty: ['20px'],
        threesix: ['36px'],
        fifty: ['50px'],
        sixtysix: ['66px'],
        seventy: ['70px'],
        eighty: ['80px'],
        eighteight: ['88px'],
        onefifty: ['150px'],
        twohands: ['200px'],
        
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'light': '#f5f5f5',
        'gray': '#d9d9d9',
        'gold': '#e8a106',
        'mostlyblack':'#333333'
    },
      lineHeight: {
        'big': '4rem',
        'mid': '3rem',
    },
    screens: {
      'xs': '320px'
    }
  },
  plugins: [
    // ...

],
}
}
