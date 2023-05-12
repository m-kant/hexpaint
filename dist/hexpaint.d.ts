/**
 * Wrap string with ANSI escape codes to colorize text color
 * - if called with color and message - wraps message with rgb-color ANSI codes
 * - if called with no arguments, then resets text color to default
 * - if called without message, then starts with given text color
 * @param hex color like `#ffffff` or just `ffffff`
 * @param message any kind of message, will be casted to string
 */
export declare function hexpaint(hex?: string, message?: any): string;
/**
 * Wrap string with ANSI escape codes to colorize background
 * - if called with color and message - wraps message with rgb-background ANSI codes
 * - if called with no arguments, then resets background color to default
 * - if called without message, then starts with given given background color
 * @param hex color like `#ffffff` or just `ffffff`
 * @param message any kind of message, will be casted to string
 */
export declare function hexbg(hex?: string, message?: any): string;
/** Put ANSI code for reset text formatting to default */
export declare function hexreset(): string;
/**
 * Converts hex color representation to rgb array:
 * `'#ffffff'` -> `[255,255,255]`
 */
export declare function hexToRgb(hex: string): number[];
export default hexpaint;
