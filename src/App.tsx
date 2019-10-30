import React, { Component } from 'react';
import Palette from './Palette';
import { starterPalettes } from './starterPalettes';
import { generatePalette } from './colorHelpers';

class App extends Component {
    render() {
        return (
            <div>
                <Palette
                    palette={generatePalette(starterPalettes[4])}
                />
            </div>
        );
    }
}

export default App;
