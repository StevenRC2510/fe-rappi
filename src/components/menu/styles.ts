import { Colors } from '../../assets/styles/colors';
export const styles = (theme: any) => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  separator: {
    backgroundColor: Colors.lightGrey,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: Colors.white2,
    color: 'grey',
    top: '4.3rem !important',
    [theme.breakpoints.down('sm')]: {
      top: '0 !important',
    },
  },
  // User Info
  containerAvatar: {
    paddingBottom: 0,
  },

  avatar: {
    width: '2.75rem',
    height: '2.75rem',
    color: Colors.textTitle,
  },
  // Menu Items
  menuItem: {
    textDecoration: 'none',
    color: 'white',
  },

  textSubmenuLevels:{
    paddingTop: '0.84375rem',
    paddingBottom: '0.84375rem',
    color: Colors.textBody,
    fontWeight: 'bold' as 'bold',
    '&:hover': {
      backgroundColor: '#DDDDDD',
    },
  },

  activeOption: {
    color: Colors.orangeRappi,
    backgroundColor: Colors.white3,
  },
  cntItemOption: {
    paddingTop: '0.84375rem !important',
    paddingBottom: '0.84375rem !important',
    // backgroundColor: 'inherit !important',
  },
  menuItemLabel: {
    color: Colors.textTitle,
    fontWeight: 'bold' as 'bold',
  },
  menuItemLabelSecondary: {
    color: Colors.textBody2,
  },
  cntMenuIcon: {
    color: Colors.orangeRappiLight,
  },
  cntMenuIconActive: {
    color: Colors.orangeRappiDark,
  },
  menuIcon: {
    color: 'inherit',
  },
  cntItemOptionCategories: {
    paddingTop: '0.84375rem !important',
    paddingBottom: '0.84375rem !important',
    paddingLeft: 16,
    // backgroundColor: 'inherit !important',
  },
  cntItemOptionSub1: {
    paddingTop: '0.84375rem !important',
    paddingBottom: '0.84375rem !important',
    paddingLeft: 0,
    // backgroundColor: 'inherit !important',
  },
});
