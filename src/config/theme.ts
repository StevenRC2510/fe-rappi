import { createMuiTheme } from '@material-ui/core/styles';

const {
  breakpoints,
  typography: { pxToRem },
} = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const palette = {
  primary: {
    light: '#83E3A5',
    main: '#2DBE60',
    dark: '#007665',
    contrastText: '#fff',
  },
  secondary: {
    light: '#9DA9B3',
    main: '#022239',
    dark: '#0E1023',
    contrastText: '#fff',
  },
  error: {
    light: '#FCE6E6',
    main: '#F95350',
    contrastText: '#fff',
  },
};

const typography = {
  h1: {
    fontSize: pxToRem(48),
    lineHeight: pxToRem(56),
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(28),
      lineHeight: pxToRem(32),
    },
  },
  h2: {
    fontSize: pxToRem(36),
    lineHeight: pxToRem(42),
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(24),
      lineHeight: pxToRem(32),
    },
  },
  h3: {
    fontSize: pxToRem(28),
    lineHeight: pxToRem(32),
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(24),
    },
  },
  h4: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(32),
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
  },
  h5: {
    fontSize: pxToRem(18),
    lineHeight: pxToRem(24),
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
  },
  h6: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  useNextVariants: true,
};

const overrides = {
  MuiToolbar: {
    root: {
      borderBottom: `1px solid white`,
    },
  },
  MuiButton: {
    root: {
      borderRadius: 2,
      padding: '9px 10px',
      lineHeight: '16px',
    },
    outlined: {
      padding: '9px 10px',

      '&.danger': {
        borderColor: 'red',
        color: 'red',

        '&:hover': {
          backgroundColor: '#FCE6E6',
        },
      },
      '&.warning': {
        borderColor: 'yellow',
        color: 'yellow',

        '&:hover': {
          backgroundColor: '#FCEFCD',
        },
      },
      '&.neutral': {
        borderColor: 'grey',
        color: 'grey',

        '&:hover': {
          backgroundColor: 'white',
        },
      },
    },
    outlinedPrimary: {
      '&$disabled': {
        backgroundColor: 'grey',
        color: 'grey',
      },
    },
    contained: {
      boxShadow: 'none',
      '&$focusVisible': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
      '&$disabled': {
        backgroundColor: 'grey',
        color: 'grey',
        boxShadow: 'none',
      },
      '&:hover': {
        '&$disabled': {
          backgroundColor: 'grey',
          color: 'grey',
        },
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: '#009068',
      },
      '&$disabled': {
        backgroundColor: 'grey',
        color: 'grey',
      },
    },
  },
  MuiGrid: {
    container: {
      padding: '1.5rem',
      '&.bg-grey': {
        backgroundColor: 'grey',
      },
      '&.padding-0': {
        padding: 0,
      },
      '&.padding-0-Right': {
        padding: '0 !important',
        paddingTop: '10px !important',
        paddingRight: '0 !important',
      },
      '&.padding-0-Left': {
        padding: 0,
        paddingTop: '15px',
        paddingLeft: '0.5rem !important',
      },
      [breakpoints.down('xs')]: {
        padding: '0.975rem',
      },
    },
  },
  MuiTypography: {
    body1: {},
  },
  MuiMobileStepper: {
    root: {
      backgroundColor: 'transparent',
    },
    dot: {
      width: 8,
      height: 8,
      margin: '0 4px',
    },
  },
  MuiCard: {
    root: {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      borderRadius: 2,
    },
  },
  MuiDivider: {
    root: {
      backgroundColor: 'grey',
    },
  },
  MuiTableBody: {
    root: {
      border: `1px solid grey`,
    },
  },
  MuiTableCell: {
    root: {
      borderBottom: `1px solid $grey`,
    },
    head: {
      color: 'black',
      paddingLeft: '0.4rem',
    },
    body: {
      fontSize: 14,
      paddingLeft: '0.5rem',
    },
  },
  MuiTableRow: {
    head: {
      height: 30,
    },
  },
  MuiDialogTitle: {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '2rem',
    },
  },
  MuiDialogActions: {
    root: {
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
  },
  MuiSelect: {
    select: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  MuiInput: {
    root: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid grey`,
      borderRadius: '2px',
      backgroundColor: 'grey',
      position: 'relative' as 'relative',
    },
    formControl: {
      'label + &': {
        marginTop: 0,
      },
    },
    input: {
      padding: '0.5rem 0 0.5rem 0.9375rem',
    },
    underline: {
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
    },
  },
  MuiInputLabel: {
    root: {
      marginBottom: '0.375rem',
    },
    formControl: {
      position: 'initial' as 'initial',
      transform: 'none',
    },
    error: {
      color: 'black',
    },
    shrink: {
      transform: 'none',
      transformOrigin: 'initial',
    },
  },
  MuiFormLabel: {
    root: {
      color: 'grey',
      '&$focused': {
        color: 'grey',
      },
    },
  },
  MuiPickersModal: {
    dialogAction: {
      display: 'none',
    },
  },
};
export const theme = createMuiTheme({ palette, typography, overrides });
