// Потрібно створити функцію, яка буде приймати декілька масивів чисел,
// і буде повертати масив унікальних значень

// Base
function uniteUniqueBase() {
    const arrayMulti = [...arguments]; // використали rest і отримали масив масивів
    let arraySimple = [];

    // перебираємо елементи масивів та додаємо в новий масив, щоб був однорівневий
    for (var i = 0; i < arrayMulti.length; i += 1) {
        arraySimple.push(...arrayMulti[i]);
    }

    // використовуємо колекцію Set(), яка може вміщати тільки унікальні значення
    arraySimple = new Set(arraySimple);

    // повертаємо результат роботи функції у вигляді масиву унікальних значень у зовнішній код 
    return [...arraySimple]
}

console.log(uniteUniqueBase([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])); // [1,2,3,4,5,6,7,8]
console.log(uniteUniqueBase([1], [2], [3, 2, 2], [4, 1, 1, 2])); // [1,2,3,4]


// Advanced
// не використовуємо стрілочну функцію, тому що вона не містить псевдомасив arguments
function uniteUniqueAdvanced() {
    return [...new Set([...arguments].flat())];
// не використовуємо проміжних змінних
// в фінальний масив розпилюємо колекцію унікальних елементів завдяки Set()
// псевдомасив argements вирівнюємо завдяки flat()
}

console.log(uniteUniqueAdvanced([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])); // [1,2,3,4,5,6,7,8]
console.log(uniteUniqueAdvanced([1], [2], [3, 2, 2], [4, 1, 1, 2])); // [1,2,3,4]