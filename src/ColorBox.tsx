import './ColorBox.css';

import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

type ColorBoxProps = {
    name: string;
    background: string;
    id: string;
    palettedId: string;
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
        const { name, background, id, palettedId } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div
                        style={{ background }}
                        className={`copy-overlay ${copied && 'show'}`}
                    />

                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>

                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <Link
                        to={`/palette/${palettedId}/${id}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="see-more">MORE</span>
                    </Link>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
