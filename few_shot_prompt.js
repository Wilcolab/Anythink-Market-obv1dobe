function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]+$/, s => s.toLowerCase())
        .replace(/^[A-Z]/, s => s.toLowerCase());
}

// Examples:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'


function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both inputs must be defined and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both inputs must be valid numbers.');
    }
    return a + b;
}


function toCamelCaseSafe(str) {
    if (str === undefined || str === null) {
        throw new Error('Input must not be null or undefined.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (str.trim() === '') {
        return '';
    }
    return str
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]+$/, s => s.toLowerCase())
        .replace(/^[A-Z]/, s => s.toLowerCase());
}

// Examples:
// toCamelCaseSafe('hello world')            // 'helloWorld'
// toCamelCaseSafe('Convert_to_camel_case')  // 'convertToCamelCase'
// toCamelCaseSafe('')                       // ''
// toCamelCaseSafe(null)                     // throws Error
// toCamelCaseSafe(undefined)                // throws Error
// toCamelCaseSafe(123)                      // throws Error