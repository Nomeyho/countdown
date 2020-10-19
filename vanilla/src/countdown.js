import { draw } from './draw';
import {createSvg } from './utils';

export default (container, {
    start = 10,
    width = 500,
    height = 500,
    onDraw,
    onDrawEnd
} = {}) => {
    const svg = createSvg(width, height);
    container.appendChild(svg);

    countdownRecursive(svg, start, onDraw, onDrawEnd);
}

const countdownRecursive = (svg, i, onDraw, onDrawEnd) => {
    draw(svg, i);
    if (onDraw) onDraw(i);

    if (i > 0) {
        setTimeout(() => countdownRecursive(svg, i - 1, onDraw, onDrawEnd), 1000);
    } else {
        if(onDrawEnd) onDrawEnd(i);
    }
}
