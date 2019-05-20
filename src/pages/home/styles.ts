import { Colors } from '../../assets/styles/colors';

export const styles = (theme: any) => ({
  Title: {
    color: Colors.textTitle,
    marginBottom: '1rem',
  },
  shoppingIcon: {
    color: Colors.textTitle,
    fontSize: '2rem',
  },
  ctnFilter: {
    backgroundColor: Colors.white,
  },
  ctnTextFields: {
    display: 'flex' as 'flex',
    justifyContent: 'space-around',
  },
  ctnTitleProducts:{
      marginTop:'5%'
  }
});
