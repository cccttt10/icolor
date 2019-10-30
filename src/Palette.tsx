import './Palette.css';

import React, { Component } from 'react';

import ColorBox from './ColorBox';
import { ComplexPalette } from './colorHelpers';

type PaletteProps = { palette: ComplexPalette };
class Palette extends Component<PaletteProps, {}> {
    render() {
        const colorBoxes = this.props.palette.colors[300].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;
