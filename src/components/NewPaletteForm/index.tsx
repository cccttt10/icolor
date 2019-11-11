import {
    AppBar,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    WithStyles,
    withStyles
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import React, { Component, ComponentType } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

import DraggableColorBox from '../DraggableColorBox/';
import styles from './styles';

type NewPaletteFormState = {
    open: boolean;
    currentColor: string;
    colors: string[];
};

class NewPaletteForm extends Component<
    {} & WithStyles<typeof styles>,
    NewPaletteFormState
> {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentColor: 'teal',
            colors: ['purple', '#915764']
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
    }

    handleDrawerOpen(): void {
        this.setState({ open: true });
    }

    handleDrawerClose(): void {
        this.setState({ open: false });
    }

    updateCurrentColor(newColor: ColorResult): void {
        const currentColor: string = newColor.hex;
        this.setState({ currentColor });
    }

    addNewColor(): void {
        this.setState({ colors: [...this.state.colors, this.state.currentColor] });
    }

    render(): JSX.Element {
        const { classes } = this.props;
        const { open }: { open: boolean } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Persistent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Typography variant="h4">Design Your Palette</Typography>
                    <div>
                        <Button variant="contained" color="secondary">
                            Clear Palette
                        </Button>
                        <Button variant="contained" color="primary">
                            Random Color
                        </Button>
                    </div>
                    <ChromePicker
                        color={this.state.currentColor}
                        onChangeComplete={this.updateCurrentColor}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: this.state.currentColor }}
                        onClick={this.addNewColor}
                    >
                        Add Color
                    </Button>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {this.state.colors.map(color => (
                        <DraggableColorBox color={color} />
                    ))}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(NewPaletteForm) as ComponentType<{}>;
