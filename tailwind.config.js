module.exports = {
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      transitionDuration: {
        0: '0ms',
        650: '650ms',
        2000: '2000ms',
      },
      inset: (theme) => ({
        ...theme('spacing'),
      }),
    },
    colors: {
      transparent: 'transparent',
      black: 'rgb(25,25,25)',
      white: 'rgb(255,255,255)',
      current: 'currentColor',
      red: '#FF5520',
      salmon: '#FF7777',
      gradientRed: '#E46A56',
      gradientPurple: '#6773E2',
      blue: '#206CFF',
      green: 'rgb(100,255,100)',
      orange: '#FF5520',
      lightGray: '#ECECEC',
      yellow: '#FCFF7D',
      dark: '#323232',
      light: '#FFF1F1',
    },
    fontSize: {
      xxs: '0.6rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '3.5xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '8rem',
      '9xl': '12rem',
      '10xl': '16rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
      '3xl': '2000px',
    },
    maxHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '3/4vh': '75vh',
      'toc-with-menu': 'calc(100vh - 250px)',
      'toc-no-menu': 'calc(100vh - 180px)',
      full: '100%',
    },
  },
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    18: '4.5rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
    72: '23.75rem',
  },
  height: (theme) => ({
    ...theme('spacing'),
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    button: '80px',
    '1/3': '33vh',
  }),
  variants: {
    borderStyle: ['responsive', 'hover'],
    borderWidth: ['last'],
  },
}
