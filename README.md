# SVG Countdown
> An SVG countdown component (JS, VueJS or React).

## Demo
TODO - Live demo link

## JavaScript

### Install

### Usage
Import `countdown.js` and call `countdown(...);` with 
a reference to the parent element as first argument.

```
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
```
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

TODO:
- readme (icons!)
- CI/CD (linter, npm package)
- demo page
- vuejs
- reactjs
