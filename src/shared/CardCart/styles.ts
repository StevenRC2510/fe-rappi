import { Colors } from '../../assets/styles/colors';

export const styles = {
  containerList: {
    // cursor: 'pointer',
    width: '100%',
    '&:hover': {
      backgroundColor: Colors.white2,
      borderRadius: '0.3rem',
    },
  },

  textInfo: {
    color: Colors.textBody2,
    fontWeight: 'bold' as 'bold',
  },

  subTextInfo: {
    color: Colors.textBody2,
    fontWeight: 'initial' as 'initial',
  },

  buttonRemove: {
    color: Colors.error,
    cursor: 'pointer',
  },
  buttonAdd: {
    color: Colors.coolGreen,
    cursor: 'pointer',
  },

  buttonDelete: {
    backgroundColor: Colors.error,
  },
  buttonRemoveItem: {
    color: Colors.textBody2,
    '&:hover': {
      backgroundColor: Colors.error,
      color: Colors.lightGrey,
    },
  },
  divider: {
    backgroundColor: Colors.lightGrey,
  },
};
