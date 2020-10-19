
export const sleep = async (delay) => new Promise(r => setTimeout(r, delay));

export const createSvg = (width, height) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', `${width}px`);
    svg.setAttribute('height', `${height}px`);
    svg.setAttribute('viewBox', '0 0 500 500');
    return svg;
}

export const createStyleSheet = (color, strokeWidth) => {
    const style = document.createElement('style');
    style.innerHTML = `
    .digit {
        fill: none;
        stroke: ${color};
        stroke-width: ${strokeWidth};
        stroke-linecap: round;
        /* Drawing animation */
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 1s linear forwards;
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }

    .disabled-digit {
        opacity: 0.3;
        transition: opacity ease-out 1s;
    }`;
    return style;
}

export const drawPath = (svg, d, classes) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', classes);
    svg.appendChild(path);
}

export const drawLine = (svg, x1, x2, y1, y2, classes) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('x2', x2);
    line.setAttribute('y1', y1);
    line.setAttribute('y2', y2);
    line.setAttribute('class', classes);
    svg.appendChild(line);
}

export const drawCircle = (svg, cx, cy, r, classes) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('class', classes);
    svg.appendChild(circle);
}
