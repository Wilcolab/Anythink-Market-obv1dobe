/**
 * Converts a string to camelCase format.
 *
 * This function takes an input value and converts it to camelCase. It handles empty strings,
 * null, undefined, and non-string inputs gracefully. If the input is null or undefined,
 * it returns an empty string. If the input is not a string, null, or undefined, it throws a TypeError.
 * The conversion removes spaces, underscores, and hyphens, capitalizing the first letter of each word
 * except the first word, which is lowercased.
 *
 * @function toCamelCase
 * @param {any} input - The value to convert to camelCase. Accepts strings, null, or undefined.
 * @returns {string} The camelCase formatted string, or an empty string for null/undefined/empty input.
 * @throws {TypeError} Throws if the input is not a string, null, or undefined.
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('Convert_to_camel_case'); // returns 'convertToCamelCase'
 * toCamelCase(null); // returns ''
 * toCamelCase(123); // throws TypeError
 */

/**
 * Converts a string to dot.case format.
 *
 * This function takes an input value and converts it to dot.case format. It handles empty strings,
 * null, undefined, and non-string inputs gracefully. If the input is null or undefined,
 * it returns an empty string. If the input is not a string, null, or undefined, it throws a TypeError.
 * The conversion replaces spaces, underscores, and hyphens with dots, and inserts dots between
 * lowercase and uppercase letter boundaries. The result is always lowercased.
 *
 * @function toDotCase
 * @param {any} input - The value to convert to dot.case. Accepts strings, null, or undefined.
 * @returns {string} The dot.case formatted string, or an empty string for null/undefined/empty input.
 * @throws {TypeError} Throws if the input is not a string, null, or undefined.
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('Convert_to_dot_case'); // returns 'convert.to.dot.case'
 * toDotCase('dotCaseFormat'); // returns 'dot.case.format'
 * toDotCase(undefined); // returns ''
 * toDotCase({}); // throws TypeError
 */
// Example usage:
// console.log(toDotCase('hello world')); // 'hello.world'
// console.log(toDotCase('Convert_to_dot_case')); // 'convert.to.dot.case'
// console.log(toDotCase('dotCaseFormat')); // 'dot.case.format'





/**
 * Converts a string to kebab-case format.
 *
 * This function trims whitespace, replaces spaces, underscores, and uppercase boundaries with dashes,
 * lowercases the result, and removes non-alphanumeric characters except dashes.
 *
 * @function toKebabCase
 * @param {any} input - The value to convert to kebab-case. Accepts strings, null, or undefined.
 * @returns {string} The kebab-case formatted string, or an empty string for null/undefined/empty input.
 * @throws {TypeError} Throws if the input is not a string, null, or undefined.
 * @example
 * toKebabCase('Convert To Kebab_Case!'); // returns 'convert-to-kebab-case'
 * toKebabCase('kebabCaseFormat'); // returns 'kebab-case-format'
 * toKebabCase(null); // returns ''
 * toKebabCase(123); // throws TypeError
 */
function toKebabCase(input) {
    if (input === null || input === undefined || input === '') return '';
    if (typeof input !== 'string') throw new TypeError('Input must be a string, null, or undefined.');

    // Trim whitespace
    let str = input.trim();

    // Replace underscores and spaces with dash
    str = str.replace(/[_\s]+/g, '-');

    // Insert dash before uppercase letters (except at start)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

    // Convert to lowercase
    str = str.toLowerCase();

    // Remove non-alphanumeric characters except dash
    str = str.replace(/[^a-z0-9-]+/g, '');

    // Replace multiple consecutive dashes with a single dash
    str = str.replace(/-+/g, '-');

    // Remove leading/trailing dashes
    str = str.replace(/^-+|-+$/g, '');

    return str;
}