/**
 * Wrap string with ANSI escape codes to colorize text color
 * - if called with color and message - wraps message with rgb-color ANSI codes
 * - if called with no arguments, then resets text color to default
 * - if called without message, then starts with given text color
 * @param hex color like `#ffffff` or just `ffffff`
 * @param message any kind of message, will be casted to string
 */
export function hexpaint(hex?: string, message?: any) {
  if (!hex) return '\x1b[39m';
  const [r, g, b] = hexToRgb(hex);
  const colorCode = `\x1b[38;2;${r};${g};${b}m`;
  if ((arguments.length === 1)) return colorCode;
  return colorCode + String(message) + '\x1b[39m';
}
/**
 * Wrap string with ANSI escape codes to colorize background
 * - if called with color and message - wraps message with rgb-background ANSI codes
 * - if called with no arguments, then resets background color to default
 * - if called without message, then starts with given given background color
 * @param hex color like `#ffffff` or just `ffffff`
 * @param message any kind of message, will be casted to string
 */
export function hexbg(hex?: string, message?: any) {
  if (!hex) return '\x1b[49m';
  const [r, g, b] = hexToRgb(hex);
  const colorCode = `\x1b[48;2;${r};${g};${b}m`;
  if ((arguments.length === 1)) return colorCode;
  return colorCode + String(message) + '\x1b[49m';
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

export default hexpaint;
