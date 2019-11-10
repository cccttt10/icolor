import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

import MiniPalette from './MiniPalette';
import { StarterPalette } from './types';
import { RouteComponentProps } from 'react-router-dom';

interface PaletteListProps extends RouteComponentProps {
    classes;
    palettes: StarterPalette[];
}

class PaletteList extends Component<PaletteListProps, {}> {
    goToPalette(id: string) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { classes, palettes }: { classes; palettes: StarterPalette[] } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>iColor</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((palette: StarterPalette) => (
                            <MiniPalette
                                {...palette}
                                key={palette.id}
                                handleClick={() => this.goToPalette(palette.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles({
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
        // flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
})(PaletteList);
