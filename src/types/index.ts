export type ColorFormat = 'hex' | 'rgb' | 'rgba';

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

export class StarterPalette {
    paletteName: string;
    id: string;
    emoji: string;
    colors: StarterColor[];
}

export class StarterColor {
    name: string;
    color: string;
}
