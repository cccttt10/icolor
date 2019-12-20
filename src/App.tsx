import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NewPaletteForm from './components/NewPaletteForm';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import { ComplexColor, ComplexPalette, StarterPalette } from './types';
import { generatePalette, generateShades } from './util/colorHelpers';
import { starterPalettes } from './util/starterPalettes';

type AppState = {
    palettes: StarterPalette[];
};

class App extends Component<{}, AppState> {
    constructor(props = {}) {
        super(props);
        this.state = { palettes: starterPalettes };
        this.savePalette = this.savePalette.bind(this);
        this.findPalette = this.findPalette.bind(this);
    }

    findPalette(id: string): StarterPalette {
        return this.state.palettes.find(
            (palette: StarterPalette) => palette.id === id
        ) as StarterPalette;
    }

    savePalette(newPalette: StarterPalette): void {
        console.log(newPalette);
        this.setState({ palettes: [...this.state.palettes, newPalette] });
    }

    render(): JSX.Element {
        const theme = createMuiTheme({
            typography: {
                fontFamily: ['"Poppins"', '"Helvetica Neue"', 'sans-serif'].join(',')
            }
        });
        return (
            <MuiThemeProvider theme={theme}>
                <Switch>
                    <Route
                        exact
                        path="/palette/new"
                        render={(routeProps): JSX.Element => (
                            <NewPaletteForm
                                savePalette={this.savePalette}
                                existingPaletteNames={this.state.palettes.map(
                                    (palette: StarterPalette): string =>
                                        palette.paletteName
                                )}
                                {...routeProps}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={(routeProps): JSX.Element => (
                            <PaletteList
                                palettes={this.state.palettes}
                                {...routeProps}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/palette/:id"
                        render={(routeProps): JSX.Element => (
                            <Palette
                                palette={generatePalette(
                                    this.findPalette(routeProps.match.params.id)
                                )}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/palette/:paletteId/:colorId"
                        render={(routeProps): JSX.Element => {
                            const palette: ComplexPalette = generatePalette(
                                this.findPalette(routeProps.match.params.paletteId)
                            );
                            const colorId: string = routeProps.match.params.colorId;
                            const shades: ComplexColor[] = generateShades(
                                palette,
                                colorId
                            );
                            return (
                                <SingleColorPalette
                                    colorId={colorId}
                                    palette={palette}
                                    shades={shades}
                                />
                            );
                        }}
                    />
                </Switch>
            </MuiThemeProvider>
        );
    }
}

export default App;
