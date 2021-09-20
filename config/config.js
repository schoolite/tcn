module.exports = {
     purge: [],
     darkMode: false, // or 'media' or 'class'
     theme: {
          colors: {
               primaryColor: '#2269AB',
               // primaryColorLight: '#22ABA6',
               // SecondaryColor: '#',
               // textColor: '#2C3B49',
               // 'textColor-400': '#3F4E5B',
          },
          textColor: theme => theme('colors'),
          fontFamily: {
               
          },
          // colors: {},
          // colors: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
};