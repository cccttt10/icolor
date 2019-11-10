import React from 'react';

type PaletteFooterProps = {
    paletteName: string;
    emoji: string;
};

const PaletteFooter = (props: PaletteFooterProps) => (
    <footer className="Palette-footer">
        {props.paletteName}
        <span className="emoji">{props.emoji}</span>
    </footer>
);

export default PaletteFooter;
