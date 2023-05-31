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
console.log(' some text here')
console.log(' on several lines')
console.log(hexpaint('B71C1C', ' with colors'))
console.log(); // add newline
console.log(hexbg()); // reset bg to default
console.log(' no more bg here')
console.log(); // add newline


console.log(
  hexpaint('689F38'), // start text color
  ' some text here \n', // add new line
  ' on several lines \n',
  hexpaint('0097A7'), // start another text color
  'Here starts another color \n',
  ` add some ${hexbg('#E65100', ' bg ')} here\n`,
  hexpaint(), // back to previous text color
  'previous text color\n',
  hexpaint(''), // reset text color to default
  'default text color'
)

console.log();
console.log(hexbg('689F38'), 23, 'some text', true, hexbg());

console.log(
  'default foreground',
  hexpaint('7CB342'), 'one',
  hexpaint('FFA000'), 'two',
  hexpaint('7986CB'), 'tree',
  hexpaint(), 'two again',
  hexpaint(), 'one again',
  hexpaint(), 'default again',
)
console.log(
  'default back',
  // hexpaint('000000'),
  hexbg('33691E'), 'one',
  hexbg('E65100'), 'two',
  hexbg('4527A0'), 'tree',
  hexbg(), 'two again',
  hexbg(), 'one again',
  hexbg(), 'default again',
)


