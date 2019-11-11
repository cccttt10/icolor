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
        return starterPalettes.find((palette: StarterPalette) => palette.id === id);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
                <Route
                    exact
                    path="/"
                    render={routeProps => (
                        <PaletteList palettes={starterPalettes} {...routeProps} />
                    )}
                />
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
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
                    render={routeProps => {
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
        );
    }
}

export default App;
