import React, { Component } from 'react';

import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import { starterPalettes } from './starterPalettes';

class App extends Component {
    render() {
        return (
            <div>
                <Palette palette={generatePalette(starterPalettes[4])} />
            </div>
        );
    }
}

export default App;
