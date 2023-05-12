import { hexbg, hexpaint } from './hexpaint';

console.log(hexpaint('F44336', 'material red'));
console.log(hexpaint('1A237E', 'material indigo'));
console.log(hexpaint('FDD835', 'material yellow'));
console.log();
console.log(hexbg(
  '5D4037',
  ' Common bg for ' + hexpaint('FDD835', 'material yellow ') + 'and ' + hexpaint('1A237E', 'material indigo ')
));
console.log();

console.log(hexbg('F57F17')); // start bg
console.log('some text here')
console.log('on several lines')
console.log(hexpaint('B71C1C', 'with colorized text'))
console.log(); // additional newline
console.log(hexbg()); // reset bg to default
console.log('no more bg here')
console.log();


console.log(
  hexpaint('689F38'), // start text color
  'some text here \n', // add new line
  'on several lines \n',
  hexpaint('0097A7'), // start another text color
  'Here starts another color \n',
  hexpaint(), // reset text color to default
  'default text color'
)

console.log();
console.log(hexbg('689F38'), 23, 'some text', true, hexbg());


