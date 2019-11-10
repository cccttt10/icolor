import { withStyles } from '@material-ui/styles';
import React from 'react';

import { StarterColor } from './types';

type MiniPalettePaletteProps = {
    classes;
    paletteName: string;
    id: string;
    emoji: string;
    colors: StarterColor[];
    handleClick: () => void;
};

const MiniPalette = (props: MiniPalettePaletteProps): JSX.Element => {
    const {
        classes,
        paletteName,
        emoji,
        colors,
        handleClick
    }: {
        classes;
        paletteName: string;
        emoji: string;
        colors: StarterColor[];
        handleClick: () => void;
    } = props;
    const miniColorBoxes: JSX.Element[] = colors.map((color: StarterColor) => (
        <div
            className={classes.miniColorBox}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ));
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
};

export default withStyles({
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
        marginBottom: '-3.5px'
    }
})(MiniPalette);
