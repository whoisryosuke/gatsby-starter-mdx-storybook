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
  background: '#F5F5F5',
  primary: '#2F5AF3',
  secondary: '#6D59F0',
  muted: '#f6f6f9',
  gray: {
    light: '#EEEEEE',
    border: '#E9E9E9',
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
  heading: 'Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif',
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
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 'bold',
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
    hover: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  },
  // rebass variants
  text: {
    header: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [4, 4, 5, 6],
      marginBottom: 3,
    },
    subtitle: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [3, 3, 4, 5],
      marginBottom: 2,
    },
    h2: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [2, 3, 4],
      marginBottom: 2,
    },
    h3: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [2, 2, 3, 3],
      marginBottom: 2,
    },
    h4: {
      fontFamily: fonts.heading,
      lineHeight: '1.25',
      fontSize: [1],
      marginBottom: 2,
    },
    label: {
      color: 'gray.dark',
      fontFamily: fonts.body,
      fontWeight: 'normal',
      lineHeight: '1.25',
      fontSize: [0, 1],
      textTransform: 'uppercase',
    },
    small: {
      fontFamily: fonts.body,
      color: 'gray.dark',
      fontSize: [0, 1],
    },
    paragraph: {
      fontFamily: fonts.body,
      lineHeight: '1.75',
      fontSize: [1, 2],
      marginBottom: 3,
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
      borderRadius: 'default',
      bg: 'white',
      boxShadow: 'default',
      overflow: 'hidden',
      transition: 'box-shadow 400ms ease-in, transform 400ms ease-in',
      transform: 'translateY(0)',
      '&:hover': {
        boxShadow: 'hover',
        transform: 'translateY(-0.5em)',
      },
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
      bg: 'primary',
      color: 'white',
      border: 0,
      borderRadius: 'default',
      fontSize: 2,
      fontWeight: 'bold',
      textDecoration: 'none',
      py: 3,
      px: 4,
      boxShadow: 'default',
      position: 'relative',
      transition: 'box-shadow 400ms ease-in, transform 400ms ease-in',
      transform: 'translateY(0)',
      ':hover,:focus,.active': {
        bg: 'primary',
        color: 'white',
        boxShadow: 'hover',
        transform: 'translateY(-0.25em)',
      },
    },
    masthead: {
      variant: 'buttons.primary',
      fontSize: 3,
      color: 'background',
      bg: 'primary',
      py: 3,
      px: 5,
    },
    outline: {
      variant: 'buttons.primary',
      color: 'gray.dark',
      bg: 'white',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray.border',
      boxShadow: 'none',
    },
    white: {
      variant: 'buttons.primary',
      color: 'black',
      bg: 'white',
      ':hover,:focus,.active': {
        color: 'black',
        bg: 'white',
      },
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