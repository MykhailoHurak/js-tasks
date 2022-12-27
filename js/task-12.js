// Потрібно створити функцію, яка буде приймати рядок зі словами,
// а повертатиме рядок, в якому кожне слово починається з великої літери

// Base
function toCapitalCaselBase(str) {
    const arr = str.split(' ');
    const resArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        resArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }

    return resArr.join(' ');
}

console.log(toCapitalCaselBase("hello world"));

// Advanced
const toCapitalCaselAdvanced = str =>
    str
        .split(' ')
        .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(' ');

console.log(toCapitalCaselAdvanced("hello world"));