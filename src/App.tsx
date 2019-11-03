import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import { starterPalettes } from './starterPalettes';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
                <Route exact path="/palette/:id" render={() => <h1>Individual palette</h1>} />
            </Switch>
            // <div>
            //     <Palette palette={generatePalette(starterPalettes[4])} />
            // </div>
        );
    }
}

export default App;
