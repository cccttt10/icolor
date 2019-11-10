import { createStyles } from '@material-ui/styles';

const styles = createStyles({
    NavBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'black'
        }
    },
    select: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
});

export default styles;
