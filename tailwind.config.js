module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2269AB',
        // "primary-dark:"
        secondary: '#22ABA6',
        tDark: '#2C3B49',
        tLight: '#3F4E5B',
        cLight: '#9CABB9',
        secondaryLight: '#94D5F4',
        danger: '#DC2050',
        success: '#008B5E',
        bGray: '#F8F9FA',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
