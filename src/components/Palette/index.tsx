import { WithStyles, withStyles } from '@material-ui/styles';
import React, { Component, ComponentType } from 'react';

import {
    ColorFormat,
    ColorIntensity,
    ComplexColor,
    ComplexPalette,
    Level
} from '../../types';
import { calcTextColor } from '../../util/colorHelpers';
import ColorBox from '../ColorBox';
import NavBar from '../NavBar';
import PaletteFooter from '../PaletteFooter';
import styles from './styles';

type PaletteProps = {
    palette: ComplexPalette;
};

type PaletteState = {
    intensity: ColorIntensity;
    format: ColorFormat;
};

class Palette extends Component<
    PaletteProps & WithStyles<typeof styles>,
    PaletteState
> {
    constructor(props: PaletteProps & WithStyles<typeof styles>) {
        super(props);
        this.state = { intensity: 500, format: ColorFormat.HEX };
        this.changeIntensity = this.changeIntensity.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeIntensity(intensity: ColorIntensity): void {
        this.setState({ intensity });
    }

    changeFormat(format: ColorFormat): void {
        this.setState({ format });
    }

    render(): JSX.Element {
        const { levels, paletteName, emoji, id } = this.props.palette;
        const { intensity, format } = this.state;
        const level: Level = levels.find(
            (l: Level): boolean => l.intensity === intensity
        ) as Level;
        const colorBoxes: JSX.Element[] = level.colors.map((color: ComplexColor) => (
            <ColorBox
                textColor={calcTextColor(color[format])}
                background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
            />
        ));
        return (
            <div className={this.props.classes.Palette}>
                <NavBar
                    intensity={intensity}
                    changeIntensity={this.changeIntensity}
                    changeFormat={this.changeFormat}
                />
                <div className={this.props.classes.colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette) as ComponentType<PaletteProps>;
