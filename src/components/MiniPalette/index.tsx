import { WithStyles, withStyles } from '@material-ui/core';
import React, { ComponentType } from 'react';

import { StarterColor } from '../../types';
import styles from './styles';

type MiniPalettePaletteProps = {
    paletteName: string;
    id: string;
    emoji: string;
    colors: StarterColor[];
    handleClick: () => void;
};

const MiniPalette = (
    props: MiniPalettePaletteProps & WithStyles<typeof styles>
): JSX.Element => {
    const {
        paletteName,
        emoji,
        colors,
        handleClick
    }: {
        paletteName: string;
        emoji: string;
        colors: StarterColor[];
        handleClick: () => void;
    } = props;
    const miniColorBoxes: JSX.Element[] = colors.map((color: StarterColor) => (
        <div
            className={props.classes.miniColorBox}
            style={{ backgroundColor: color.hex }}
            key={color.name}
        />
    ));
    return (
        <div className={props.classes.root} onClick={handleClick}>
            <div className={props.classes.colors}>{miniColorBoxes}</div>
            <h5 className={props.classes.title}>
                {paletteName} <span className={props.classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
};

export default withStyles(styles)(MiniPalette) as ComponentType<
    MiniPalettePaletteProps
>;
