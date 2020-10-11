const svg = document.getElementsByTagName('svg')[0];

const drawTen = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '150');
    line.setAttribute('x2', '150');
    line.setAttribute('y1', '175');
    line.setAttribute('y2', '325');
    svg.appendChild(line);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '250');
    circle.setAttribute('r', '50');
    svg.appendChild(circle);
}

const drawNine = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '350');
    line.setAttribute('x2', '350');
    line.setAttribute('y1', '250');
    line.setAttribute('y2', '400');
    svg.appendChild(line);
}

const drawHeight = () => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '150');
    circle.setAttribute('r', '50');
    svg.appendChild(circle);
}

const drawSeven = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '75');
    upperLine.setAttribute('x2', '150');
    upperLine.setAttribute('y1', '175');
    upperLine.setAttribute('y2', '175');
    svg.appendChild(upperLine);

    const lowerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLine.setAttribute('x1', '100');
    lowerLine.setAttribute('x2', '200');
    lowerLine.setAttribute('y1', '250');
    lowerLine.setAttribute('y2', '250');
    svg.appendChild(lowerLine);
}

const drawSix = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M250,250 C250,150  300,100  350,100');
    svg.appendChild(path);
}

const drawFive = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,325 A 50 50 0 0 1 150 425');
    svg.appendChild(path);
}

const drawFour = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '100');
    line.setAttribute('x2', '150');
    line.setAttribute('y1', '250');
    line.setAttribute('y2', '175');
    svg.appendChild(line);
}

const drawThree = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,225 A 50 50 0 0 1 150 325');
    svg.appendChild(path);
}

const drawTwo = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M75,100 a50 50 0 0 1 75 75');
    svg.appendChild(path);
}

const drawOne = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '350');
    upperLine.setAttribute('x2', '300');
    upperLine.setAttribute('y1', '250');
    upperLine.setAttribute('y2', '300');
    svg.appendChild(upperLine);

    const lowerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLine.setAttribute('x1', '325');
    lowerLine.setAttribute('x2', '375');
    lowerLine.setAttribute('y1', '400');
    lowerLine.setAttribute('y2', '400');
    svg.appendChild(lowerLine);
}

const drawZero = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,325 A 50 50 0 0 0 150 425');
    svg.appendChild(path);
}

const draw = (i) => {
    switch(i) {
        case 10: drawTen(); break;
        case 9: drawNine(); break;
        case 8: drawHeight(); break;
        case 7: drawSeven(); break;
        case 6: drawSix(); break;
        case 5: drawFive(); break;
        case 4: drawFour(); break;
        case 3: drawThree(); break;
        case 2: drawTwo(); break;
        case 1: drawOne(); break;
        case 0: drawZero(); break;
        default: console.warn(`Unexpected draw: ${i}`);
    }
}

const sleep = async (delay) => new Promise(r => setTimeout(r, delay));

const start = async (i) => {
    for (let i = 10; i >= 0; i--) {
        draw(i);
        await sleep(1000);
    }
}

start();
