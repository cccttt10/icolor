import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React from 'react';

const styles = createStyles({
    footer: {
        backgroundColor: 'white',
        height: '5vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    emoji: {
        fontSize: '1.5rem',
        margin: '0 1rem'
    }
});

interface PaletteFooterProps extends WithStyles<typeof styles> {
    paletteName: string;
    emoji: string;
}

const PaletteFooter = (props: PaletteFooterProps) => (
    <footer className={props.classes.footer}>
        {props.paletteName}
        <span className={props.classes.emoji}>{props.emoji}</span>
    </footer>
);

export default withStyles(styles)(PaletteFooter);
