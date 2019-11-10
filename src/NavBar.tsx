import './NavBar.css';

import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import CSS from 'csstype';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ColorSlider from './ColorSlider';
import { ColorFormat } from './types';

type NavBarProps = {
    level: number | null;
    changeLevel: (level: number) => void | null;
    changeFormat: (format: ColorFormat) => void;
};

type NavBarState = {
    format: ColorFormat;
    isSnackBarOpen: boolean;
};

export class NavBar extends Component<NavBarProps, NavBarState> {
    constructor(props) {
        super(props);
        this.state = { format: 'hex', isSnackBarOpen: false };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }

    handleSelectChange(e) {
        const format = e.target.value;
        this.setState({ format, isSnackBarOpen: true });
        this.props.changeFormat(format);
    }

    closeSnackBar() {
        this.setState({ isSnackBarOpen: false });
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format, isSnackBarOpen } = this.state;
        const selectStyles: CSS.Properties = {
            marginLeft: 'auto',
            marginRight: '1rem'
        };
        return (
            <header className="NavBar">
                <div className="logo">
                    <Link to="/">iColor</Link>
                </div>
                {changeLevel && (
                    <ColorSlider level={level} changeLevel={changeLevel} />
                )}
                <div className="select-container" style={selectStyles}>
                    <Select value={format} onChange={this.handleSelectChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - RGB(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - RGBA(255,255,255,1.0)
                        </MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={isSnackBarOpen}
                    autoHideDuration={3000}
                    message={
                        <span id="message-id">
                            Format Changed To {format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{ 'aria-describedby': 'message-id' }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackBar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default NavBar;
