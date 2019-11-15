import { _intensities, ColorIntensity } from '../color';
import Level from './Level';

export default class ComplexPalette {
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
        this.levels = _intensities.map(
            (intensity: ColorIntensity): Level => new Level(intensity)
        );
    }
    paletteName: string;
    id: string;
    emoji: string;
    levels: Level[];
}
