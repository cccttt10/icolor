import './ColorBox.css';

import chroma from 'chroma-js';
import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

type ColorBoxProps = {
    name: string;
    background: string;
    moreUrl: string | null;
};

type ColorBoxState = { copied: boolean };

class ColorBox extends Component<ColorBoxProps, ColorBoxState> {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    render() {
        const { name, background, moreUrl } = this.props;
        const { copied } = this.state;
        const luminance: number = chroma(background).luminance();
        const isDarkColor: boolean = luminance <= 0.08;
        const isLightColor: boolean = luminance >= 0.7;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div
                        style={{ background }}
                        className={`copy-overlay ${copied && 'show'}`}
                    />

                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1 className={isLightColor && 'dark-text'}>copied!</h1>
                        <p className={isLightColor && 'dark-text'}>{background}</p>
                    </div>

                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && 'light-text'}>
                                {name}
                            </span>
                        </div>
                        <button
                            className={`copy-button ${isLightColor && 'dark-text'}`}
                        >
                            Copy
                        </button>
                    </div>
                    {moreUrl && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span
                                className={`see-more ${isLightColor && 'dark-text'}`}
                            >
                                MORE
                            </span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
