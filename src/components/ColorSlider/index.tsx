import 'rc-slider/assets/index.css';

import CSS from 'csstype';
import Slider from 'rc-slider';
import React, { Component } from 'react';

type ColorSliderProps = {
    level: number;
    changeLevel: (level: number) => void;
};

export class ColorSlider extends Component<ColorSliderProps, {}> {
    render() {
        const { level, changeLevel } = this.props;
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
        const railStyle: CSS.Properties = { height: '8px' };
        const customStyle = { handleStyle, trackStyle, railStyle };
        const divStyle: CSS.Properties = {
            width: '340px',
            margin: '0 10px',
            display: 'inline-block'
        };
        return (
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider" style={divStyle}>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                        {...customStyle}
                    />
                </div>
            </div>
        );
    }
}

export default ColorSlider;
