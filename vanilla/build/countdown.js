var countdown = (function () {
    'use strict';

    const createSvg = (width, height) => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', `${width}px`);
        svg.setAttribute('height', `${height}px`);
        svg.setAttribute('viewBox', '0 0 500 500');
        return svg;
    };

    const drawPath = (svg, d, classes) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', classes);
        svg.appendChild(path);
    };

    const drawLine = (svg, x1, x2, y1, y2, classes) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('x2', x2);
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        line.setAttribute('class', classes);
        svg.appendChild(line);
    };

    const drawCircle = (svg, cx, cy, r, classes) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', r);
        circle.setAttribute('class', classes);
        svg.appendChild(circle);
    };

    const drawTen = (svg) => {
        drawLine(svg, 150, 150, 175, 250, 'digit ten seven four');
        drawLine(svg, 150, 150, 250, 325, 'digit ten seven five four'); 
        drawCircle(svg, 300, 250, 50, 'digit ten nine eight six');
        disable(svg, 'ten');
    };

    const drawNine = (svg) => {
        drawLine(svg, 350, 350, 250, 400, 'digit nine one');
        disable(svg, 'nine');
    };

    const drawHeight = (svg) => {
        drawCircle(svg, 300, 150, 50, 'digit eight');
        disable(svg, 'eight');
    };

    const drawSeven = (svg) => {
        drawLine(svg, 75, 150, 175, 175, 'digit seven');
        drawLine(svg, 100, 150, 250, 250, 'digit seven four two');
        drawLine(svg, 150, 200, 250, 250, 'digit seven five four two');
        disable(svg, 'seven');
    };

    const drawSix = (svg) => {
        drawPath(svg, 'M250,250 C250,150  300,100  350,100', 'digit six');
        disable(svg, 'six');
    };

    const drawFive = (svg) => {
        drawPath(svg, 'M150,325 A 50 50 0 0 1 150 425', 'digit five three zero');
        disable(svg, 'five');
    };

    const drawFour = (svg) => {
        drawLine(svg, 100, 150, 250, 175, 'digit four two');
        disable(svg, 'four');
    };

    const drawThree = (svg) => {
        drawPath(svg, 'M150,225 A 50 50 0 0 1 150 325', 'digit three');
        disable(svg, 'three');
    };

    const drawTwo = (svg) => {
        drawPath(svg, 'M75,100 a50 50 0 0 1 75 75', 'digit two');
        disable(svg, 'two');
    };

    const drawOne = (svg) => {
        drawLine(svg, 350, 300, 250, 300, 'digit one');
        drawLine(svg, 325, 375, 400, 400, 'digit one');
        disable(svg, 'one');
    };

    const drawZero = (svg) => {
        drawPath(svg, 'M150,325 A 50 50 0 0 0 150 425', 'digit zero');
        disable(svg, 'zero');
    };

    const disable = (svg, exceptClass) => {
        for(let el of svg.getElementsByClassName('digit')) {
            if(el.classList.contains(exceptClass)) {
                el.classList.remove('disabled-digit');
            } else {
                el.classList.add('disabled-digit');
            }
        }
    };

    const draw = (svg, i) => {
        switch(i) {
            case 10: drawTen(svg); break;
            case 9: drawNine(svg); break;
            case 8: drawHeight(svg); break;
            case 7: drawSeven(svg); break;
            case 6: drawSix(svg); break;
            case 5: drawFive(svg); break;
            case 4: drawFour(svg); break;
            case 3: drawThree(svg); break;
            case 2: drawTwo(svg); break;
            case 1: drawOne(svg); break;
            case 0: drawZero(svg); break;
            default: console.warn(`Unexpected draw: ${i}`);
        }
    };

    var countdown = (container, {
        width = 500,
        height = 500,
        onDraw,
        onDrawEnd
    } = {}) => {
        const svg = createSvg(width, height);
        container.appendChild(svg);

        countdownRecursive(svg, 10, onDraw, onDrawEnd);
    };

    const countdownRecursive = (svg, i, onDraw, onDrawEnd) => {
        draw(svg, i);
        if (onDraw) onDraw(i);

        if (i > 0) {
            setTimeout(() => countdownRecursive(svg, i - 1, onDraw, onDrawEnd), 1000);
        } else {
            if(onDrawEnd) onDrawEnd(i);
        }
    };

    return countdown;

}());
