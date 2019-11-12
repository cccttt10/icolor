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
import React, { Component, ComponentType, FormEvent } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import DraggableColorBox from '../DraggableColorBox/';
import styles from './styles';

type NewPaletteFormState = {
    open: boolean;
    currentColor: string;
    inputColorName: string;
    colors: Color[];
};

type Color = {
    color: string;
    name: string;
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
            inputColorName: '',
            colors: [{ color: 'blue', name: 'blue' }]
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidUpdate(): void {
        ValidatorForm.addValidationRule(
            'isColorNameUnique',
            (value: string): boolean =>
                this.state.colors.every(
                    (color: Color): boolean =>
                        color.name.toLowerCase() !== value.toLowerCase()
                )
        );
        ValidatorForm.addValidationRule(
            'isColorUnique',
            /* eslint-disable-next-line */
            (value: string): boolean =>
                this.state.colors.every(
                    (color: Color): boolean =>
                        color.color !== this.state.currentColor
                )
        );
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
        const color: string = this.state.currentColor;
        const name: string = this.state.inputColorName;
        const newColor: Color = {
            color,
            name: name ? name : color
        };
        this.setState({
            colors: [...this.state.colors, newColor],
            inputColorName: ''
        });
    }

    handleInputChange(e: FormEvent): void {
        const inputColorName: string = (e.target as HTMLInputElement).value;
        this.setState({ inputColorName });
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
                    <ValidatorForm onSubmit={this.addNewColor}>
                        <TextValidator
                            name="TextValidator for adding color"
                            value={this.state.inputColorName}
                            onChange={this.handleInputChange}
                            validators={['isColorNameUnique', 'isColorUnique']}
                            errorMessages={[
                                'Color name must be unique',
                                'Color already used'
                            ]}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: this.state.currentColor }}
                            type="submit"
                        >
                            Add Color
                        </Button>
                    </ValidatorForm>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {this.state.colors.map(color => (
                        <DraggableColorBox
                            key={color.name}
                            color={color.color}
                            name={color.name}
                        />
                    ))}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(NewPaletteForm) as ComponentType<{}>;
