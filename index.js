const svg = document.getElementsByTagName('svg')[0];

const drawTen = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '150');
    line.setAttribute('x2', '150');
    line.setAttribute('y1', '175');
    line.setAttribute('y2', '325');
    line.style.stroke = '#000';
    line.style.strokeWidth = '5px';
    svg.appendChild(line);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '250');
    circle.setAttribute('r', '50');
    circle.style.stroke = '#000';
    circle.style.fill = 'none';
    circle.style.strokeWidth = '5px';
    svg.appendChild(circle);
}

const drawNine = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '350');
    line.setAttribute('x2', '350');
    line.setAttribute('y1', '250');
    line.setAttribute('y2', '400');
    line.style.stroke = 'red';
    line.style.strokeWidth = '5px';
    svg.appendChild(line);
}

const drawHeight = () => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '150');
    circle.setAttribute('r', '50');
    circle.style.stroke = 'blue';
    circle.style.fill = 'none';
    circle.style.strokeWidth = '5px';
    svg.appendChild(circle);
}

const drawSeven = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '75');
    upperLine.setAttribute('x2', '150');
    upperLine.setAttribute('y1', '175');
    upperLine.setAttribute('y2', '175');
    upperLine.style.stroke = 'green';
    upperLine.style.strokeWidth = '5px';
    svg.appendChild(upperLine);

    const lowerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLine.setAttribute('x1', '100');
    lowerLine.setAttribute('x2', '200');
    lowerLine.setAttribute('y1', '250');
    lowerLine.setAttribute('y2', '250');
    lowerLine.style.stroke = 'green';
    lowerLine.style.strokeWidth = '5px';
    svg.appendChild(lowerLine);
}

const drawSix = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M250,250 C250,150  300,100  350,100');
    path.style.stroke = 'purple';
    path.style.fill = 'none';
    path.style.strokeWidth = '5px';
    svg.appendChild(path);
}

const drawFive = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,325 A 50 50 0 0 1 150 425');
    path.style.stroke = 'orange';
    path.style.fill = 'none';
    path.style.strokeWidth = '5px';
    svg.appendChild(path);
}

const drawFour = () => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '100');
    line.setAttribute('x2', '150');
    line.setAttribute('y1', '250');
    line.setAttribute('y2', '175');
    line.style.stroke = 'aqua';
    line.style.strokeWidth = '5px';
    svg.appendChild(line);
}

const drawThree = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,225 A 50 50 0 0 1 150 325');
    path.style.stroke = 'brown';
    path.style.fill = 'none';
    path.style.strokeWidth = '5px';
    svg.appendChild(path);
}

const drawTwo = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M75,100 a50 50 0 0 1 75 75');
    path.style.stroke = 'lime';
    path.style.fill = 'none';
    path.style.strokeWidth = '5px';
    svg.appendChild(path);
}

const drawOne = () => {
    const upperLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    upperLine.setAttribute('x1', '350');
    upperLine.setAttribute('x2', '300');
    upperLine.setAttribute('y1', '250');
    upperLine.setAttribute('y2', '300');
    upperLine.style.stroke = 'navy';
    upperLine.style.strokeWidth = '5px';
    svg.appendChild(upperLine);

    const lowerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lowerLine.setAttribute('x1', '325');
    lowerLine.setAttribute('x2', '375');
    lowerLine.setAttribute('y1', '400');
    lowerLine.setAttribute('y2', '400');
    lowerLine.style.stroke = 'navy';
    lowerLine.style.strokeWidth = '5px';
    svg.appendChild(lowerLine);
}

const drawZero = () => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M150,325 A 50 50 0 0 0 150 425');
    path.style.stroke = 'yellow';
    path.style.fill = 'none';
    path.style.strokeWidth = '5px';
    svg.appendChild(path);
}

drawTen();
drawNine();
drawHeight();
drawSeven();
drawSix();
drawFive();
drawFour();
drawThree();
drawTwo();
drawOne();
drawZero();
