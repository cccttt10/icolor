import chroma from 'chroma-js';
import { StarterPalette } from './starterPalettes';

export class ComplexPalette {
    constructor({
        paletteName,
        id,
        emoji
    }: {
        paletteName: string;
        id: string;
        emoji: string;
    }) {
        this.paletteName = paletteName;
        this.id = id;
        this.emoji = emoji;
        this.colors = new Gradient();
    }
    paletteName: string;
    id: string;
    emoji: string;
    colors: Gradient;
}

export class Gradient {
    constructor() {
        this[50] = [];
        this[100] = [];
        this[200] = [];
        this[300] = [];
        this[400] = [];
        this[500] = [];
        this[600] = [];
        this[700] = [];
        this[800] = [];
        this[900] = [];
    }
    50: ComplexColor[];
    100: ComplexColor[];
    200: ComplexColor[];
    300: ComplexColor[];
    400: ComplexColor[];
    500: ComplexColor[];
    600: ComplexColor[];
    700: ComplexColor[];
    800: ComplexColor[];
    900: ComplexColor[];
}

export class ComplexColor {
    constructor({
        name,
        id,
        hex,
        rgb,
        rgba
    }: {
        name: string;
        id: string;
        hex: string;
        rgb: string;
        rgba: string;
    }) {
        this.name = name;
        this.id = id;
        this.hex = hex;
        this.rgb = rgb;
        this.rgba = rgba;
    }
    name: string;
    id: string;
    hex: string;
    rgb: string;
    rgba: string;
}

export const generatePalette = (
    starterPalette: StarterPalette
): ComplexPalette => {
    let newPalette: ComplexPalette = new ComplexPalette({
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji
    });
    const levels: string[] = Object.keys(new Gradient());
    for (const color of starterPalette.colors) {
        let scale: string[] = generateScale(
            color.color,
            10
        ).reverse();
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

function generateRange(hexColor: string) {
    const end = '#fff';
    return [ chroma(hexColor).darken(1.4).hex(), hexColor, end ];
}
function generateScale(
    hexColor: string,
    numColors: number
): string[] {
    return chroma
        .scale(generateRange(hexColor))
        .mode('lab')
        .colors(numColors);
}
