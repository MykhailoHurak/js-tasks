// Потрібно створити функцію, яка буде приймати масив чисел,
// а на виході отримаємо масив із двух чисел -
// мінімальне та максимальне значення

// 1. створюємо пустий масив, куди будемо записувати результат
//
//
//
//
//
//

// Base
function numbersMinMaxBase(array) {
    var result = [];
    
    var valueMin = Math.min.apply(null, array);
    // console.log('valueMin:', valueMin);

    var valueMax = Math.max.apply(null, array);
    // console.log('valueMax:', valueMax);

    result.push(valueMin, valueMax);
    // console.log(result);

    return result;
}


// Advanced
function numbersMinMaxAdvanced(array) {
    return [Math.min.apply(null, array), Math.max.apply(null, array)];
}


// ES6
const numbersMinMaxES6 = array => [Math.min(...array), Math.max(...array)];


console.log(numbersMinMaxBase([31, 15, 44, 8, 29, 63])); // [8, 63]
console.log(numbersMinMaxBase([2, 1])); // [1, 2]
console.log(numbersMinMaxBase([1])); // [1, 1]
    
console.log(numbersMinMaxAdvanced([31, 15, 44, 8, 29, 63])); // [8, 63]
console.log(numbersMinMaxAdvanced([2, 1])); // [1, 2]
console.log(numbersMinMaxAdvanced([1])); // [1, 1]
    
console.log(numbersMinMaxES6([31, 15, 44, 8, 29, 63])); // [8, 63]
console.log(numbersMinMaxES6([2, 1])); // [1, 2]
console.log(numbersMinMaxES6([1])); // [1, 1]