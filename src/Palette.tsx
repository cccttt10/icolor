import './Palette.css';
import 'rc-slider/assets/index.css';

import CSS from 'csstype';
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
        const handleStyle: CSS.Properties = {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px'
        };
        const trackStyle: CSS.Properties = { backgroundColor: 'transparent' };
        const railStyle: CSS.Properties = { height: '8px'}
        const sliderStyle = { handleStyle, trackStyle, railStyle  };
        return (
            <div className="Palette">
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                        {...sliderStyle}
                    />
                </div>
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;
