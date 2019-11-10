import './Palette.css';

import React, { Component } from 'react';

import ColorBox from './ColorBox';
import NavBar from './NavBar';
import { ColorFormat, ComplexColor, ComplexPalette, Gradient } from './types';
type PaletteProps = { palette: ComplexPalette };

type PaletteState = { level: number; format: ColorFormat };

class Palette extends Component<PaletteProps, PaletteState> {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level: number) {
        this.setState({ level });
    }

    changeFormat(format: ColorFormat) {
        this.setState({ format });
    }

    render() {
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
        const colorBoxes = colors[level].map((color: ComplexColor) => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                palettedId={id}
            />
        ));
        return (
            <div className="Palette">
                {/* <ColorSlider level={level} changeLevel={this.changeLevel} /> */}
                <NavBar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                />
                <div className="Palette-colors">{colorBoxes}</div>
                <footer className="Palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;
