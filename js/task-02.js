// Якщо працюємо з рядками, то скоріш за все потрібно перетворити рядок у масив


// Base
function findShortWordBase (string) {
    var wordsArray = string.split(' '); // розбиваємо речення по словами, використовуючи пробіл
    var sortedWordsArray = wordsArray.sort(function (a, b) {
        return a.length - b.length; // сортуємослова за їх доржиною від коротшого до довшого
    });
    return sortedWordsArray[0]; // повертаємо елемент з індексом 0, який і буде першим найкоротшим слово
}

// Advanced
// використовуємо цепочку методів без присвоєння проміжних результатів окремим змінним
function findShortWordAdvanced(string) {
    return string
        .split(' ')
        .sort(function (a, b) { return a.length - b.length; })[0];
}


// ES6
// використовуємо стрілочну функцію
const findShortWordES6 = string => {
    return string
        .split(' ')
        .sort(function (a, b) { return a.length - b.length; })[0];
}


// Перевірка
console.log('The smaller word in sentence --->', findShortWordBase('The smaller word in sentence'));
console.log('Whatever you are be a good one --->', findShortWordAdvanced('Whatever you are be a good one'));
console.log('I am proud of myself ---> ', findShortWordES6('I am proud of myself'));