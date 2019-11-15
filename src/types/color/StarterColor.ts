export default class StarterColor {
    constructor({ name, hex }: { name: string; hex: string }) {
        this.name = name;
        this.hex = hex;
    }
    name: string;
    hex: string;
}
