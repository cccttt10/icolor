export default class ComplexColor {
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
