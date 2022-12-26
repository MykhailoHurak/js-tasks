// Потрібно створити функцію, яка буде приймати рядок зі словами,
// а повертатиме число - кількість голосних букв

// Base
const findVolwesBase = (str) => {
    const volwes = ["a", "e", "i", "o", "u"];

    let count = 0;

    for (let char of str.toLowerCase()) {
        if (volwes.includes(char)) {
            count += 1;
        }
    }

    return count;
}

console.log(findVolwesBase("hello"));
console.log(findVolwesBase("hello world"));


// Advanced
const findVolwesAdvanced = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(findVolwesAdvanced("hello"));
console.log(findVolwesAdvanced("hello world"));