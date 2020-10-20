# SVG Countdown
> An SVG countdown component (JS, Vue or React).

* [for JavaScript](#JavaScript)
* [for Vue](#Vue)
* [for React](#React)

## Demo
[Live demo](https://nomeyho.github.io/countdown/)

<p align="center">
    <img src="../docs/video.gif" width="300">
</p>

## JavaScript

### Install
```
npm install @nomeyho/countdown
```

### Usage
Import `countdown.js` and call `countdown(...);` with 
a reference to the parent element as first argument.

```html
<body>
    <div id="container"></div>
    <script src="countdown.js"></script>
    <script>
      const container = document.getElementById('container');
      countdown(container);
    </script>
</body>
```

### Options
```javascript
countdown(container, {
    width = 500,
    height = 500,
    color = '#888FF7',
    strokeWidth = '10px',
    onDraw = () => console.log(`Drawing ${i}`),
});
```
| Option | Description | Default |
|---|---|---|
| start | The countdown start value (between 10 and 0) | `10` |
| width | The canvas's width in pixels | `500` |
| height | The canva's height in pixels | `500` | 
| color | The digit's color | `'#888FF7'` |
| strokeWidth | The digit's stroke width | `'10px'` |
| onDraw | A callback function called after each digit draw | `undefined` |

## Vue
TODO

## React
TODO

## TODO
- readme (icons!)
- CI/CD (linter, npm package)
- demo page
- vuejs
- reactjs
