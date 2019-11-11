import { createStyles } from '@material-ui/styles';

const styles = createStyles({
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: 'white',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0px',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColorBox: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        // marginBottom: '-3.5px',
        marginBottom: '-7.5px'
    }
});

export default styles;
