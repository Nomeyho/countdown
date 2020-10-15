(function () {
    'use strict';

    const start = async (i) => {
        const svg = document.getElementById('countdown');
        for (let i = 10; i >= 0; i--) {
            draw(svg, i);
            await sleep(1000);
        }
    };

    start();

}());
