import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ColorFormat, ComplexColor, ComplexPalette } from '../../types';
import { calcTextColor } from '../../util/colorHelpers';
import ColorBox from '../ColorBox/ColorBox';
import NavBar from '../NavBar/NavBar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

const styles = createStyles({
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    colors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        opacity: 1,
        backgroundColor: 'black',
        '& a': {
            color: 'white',
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none'
        }
    }
});

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
