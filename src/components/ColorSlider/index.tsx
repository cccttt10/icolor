import 'rc-slider/assets/index.css';

import CSS from 'csstype';
import Slider from 'rc-slider';
import React from 'react';

import { ColorIntensity } from '../../types';

type ColorSliderProps = {
    intensity: ColorIntensity;
    changeIntensity: (intensity: ColorIntensity) => void;
};

const ColorSlider = (props: ColorSliderProps): JSX.Element => {
    const { intensity, changeIntensity } = props;
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
            <span>Level: {intensity}</span>
            <div className="slider" style={divStyle}>
                <Slider
                    defaultValue={intensity}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={changeIntensity}
                    {...customStyle}
                />
            </div>
        </div>
    );
};

export default ColorSlider;
