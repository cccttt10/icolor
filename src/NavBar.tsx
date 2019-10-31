import './NavBar.css';

import React, { Component } from 'react';

import ColorSlider from './ColorSlider';

type ColorSliderProps = {
    level: number;
    changeLevel: (level: number) => void;
};

export class NavBar extends Component<ColorSliderProps, {}> {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <header className="NavBar">
                <div className="logo">
                    <a href="#">iColor</a>
                </div>

                <ColorSlider level={level} changeLevel={changeLevel} />
            </header>
        );
    }
}

export default NavBar;
