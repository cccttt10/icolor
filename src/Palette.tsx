import './Palette.css';
import 'rc-slider/assets/index.css';

import Slider from 'rc-slider';
import React, { Component } from 'react';

import ColorBox from './ColorBox';
import { ComplexPalette, Gradient } from './colorHelpers';

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
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;
