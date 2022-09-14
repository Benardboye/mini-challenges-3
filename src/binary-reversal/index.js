/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    let intToBinary = parseInt(value).toString(2);
    let padStr = intToBinary.padStart(8,0);
    let reverseStr = padStr.split('').reverse().join('')
    let result = parseInt(reverseStr, 2);

    return `${result}`
}

module.exports = binaryReversal;

