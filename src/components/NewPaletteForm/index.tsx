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
import { RouteComponentProps } from 'react-router-dom';

import { StarterColor, StarterPalette } from '../../types';
import DraggableColorBox from '../DraggableColorBox/';
import styles from './styles';

type NewPaletteFormProps = {
    savePalette: (newPalette: StarterPalette) => void;
} & RouteComponentProps;

type NewPaletteFormState = {
    open: boolean;
    currentColor: string;
    inputColorName: string;
    colors: StarterColor[];
    paletteName: string;
};

class NewPaletteForm extends Component<
    NewPaletteFormProps & WithStyles<typeof styles>,
    NewPaletteFormState
> {
    constructor(props: NewPaletteFormProps & WithStyles<typeof styles>) {
        super(props);
        this.state = {
            open: true,
            currentColor: 'teal',
            inputColorName: '',
            colors: [{ hex: '#0000ff', name: 'blue' }],
            paletteName: ''
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(): void {
        ValidatorForm.addValidationRule(
            'isColorNameUnique',
            (value: string): boolean =>
                this.state.colors.every(
                    (color: StarterColor): boolean =>
                        color.name.toLowerCase() !== value.toLowerCase()
                )
        );
        ValidatorForm.addValidationRule(
            'isColorUnique',
            /* eslint-disable-next-line */
            (value: string): boolean =>
                this.state.colors.every(
                    (color: StarterColor): boolean =>
                        color.hex !== this.state.currentColor
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
        const hex: string = this.state.currentColor;
        const name: string = this.state.inputColorName;
        const newColor: StarterColor = {
            hex,
            name: name ? name : hex
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

    handleSubmit(): void {
        const paletteName = this.state.paletteName;
        const id = paletteName.toLowerCase().replace(/ /g, '-');
        const newPalette: StarterPalette = {
            paletteName,
            id,
            colors: this.state.colors,
            emoji: '🇨🇦'
        };
        this.props.savePalette(newPalette);
        this.props.history.push('/');
    }

    render(): JSX.Element {
        const { classes } = this.props;
        const { open }: { open: boolean } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
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
                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <TextValidator
                                name="text validator for specifying name of new palette"
                                label="Palette Name"
                                value={this.state.paletteName}
                                onChange={(e: FormEvent): void =>
                                    this.setState({
                                        paletteName: (e.target as HTMLInputElement)
                                            .value
                                    })
                                }
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Save Palette
                            </Button>
                        </ValidatorForm>
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
                            hex={color.hex}
                            name={color.name}
                        />
                    ))}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(NewPaletteForm) as ComponentType<
    NewPaletteFormProps
>;
