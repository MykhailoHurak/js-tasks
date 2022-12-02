// Спочатку розбиваємо рядок на масив по словам

// Base
function toInitialsBase(name) {
    var nameArray = name.split(' '); // розбиваємо на масив слів
    // далі масив імен перетворюємо на масив перших букв у верхньому регістрі
    // та додаємо крапки на кінці
    var firstLetterArray = nameArray.map(function (element) {
        return element.slice(0, 1).toUpperCase() + '.';
    });
    var initials = firstLetterArray.join(''); // перетворюємо масив до рядка
    
    return initials;
}


// Advanced
function toInitialsAdvanced(name) {
    return name
        .split(' ')
        .map(function (element) {
            return element.slice(0, 1).toUpperCase() + '.'
        })
        .join('');
}


// ES6
// використовуємо стрілочну функцію
const toInitialsES6 = name => {
    return name
        .split(' ')
        .map(element => `${element.slice(0, 1).toUpperCase()}.`)
        .join('');
}


console.log(toInitialsBase('Cristisno Ronaldo')); // C.R.
console.log(toInitialsBase('lionel messi')); // L.M.

console.log(toInitialsAdvanced('Cristisno Ronaldo')); // C.R.
console.log(toInitialsAdvanced('lionel messi')); // L.M.

console.log(toInitialsES6('Cristisno Ronaldo')); // C.R.    
console.log(toInitialsES6('lionel messi')); // L.M.