// Потрібно створити функцію, яка буде приймати 9 цифр без додаткових символів,
// і на виході отримаємо спеціальний формат телефонного номеру

// Base
function createPhoneNumberBase(number) {
    // перетворюємо числов в рядок за допомогою toString()
    // розбиваємо рядок посимвольно за допомогою split('')
    let arrayNumber = number.toString().split('');

    // додаємо необхідні елементи
    arrayNumber.splice(0, 0, '(');
    arrayNumber.splice(4, 0, ')');
    arrayNumber.splice(5, 0, ' ');
    arrayNumber.splice(9, 0, '-');
    
    // з'єднуємо символи в один рядок за допомогою join('') та повертаємо результат у зовнішній код
    return arrayNumber.join('');
}

console.log(createPhoneNumberBase(9997771177)); // "(099) 777-11-77"    
console.log(createPhoneNumberBase(6663334455)); // "(066) 333-44-55"

// Advanced
const createPhoneNumberAdvanced = number => {
    const strNumber = number.toString();
    return `(${strNumber.slice(0, 3)}) ${strNumber.slice(3, 6)}-${strNumber(6, 9)}`;
}

console.log(createPhoneNumberAdvanced(9997771177)); // "(099) 777-11-77"    
console.log(createPhoneNumberAdvanced(6663334455)); // "(066) 333-44-55"

