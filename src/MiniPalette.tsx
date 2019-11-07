import { withStyles } from '@material-ui/styles';
import React from 'react';

import { StarterColor } from './types';

type MiniPalettePaletteProps = {
    classes;
    paletteName: string;
    id: string;
    emoji: string;
    colors: StarterColor[];
};

const MiniPalette = (props: MiniPalettePaletteProps): JSX.Element => {
    const { classes, paletteName, id, emoji, colors } = props;
    return (
        <div className={classes.root}>
            <div className={classes.colors}> </div>
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
        backgroundColor: 'gray'
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
    }
})(MiniPalette);
