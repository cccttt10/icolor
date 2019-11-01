import './NavBar.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { Component } from 'react';

import ColorSlider from './ColorSlider';
import { ColorFormat } from './types';

type NavBarProps = {
    level: number;
    changeLevel: (level: number) => void;
    changeFormat: (format: ColorFormat) => void;
};

type NavBarState = {
    format: ColorFormat;
};

export class NavBar extends Component<NavBarProps, NavBarState> {
    constructor(props) {
        super(props);
        this.state = { format: 'hex' };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
        const format = e.target.value;
        this.setState({ format });
        this.props.changeFormat(format);
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;

        return (
            <header className="NavBar">
                <div className="logo">
                    <a href="#">iColor</a>
                </div>

                <ColorSlider level={level} changeLevel={changeLevel} />
                <div className="select-container">
                    <Select value={format} onChange={this.handleSelectChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - RGB(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - RGBA(255,255,255,1.0)
                        </MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default NavBar;
