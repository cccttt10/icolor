import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class SingleColorPalette extends Component<SingleColorPaletteProps, SingleColorPaletteState> {
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
            emoji,
            id: paletteId
        }: { paletteName: string; emoji: string; id: string } = palette;

        const colorBoxes: JSX.Element[] = shades.map((color: ComplexColor) => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                moreUrl={null}
            />
        ));
        return (
            <div className="SingleColorPalette Palette">
                <NavBar changeFormat={this.changeFormat} changeLevel={null} level={null} />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox">
                        <Link to={`/palette/${paletteId}`} className="back-button">
                            GO BACK
                        </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;
