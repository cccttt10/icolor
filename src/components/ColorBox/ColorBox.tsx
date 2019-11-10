import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const styles = createStyles({
    ColorBox: {
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover button': {
            opacity: 1
        }
    },

    seeMore: {
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
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
        textDecoration: 'none',
        cursor: 'pointer',
        opacity: 0
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: 1,
        transform: 'scale(50)',
        zIndex: 10,
        position: 'absolute'
    },
    copyMessage: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: 0,
        // color: 'white',
        '& h1': {
            fontWeight: 400,
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: 0,
            padding: '1rem',
            textTransform: 'uppercase'
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: 100
        }
    },
    showMessage: {
        opacity: 1,
        transform: 'scale(1)',
        zIndex: 25,
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s'
    }
});

interface ColorBoxProps extends WithStyles<typeof styles> {
    name: string;
    background: string;
    moreUrl: string | null;
    textColor: string;
}

interface ColorBoxState {
    copied: boolean;
}

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
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
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

export default withStyles(styles)(ColorBox);
