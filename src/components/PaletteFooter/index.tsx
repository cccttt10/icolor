import { WithStyles, withStyles } from '@material-ui/styles';
import React from 'react';

import styles from './styles';

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
