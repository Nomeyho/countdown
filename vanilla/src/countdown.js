import { draw } from './draw';
import { sleep } from './utils';

export default async (svg, options = {

}) => {
    for (let i = 10; i >= 0; i--) {
        draw(svg, i);
        await sleep(1000);
    }
}
