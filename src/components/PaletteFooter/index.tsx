import { WithStyles, withStyles } from '@material-ui/core';
import React, { ComponentType } from 'react';

import styles from './styles';

type PaletteFooterProps = {
    paletteName: string;
    emoji: string;
};

const PaletteFooter = (
    props: PaletteFooterProps & WithStyles<typeof styles>
): JSX.Element => (
    <footer className={props.classes.footer}>
        {props.paletteName}
        <span className={props.classes.emoji}>{props.emoji}</span>
    </footer>
);

export default withStyles(styles)(PaletteFooter) as ComponentType<
    PaletteFooterProps
>;
