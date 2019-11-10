import chroma from 'chroma-js';

import { ComplexColor, ComplexPalette, Gradient, StarterPalette } from './types';

function generateRange(hexColor: string) {
    const end = '#fff';
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ];
}
function generateScale(hexColor: string, numColors: number): string[] {
    return chroma
        .scale(generateRange(hexColor))
        .mode('lab')
        .colors(numColors);
}

export const generatePalette = (starterPalette: StarterPalette): ComplexPalette => {
    const newPalette: ComplexPalette = new ComplexPalette({
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji
    });
    const levels: string[] = Object.keys(new Gradient());
    for (const color of starterPalette.colors) {
        const scale: string[] = generateScale(color.color, 10).reverse();
        for (let i = 0; i < scale.length; i++) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                    .css()
                    .replace('rgb', 'rgba')
                    .replace(')', ',1.0)')
            });
        }
    }
    return newPalette;
};

export const generateShades = (
    palette: ComplexPalette,
    colorId: string
): ComplexColor[] => {
    let shades: ComplexColor[] = [];
    const allColors: Gradient = palette.colors;
    for (const level in allColors) {
        shades = shades.concat(
            allColors[level].filter((color: ComplexColor) => color.id === colorId)
        );
    }
    return shades.slice(1);
};
