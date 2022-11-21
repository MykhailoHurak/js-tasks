// Base
function isPalindromeBase(string) {
    var array = string.split('');
    var reversArray = array.reverse();
    var resString = reversArray.join('');
    var res = string === resString;
    return res;
}

console.log('Base abba', isPalindromeBase('abba'));
console.log('Base Abba', isPalindromeBase('Abba'));

// Advanced
function isPalindromeAdvanced(string) {
    return string === string.split('').reverse().join('');
}

console.log('Advanced abba', isPalindromeAdvanced('abba'));
console.log('Advanced Abba', isPalindromeAdvanced('Abba'));

// ES6
const isPalindromeES6 = string =>
    string === string.split('').reverse().join('');

console.log('ES6 abba', isPalindromeES6('abba'));
console.log('ES6 Abba', isPalindromeES6('Abba'));