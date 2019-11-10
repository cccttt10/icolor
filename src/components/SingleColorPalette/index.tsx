import { WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ColorFormat, ComplexColor, ComplexPalette } from '../../types';
import { calcTextColor } from '../../util/colorHelpers';
import ColorBox from '../ColorBox';
import NavBar from '../NavBar';
import PaletteFooter from '../PaletteFooter';
import styles from './styles';

interface SingleColorPaletteProps extends WithStyles<typeof styles> {
    palette: ComplexPalette;
    colorId: string;
    shades: ComplexColor[];
}

interface SingleColorPaletteState {
    format: ColorFormat;
}

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
            emoji,
            id: paletteId
        }: { paletteName: string; emoji: string; id: string } = palette;

        const colorBoxes: JSX.Element[] = shades.map((color: ComplexColor) => (
            <ColorBox
                textColor={calcTextColor(color[format])}
                key={color.name}
                name={color.name}
                background={color[format]}
                moreUrl={null}
            />
        ));
        return (
            <div className={this.props.classes.Palette}>
                <NavBar
                    changeFormat={this.changeFormat}
                    changeLevel={null}
                    level={null}
                />
                <div className={this.props.classes.colors}>
                    {colorBoxes}
                    <div className={this.props.classes.goBack}>
                        <Link to={`/palette/${paletteId}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);
