# hexpaint

Colorize terminal output with ANSI escape codes, using HEX colors. Minimalistic chunk of 'chalk' or 'ansi-colors'. It only colorize text or background with HEX color notation, nothing more! Minified JS takes only 0.6K.

![hexpaint-wrap-bg    ](https://github.com/m-kant/hexpaint/raw/main/docs/hexpaint-wrap-bg.png)
![hexpaint-open-codes ](https://github.com/m-kant/hexpaint/raw/main/docs/hexpaint-open-codes.png)
![hexpaint-open-tcolor](https://github.com/m-kant/hexpaint/raw/main/docs/hexpaint-open-tcolor.png)
![hexpaint-text       ](https://github.com/m-kant/hexpaint/raw/main/docs/hexpaint-text.png)

## Usage

```javascript
import { hexbg, hexpaint } from 'hexpaint';

console.log(hexpaint('F44336', 'material red'));

console.log(hexbg('689F38'), 23, 'some text', true, hexbg());

console.log(hexbg('F57F17')); // start background
console.log('some text here')
console.log('on several lines')
console.log(hexpaint('B71C1C', 'with colorized text'))
console.log(); // additional newline
console.log(hexbg()); // reset background to default
console.log('no more bg here')
```
