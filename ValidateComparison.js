/**
 * Test Plan - input two numbers, compare them and display the larger of the two
 */

function validateNumber(value, label) {
    // Empty check
    if (value === "" || value === null || value === undefined) {
        return `Please enter a number in ${label}`;
    }

    // Must be a valid integer or decimal
    // Allowed examples: 5, -1, +34, 2.5, -3.14
    // NOT allowed: 3/4, 5b, abc
    const numericRegex = /^[+-]?\d+(\.\d+)?$/;

    if (!numericRegex.test(value)) {
        return `Please enter a number in ${label}`;
    }

    return null; // No error
}

function validateComparison(value1, value2) {
    const check1 = validateNumber(value1, "Value 1");
    if (check1) return check1;

    const check2 = validateNumber(value2, "Value 2");
    if (check2) return check2;

    // Convert to actual numbers
    const num1 = Number(value1);
    const num2 = Number(value2);

    if (num1 === num2) {
        return "The amounts are equal";
    }

    return num1 > num2 ? num1 : num2;
}

module.exports = validateComparison;
