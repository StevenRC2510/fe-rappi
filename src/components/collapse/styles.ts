import { Colors } from '../../assets/styles/colors';

export const styles = {
  root: {
    flexGrow: 1,
  },

  cntItemOption: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '&:hover': {
      backgroundColor: '#DDDDDD',
    },
  },

  
  menuItemLabel: {
    color: Colors.textTitle,
    fontWeight: 'bold' as 'bold',
    paddingLeft: '0.5rem',
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


}
