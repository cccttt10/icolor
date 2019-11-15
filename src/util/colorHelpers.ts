import chroma from 'chroma-js';

import {
    _intensities,
    ComplexColor,
    ComplexPalette,
    Level,
    StarterPalette
} from '../types';

function generateRange(hexColor: string): string[] {
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
    for (const color of starterPalette.colors) {
        const scale: string[] = generateScale(
            color.hex,
            _intensities.length
        ).reverse();
        for (const level of newPalette.levels) {
            const hex: string = scale.shift() as string;
            const complexColor: ComplexColor = new ComplexColor({
                name: `${color.name} ${level.intensity}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex,
                rgb: chroma(hex).css(),
                rgba: chroma(hex)
                    .css()
                    .replace('rgb', 'rgba')
                    .replace(')', ',1.0)')
            });
            level.colors.push(complexColor);
        }
    }
    return newPalette;
};

export const generateShades = (
    palette: ComplexPalette,
    colorId: string
): ComplexColor[] => {
    let shades: ComplexColor[] = [];
    const levels: Level[] = palette.levels;
    for (const level of levels) {
        shades = shades.concat(
            level.colors.filter((color: ComplexColor) => color.id === colorId)
        );
    }
    return shades.slice(1);
};

export const calcTextColor = (background: string): string =>
    chroma(background).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.5)' : 'white';
