import { WithStyles, withStyles } from '@material-ui/core';
import React, { Component, ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import { StarterPalette } from '../../types';
import MiniPalette from '../MiniPalette';
import styles from './styles';

type PaletteListProps = {
    palettes: StarterPalette[];
} & RouteComponentProps;

class PaletteList extends Component<
    PaletteListProps & WithStyles<typeof styles>,
    {}
> {
    goToPalette(id: string): void {
        this.props.history.push(`/palette/${id}`);
    }

    render(): JSX.Element {
        const { palettes }: { palettes: StarterPalette[] } = this.props;
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>iColor</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={this.props.classes.palettes}>
                        {palettes.map(
                            (palette: StarterPalette): JSX.Element => (
                                <MiniPalette
                                    {...palette}
                                    key={palette.id}
                                    handleClick={(): void =>
                                        this.goToPalette(palette.id)
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList) as ComponentType<PaletteListProps>;
