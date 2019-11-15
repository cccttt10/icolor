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

class App extends Component {
    findPalette(id: string): StarterPalette {
        return starterPalettes.find(
            (palette: StarterPalette) => palette.id === id
        ) as StarterPalette;
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
                        render={(): JSX.Element => <NewPaletteForm />}
                    />
                    <Route
                        exact
                        path="/"
                        render={(routeProps): JSX.Element => (
                            <PaletteList
                                palettes={starterPalettes}
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
