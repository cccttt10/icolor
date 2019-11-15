import { WithStyles, withStyles } from '@material-ui/core';
import React, { Component, ComponentType } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import styles from './styles';

type ColorBoxProps = {
    name: string;
    background: string;
    moreUrl: string | null;
    textColor: string;
};

type ColorBoxState = {
    copied: boolean;
};

class ColorBox extends Component<
    ColorBoxProps & WithStyles<typeof styles>,
    ColorBoxState
> {
    constructor(props: ColorBoxProps & WithStyles<typeof styles>) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(): void {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    render(): JSX.Element {
        const { name, background, moreUrl, textColor } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div
                    style={{ background, height: moreUrl ? '25%' : '50%' }}
                    className={this.props.classes.ColorBox}
                >
                    <div
                        style={{ background }}
                        className={`${this.props.classes.copyOverlay} ${copied &&
                            this.props.classes.showOverlay}`}
                    />

                    <div
                        className={`${this.props.classes.copyMessage} ${copied &&
                            this.props.classes.showMessage}`}
                    >
                        <h1 style={{ color: textColor }}>copied!</h1>
                        <p style={{ color: textColor }}>{background}</p>
                    </div>

                    <div>
                        <div className={this.props.classes.boxContent}>
                            <span style={{ color: textColor }}>{name}</span>
                        </div>
                        <button
                            style={{ color: textColor }}
                            className={this.props.classes.copyButton}
                        >
                            Copy
                        </button>
                    </div>
                    {moreUrl && (
                        <Link
                            to={moreUrl}
                            onClick={(e): void => e.stopPropagation()}
                        >
                            <span
                                style={{ color: textColor }}
                                className={this.props.classes.seeMore}
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

export default withStyles(styles)(ColorBox) as ComponentType<ColorBoxProps>;
