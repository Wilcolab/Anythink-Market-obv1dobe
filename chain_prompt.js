function toKebabCase(str) {
    return str
        .trim()
        // Replace spaces, underscores, and transitions from lowercase to uppercase with a dash
        .replace(/[\s_]+|([a-z])([A-Z])/g, (match, p1, p2) => {
            if (p1 && p2) return `${p1}-${p2}`;
            return '-';
        })
        // Remove non-alphanumeric characters except dashes
        .replace(/[^a-zA-Z0-9-]+/g, '')
        // Convert to lowercase
        .toLowerCase();
}

// Example usage:
// console.log(toKebabCase('Convert To Kebab_Case!')); // Output: 'convert-to-kebab-case'