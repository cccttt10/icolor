import { StarterColor } from '../color';

export default class StarterPalette {
    constructor({
        paletteName,
        id,
        emoji,
        colors
    }: {
        paletteName: string;
        id: string;
        emoji: string;
        colors: StarterColor[];
    }) {
        this.paletteName = paletteName;
        this.id = id;
        this.emoji = emoji;
        this.colors = colors;
    }
    paletteName: string;
    id: string;
    emoji: string;
    colors: StarterColor[];
}
