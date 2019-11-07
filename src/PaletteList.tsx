import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniPalette from './MiniPalette';
import { StarterPalette } from './types';

type PaletteListProps = {
    palettes: StarterPalette[];
};

class PaletteList extends Component<PaletteListProps, {}> {
    render() {
        const { palettes }: { palettes: StarterPalette[] } = this.props;
        return (
            <div>
                {/* <MiniPalette /> */}
                <h1>iColor</h1>
                {palettes.map((palette: StarterPalette) => (
                    <MiniPalette {...palette} />
                    // <p>
                    //     <Link
                    //         to={`/palette/${palette.id}`}
                    //         key={`/palette/${palette.id}`}
                    //     >
                    //         {palette.paletteName}
                    //     </Link>
                    // </p>
                ))}
            </div>
        );
    }
}

export default PaletteList;
