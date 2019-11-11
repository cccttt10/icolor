import { WithStyles, withStyles } from '@material-ui/styles';
import React, { Component, ComponentType } from 'react';

import { ColorFormat, ComplexColor, ComplexPalette, Gradient } from '../../types';
import { calcTextColor } from '../../util/colorHelpers';
import ColorBox from '../ColorBox';
import NavBar from '../NavBar';
import PaletteFooter from '../PaletteFooter';
import styles from './styles';

type PaletteProps = {
    palette: ComplexPalette;
};

type PaletteState = {
    level: number;
    format: ColorFormat;
};

class Palette extends Component<
    PaletteProps & WithStyles<typeof styles>,
    PaletteState
> {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level: number): void {
        this.setState({ level });
    }

    changeFormat(format: ColorFormat): void {
        this.setState({ format });
    }

    render(): JSX.Element {
        const {
            colors,
            paletteName,
            emoji,
            id
        }: {
            colors: Gradient;
            paletteName: string;
            emoji: string;
            id: string;
        } = this.props.palette;
        const { level, format }: { level: number; format: ColorFormat } = this.state;
        const colorBoxes: JSX.Element[] = colors[level].map(
            (color: ComplexColor) => (
                <ColorBox
                    textColor={calcTextColor(color[format])}
                    background={color[format]}
                    name={color.name}
                    key={color.id}
                    moreUrl={`/palette/${id}/${color.id}`}
                />
            )
        );
        return (
            <div className={this.props.classes.Palette}>
                <NavBar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                />
                <div className={this.props.classes.colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette) as ComponentType<PaletteProps>;
