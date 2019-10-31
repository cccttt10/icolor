import './Palette.css';

import React, { Component } from 'react';

import ColorBox from './ColorBox';
import { ComplexPalette, Gradient } from './colorHelpers';
import NavBar from './NavBar';

type PaletteProps = { palette: ComplexPalette };
type PaletteState = { level: number };
class Palette extends Component<PaletteProps, PaletteState> {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level: number) {
        this.setState({ level });
    }

    render() {
        const { colors }: { colors: Gradient } = this.props.palette;
        const { level }: { level: number } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                {/* <ColorSlider level={level} changeLevel={this.changeLevel} /> */}
                <NavBar level={level} changeLevel={this.changeLevel} />
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;
