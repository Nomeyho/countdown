import { draw } from './draw';
import {createSvg, sleep } from './utils';

export default async (container, {
    width = 500,
    height = 500,
    onDraw,
    onDrawEnd
} = {}) => {
    const svg = createSvg(width, height);
    container.appendChild(svg);

    for (let i = 10; i >= 0; i--) {
        draw(svg, i);
        if (onDraw) onDraw(i);
        await sleep(1000);
    }

    if (onDrawEnd) onDrawEnd(i);
}
