// Задача
// Потрібно створити функцію, яка буде приймати число,
// а на виході отримаємо суму всіх ціфр цього числа

// 1. приведемо число до модуля, щоб точно було без мінуса
// 2. перетворимо число на рядок
// 3. розбиваємо рядок посимвольно в масив
// 4. пертворюємо кожний елемент масиву до типу данних Number та додаємо один до одного

// Base
function sumDigitsBase(number) {
    var moduleNumber = Math.abs(number);
    var moduleNumberToString = moduleNumber.toString();
    var moduleNumberToStringArray = moduleNumberToString.split('');
    var result = moduleNumberToStringArray.reduce(function (sum, cur) {
        return Number(sum) + Number(cur);
    }, 0);
    return result;
}



// Advanced
function sumDigitsAdvanced(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce(function (sum, cur) {
            return +sum + +cur;
        }, 0);
}


// ES6
const sumDigitsES6 = number => {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, cur) => +sum + +cur)
}



console.log(sumDigitsBase(123)); // 6
console.log(sumDigitsBase(-456)); // 15

console.log(sumDigitsAdvanced(123)); // 6
console.log(sumDigitsAdvanced(-456)); // 15

console.log(sumDigitsES6(123)); // 6
console.log(sumDigitsES6(-456)); // 15