import { WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { StarterPalette } from '../../types';
import MiniPalette from '../MiniPalette/MiniPalette';
import styles from './styles';

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
