import { makeStyles } from '@material-ui/core/styles';

export const getMainViewStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  export const a11yProps = (index) => {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }

  export const getModalProperties = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: '#3f51b5'
    }
  }));