import { Colors } from '../../assets/styles/colors';

export const styles = {
  card: {
    display: 'flex' as 'flex',
    width: '28rem',
    borderRadius: '0.2rem',
  },
  content: {
    padding: 0,
  },
  titleCard:{
    color: Colors.textTitle,
    fontWeight: 500,
  },
  textCard:{
    color: Colors.textBody,
    fontSize: '0.8rem',
  },
  availableText: {
    color: Colors.coolGreen,
    fontSize: '1rem',
    fontWeight: 400,
  },
  notAvailableText: {
    color: Colors.error,
    fontSize: '1rem',
    fontWeight: 400,
  },
  ctnButtons:{
    marginTop: '1rem'
  },

  buttonRemove:{
    color: Colors.error,
    cursor: 'pointer'
  },
  buttonAdd:{
    color: Colors.coolGreen,
    cursor: 'pointer'
  },

  imageBanner: {
    width: '100%',
    objectFit: 'cover' as 'cover',
  },
};
