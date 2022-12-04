// Потрібно створити функцію, яка буде приймати рядок,
// а на виході отримаємо набір дублікатів символів рядка,
// кожни з яких починається з великої літери

// 1. переводимо рядок у верхній регістр
// 2. розділяємо рядок поимвольно у масив
// 3. створюємо правило для дублюваня символів в залежності від індексу
// 4. склеюємо в рядок через имвол "-"


// Base
function accum(string) {
    var stringUpper = string.toUpperCase();
    console.log("stringUpper.toUpperCase(): ", stringUpper);

    var arrayUpper = stringUpper.split('');
    console.log("arrayUpper: ", arrayUpper);

    var arrayRepeat = arrayUpper.map(function (element, index) {
        return element += element.repeat(index).toLowerCase();
    });
    console.log("arrayRepeat: ", arrayRepeat);

    var stringResult = arrayRepeat.join("-");
    console.log("stringResult: ", stringResult);

    return stringResult;
}


// Advanced
function accumAdvanced(string) {
    return string.toUpperCase().split('').map(function (element, index) {
        return element += element.repeat(index).toLowerCase();
    }).join('-');
}


// ES6
const accumES6 = string => {
    return string
        .toUpperCase()
        .split('')
        .map((element, index) => (`${element}${element.repeat(index).toLowerCase()}`))
        .join('-');
}


console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("eFgH")); // "E-Ff-Ggg-Hhhh"

console.log(accumAdvanced("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accumAdvanced("eFgH")); // "E-Ff-Ggg-Hhhh"

console.log(accumES6("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accumES6("eFgH")); // "E-Ff-Ggg-Hhhh"