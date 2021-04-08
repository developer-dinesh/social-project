import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  mainContainer: {
    borderRadius: 15,
    margin: '30px 0',
     
    flexDirection: 'row',
     
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
     
    width: '400px',
  },
  profile: {
     
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
     
    alignItems: 'center',
  },
  brandContainer: {
     
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    appBar: {
      padding: '10px 20px',
    },
    heading: {
      display: 'none',
    },
    userName: {
      display: 'none',
    },
    image: {
      marginLeft: '5px',
    },
    toolbar: {
       
       
      width: '160px',
    },
  },

  actionDiv: {
    textAlign: 'center',
  },
}));