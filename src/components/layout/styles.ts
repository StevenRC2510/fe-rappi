import { Colors } from '../../assets/styles/colors';

export const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 0,
    marginLeft: '-0.75rem',
  },
  menuIcon: {
    color: Colors.white,
  },

  toolbarFake: theme.mixins.toolbar,
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: Colors.orangeRappi,

    [theme.breakpoints.down('xs')]: {
      paddingLeft: 24,
      boxShadow: theme.shadows[1],
    },
  },
  toolbarFake2: {
    justifyContent: 'space-between',
    paddingLeft: 24,
    backgroundColor: Colors.orangeRappi,

    [theme.breakpoints.down('xs')]: {
      paddingLeft: 24,
      boxShadow: theme.shadows[1],
    },
  },
  logo: {
    height: '4em',
  },
  avatar: {
    width: '2rem',
    height: '2rem',
    color: Colors.white
  },
  content: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: Colors.white3,
    minHeight: '100vh',
  },
  paddingZero: {
    padding: 0,
  },
  cntLoader: {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white3,
  },
});
