import { ColorIntensity, ComplexColor } from '../color';

export default class Level {
    constructor(intensity: ColorIntensity) {
        this.intensity = intensity;
        this.colors = [];
    }
    public intensity: ColorIntensity;
    public colors: ComplexColor[];
}
