import { drawCircle, drawLine, drawPath } from './utils';

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
  for (let el of svg.getElementsByClassName('digit')) {
    if (el.classList.contains(exceptClass)) {
      el.classList.remove('disabled-digit');
    } else {
      el.classList.add('disabled-digit');
    }
  }
};

export const draw = (svg, i) => {
  switch (i) {
    case 10:
      drawTen(svg);
      break;
    case 9:
      drawNine(svg);
      break;
    case 8:
      drawHeight(svg);
      break;
    case 7:
      drawSeven(svg);
      break;
    case 6:
      drawSix(svg);
      break;
    case 5:
      drawFive(svg);
      break;
    case 4:
      drawFour(svg);
      break;
    case 3:
      drawThree(svg);
      break;
    case 2:
      drawTwo(svg);
      break;
    case 1:
      drawOne(svg);
      break;
    case 0:
      drawZero(svg);
      break;
    default:
      console.warn(`Unexpected draw: ${i}`);
  }
};
