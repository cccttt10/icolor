import React, { Component } from 'react';

import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { ColorFormat, ComplexColor, ComplexPalette } from './types';

type SingleColorPaletteProps = {
    palette: ComplexPalette;
    colorId: string;
    shades: ComplexColor[];
};

type SingleColorPaletteState = {
    format: ColorFormat;
};

class SingleColorPalette extends Component<
    SingleColorPaletteProps,
    SingleColorPaletteState
> {
    constructor(props) {
        super(props);
        this.state = { format: 'hex' };
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(format: ColorFormat) {
        this.setState({ format });
    }

    render() {
        const {
            palette,
            shades
        }: { palette: ComplexPalette; shades: ComplexColor[] } = this.props;
        const { format }: { format: ColorFormat } = this.state;
        const {
            paletteName,
            emoji
        }: { paletteName: string; emoji: string } = palette;

        const colorBoxes: JSX.Element[] = shades.map((color: ComplexColor) => (
            <ColorBox
                key={color.id}
                name={color.name}
                background={color[format]}
                moreUrl={null}
            />
        ));
        return (
            <div className="Palette">
                <NavBar
                    changeFormat={this.changeFormat}
                    changeLevel={null}
                    level={null}
                />
                <div className="Palette-colors">{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;
