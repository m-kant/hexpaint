
/** stack of currently set foreground color codes */
let fgStack: string[] = [];
/** stack of currently set background color codes */
let bgStack: string[] = [];

/**
 * Set text color, using ANSI escape codes
 * - if called without message, just with color, then starts given text color
 * - if called with no arguments, then resets text color to default
 * - if called with color and message - wraps message with rgb-color ANSI codes
 * @param hex color like `#ffffff` or just `ffffff`
 * @param message any kind of message, will be casted to string
 */
export function hexpaint(hex?: string, message?: any) {
  if (!hex) return resetFg();
  const [r, g, b] = hexToRgb(hex);
  const colorCode = `\x1b[38;2;${r};${g};${b}m`;
  fgStack.push(colorCode);
  if ((arguments.length === 1)) return colorCode;
  return colorCode + String(message) + resetFg();
}
/**
 * Set background color, using ANSI escape codes
 * - if called without message, just with color, then starts given given background color
 * - if called with no arguments, then resets background color to default
 * - if called with color and message - wraps message with rgb-background ANSI codes
 * @param hex color like `#ffffff` or just `ffffff`
 * @param message any kind of message, will be casted to string
 */
export function hexbg(hex?: string, message?: any) {
  if (!hex) return resetBg();
  const [r, g, b] = hexToRgb(hex);
  const colorCode = `\x1b[48;2;${r};${g};${b}m`;
  bgStack.push(colorCode);
  if ((arguments.length === 1)) return colorCode;
  return colorCode + String(message) + resetBg();
}
/** Put ANSI code for reset text formatting to default */
export function hexreset() {
  return '\x1b[0m';
}

/**
 * Converts hex color representation to rgb array:
 * `'#ffffff'` -> `[255,255,255]`
 */
export function hexToRgb(hex: string) {
  var bigint = parseInt(hex.replace(/^#/, ''), 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return [r, g, b];
}
/** Returns ANSI code of previously set foreground color.
 * If no color was set - returns `ResetTextColor` ANSI code */
function resetFg() {
  if (fgStack.length) fgStack.pop();
  if (fgStack.length) return fgStack[fgStack.length - 1];
  return '\x1b[39m';
}
/** Returns ANSI code of previously set background color.
 * If no color was set - returns `ResetBackground` ANSI code */
function resetBg() {
  if (bgStack.length) bgStack.pop();
  if (bgStack.length) return bgStack[bgStack.length - 1];
  return '\x1b[49m';
}

export default hexpaint;
