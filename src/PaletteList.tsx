import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MiniPalette from './MiniPalette';
import { StarterPalette } from './types';

const styles = createStyles({
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
});

interface PaletteListProps extends RouteComponentProps, WithStyles<typeof styles> {
    palettes: StarterPalette[];
}

class PaletteList extends Component<PaletteListProps, {}> {
    goToPalette(id: string) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { palettes }: { palettes: StarterPalette[] } = this.props;
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>iColor</h1>
                    </nav>
                    <div className={this.props.classes.palettes}>
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

export default withStyles(styles)(PaletteList);
