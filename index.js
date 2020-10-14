const svg = document.getElementById('countdown');

// TODO refactor draw primitive


const drawTen = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '150');
    upperLine.setAttribute('x2', '150');
    upperLine.setAttribute('y1', '175');
    upperLine.setAttribute('y2', '250');
    upperLine.setAttribute('class', 'digit ten seven four');
    svg.appendChild(upperLine);

    const lowerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLine.setAttribute('x1', '150');
    lowerLine.setAttribute('x2', '150');
    lowerLine.setAttribute('y1', '250');
    lowerLine.setAttribute('y2', '325');
    lowerLine.setAttribute('class', 'digit ten seven five four');
    svg.appendChild(lowerLine);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '250');
    circle.setAttribute('r', '50');
    circle.setAttribute('class', 'digit ten nine eight six');
    svg.appendChild(circle);

    disable('ten');
}

const drawNine = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '350');
    line.setAttribute('x2', '350');
    line.setAttribute('y1', '250');
    line.setAttribute('y2', '400');
    line.setAttribute('class', 'digit nine one');
    svg.appendChild(line);

    disable('nine');
}

const drawHeight = () => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '150');
    circle.setAttribute('r', '50');
    circle.setAttribute('class', 'digit eight');
    svg.appendChild(circle);

    disable('eight');
}

const drawSeven = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '75');
    upperLine.setAttribute('x2', '150');
    upperLine.setAttribute('y1', '175');
    upperLine.setAttribute('y2', '175');
    upperLine.setAttribute('class', 'digit seven');
    svg.appendChild(upperLine);

    const lowerLineLeft = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLineLeft.setAttribute('x1', '100');
    lowerLineLeft.setAttribute('x2', '150');
    lowerLineLeft.setAttribute('y1', '250');
    lowerLineLeft.setAttribute('y2', '250');
    lowerLineLeft.setAttribute('class', 'digit seven four two');
    svg.appendChild(lowerLineLeft);

    const lowerLineRight = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLineRight.setAttribute('x1', '150');
    lowerLineRight.setAttribute('x2', '200');
    lowerLineRight.setAttribute('y1', '250');
    lowerLineRight.setAttribute('y2', '250');
    lowerLineRight.setAttribute('class', 'digit seven five four two');
    svg.appendChild(lowerLineRight);

    disable('seven');
}

const drawSix = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M250,250 C250,150  300,100  350,100');
    path.setAttribute('class', 'digit six');
    svg.appendChild(path);

    disable('six');
}

const drawFive = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,325 A 50 50 0 0 1 150 425');
    path.setAttribute('class', 'digit five three zero');
    svg.appendChild(path);

    disable('five');
}

const drawFour = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '100');
    line.setAttribute('x2', '150');
    line.setAttribute('y1', '250');
    line.setAttribute('y2', '175');
    line.setAttribute('class', 'digit four two');
    svg.appendChild(line);

    disable('four');
}

const drawThree = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,225 A 50 50 0 0 1 150 325');
    path.setAttribute('class', 'digit three');
    svg.appendChild(path);

    disable('three');
}

const drawTwo = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M75,100 a50 50 0 0 1 75 75');
    path.setAttribute('class', 'digit two');
    svg.appendChild(path);

    disable('two');
}

const drawOne = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '350');
    upperLine.setAttribute('x2', '300');
    upperLine.setAttribute('y1', '250');
    upperLine.setAttribute('y2', '300');
    upperLine.setAttribute('class', 'digit one');
    svg.appendChild(upperLine);

    const lowerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLine.setAttribute('x1', '325');
    lowerLine.setAttribute('x2', '375');
    lowerLine.setAttribute('y1', '400');
    lowerLine.setAttribute('y2', '400');
    lowerLine.setAttribute('class', 'digit one');
    svg.appendChild(lowerLine);

    disable('one');
}

const drawZero = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,325 A 50 50 0 0 0 150 425');
    path.setAttribute('class', 'digit zero');
    svg.appendChild(path);

    disable('zero');
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

const disable = (exceptClass) => {
    for(let el of svg.getElementsByClassName('digit')) {
        if(el.classList.contains(exceptClass)) {
            el.classList.remove('disabled');
        } else {
            el.classList.add('disabled');
        }
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
