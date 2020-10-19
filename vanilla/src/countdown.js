import { draw } from './draw';
import { createSvg, createStyleSheet, sleep } from './utils';

export default async (container, {
    start = 10,
    width = 500,
    height = 500,
    color = '#888FF7',
    strokeWidth = '10px',
    onDraw,
} = {}) => {
    const svg = createSvg(width, height);
    container.appendChild(svg);
    
    const style = createStyleSheet(color, strokeWidth);
    document.body.appendChild(style);

    for (let i = start; i >= 0; i--) {
        draw(svg, i);
        if (onDraw) onDraw(i);
        await sleep(1000);
    }
}
