import React, { Component } from 'react';

import ColorBox from './ColorBox';
import { ComplexColor, ComplexPalette } from './types';

type SingleColorPaletteProps = {
    palette: ComplexPalette;
    colorId: string;
    shades: ComplexColor[];
};

class SingleColorPalette extends Component<SingleColorPaletteProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const colorBoxes: JSX.Element[] = this.props.shades.map(
            (color: ComplexColor) => (
                <ColorBox
                    key={color.id}
                    name={color.name}
                    background={color.hex}
                    moreUrl={null}
                />
            )
        );
        return (
            <div className="Palette">
                <h1>Single Color Box </h1>
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        );
    }
}

export default SingleColorPalette;
