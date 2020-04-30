const animation = {
  default: '400ms ease-in',
  fast: '300ms ease-in'
}

const breakpoints = [
  // mobile
  "320px",
  // tablet
  "768px",
  // computer
  "992px",
  // desktop
  "1200px",
  // widescreen
  "1920px"
]

const colors = {
  text: '#111212',
  background: '#fff',
  primary: '#2F5AF3',
  secondary: '#6D59F0',
  muted: '#f6f6f9',
  gray: {
    light: "#EEEEEE",
    dark: '#5B5B5B',
  },
  highlight: 'hsla(205, 100%, 40%, 0.125)',
  white: '#FFF',
  black: '#111212',
}

const gradients = {
  subtle: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  purple: `linear-gradient(180deg, ${colors.primary} 0%, #A000C4 100%)`,
  blue: `linear-gradient(180deg, #00D2FF 0%, ${colors.secondary} 100%)`
}

const fonts = {
  body: 'Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif',
  heading: 'Poppins, Helvetiva Neue, Helvetica, Aria, sans-serif',
  monospace: 'Menlo, monospace',
}

const theme = {
  animation,
  breakpoints,
  mediaQueries: {
    mobile: `@media screen and (min-width: ${breakpoints[0]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]})`,
    computer: `@media screen and (min-width: ${breakpoints[2]})`,
    desktop: `@media screen and (min-width: ${breakpoints[3]})`,
    widescreen: `@media screen and (min-width: ${breakpoints[4]})`,
  },
  colors,
  gradients,
  fonts,
  fontSizes: [12, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
    text: breakpoints[2],
  },
  radii: {
    default: 8,
    circle: 99999,
  },
  shadows: {
    default: '0px 5px 10px rgba(0, 0, 0, 0.12)',
    card: {
      light: '15px 15px 35px rgba(0, 127, 255, 0.5)',
      dark: `7px 7px 15px ${colors.primary}`,
    },
  },
  // rebass variants
  text: {
    header: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [4, 4, 5, 6],
      marginBottom: 3,
    },
    subheader: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [3, 3, 4, 4],
      marginBottom: 3,
    },
    h2: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [2, 3, 4, 5],
      marginBottom: 3,
    },
    h3: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [2, 2, 3, 3],
      marginBottom: 3,
    },
    h4: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [1],
      marginBottom: 3,
    },
    label: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [0],
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    paragraph: {
      fontFamily: fonts.body,
      lineHeight: '1.75',
      fontSize: [1, 2],
      marginBottom: 4,
    },
    list: {
      fontFamily: fonts.body,
      lineHeight: '1.75',
      fontSize: [1, 2],
      marginBottom: 3,
    },
    display: {
      fontFamily: fonts.body,
      lineHeight: '1.5',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
      avatar: {
        width: 'avatar',
        height: 'avatar',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '3rem',
      },
    },
    link: {
      color: 'primary',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      },
    },
    hr: {
      width: '100%',
      borderTop: 0,
      borderBottom: '1px solid black',
      my: 4,
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      py: 3,
      px: 4,
    },
    masthead: {
      fontSize: 3,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      py: 3,
      px: 5,
      boxShadow: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'black',
      bg: 'white',
      border: '1px solid #000',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      fontFamily: fonts.body,
      fontWeight: 'normal',
      lineHeight: '1.5',
    },
  },
}

export default theme;