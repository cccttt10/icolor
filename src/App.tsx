import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { starterPalettes } from './starterPalettes';
import { StarterPalette } from './types';

class App extends Component {
    findPalette(id: string): StarterPalette {
        return starterPalettes.find((palette: StarterPalette) => palette.id === id);
    }

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <PaletteList palettes={starterPalettes} />}
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
            </Switch>
            // <div>
            //     <Palette palette={generatePalette(starterPalettes[4])} />
            // </div>
        );
    }
}

export default App;
