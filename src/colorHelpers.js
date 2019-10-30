import chroma from 'chroma-js';
const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for (const level of levels) {
        newPalette.colors[level] = [];
    }
    for (const color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse();
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
}

function generateRange(hexColor) {
    const end = '#fff';
    return [ chroma(hexColor).darken(1.4).hex(), hexColor, end ];
}
function generateScale(hexColor, numColors) {
    return chroma
        .scale(generateRange(hexColor))
        .mode('lab')
        .colors(numColors);
}

export { generatePalette };
