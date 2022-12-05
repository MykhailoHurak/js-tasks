// Потрібно створити функцію, яка буде приймати рядок
// (слово із буквами в різному регістрі),
// а на виході отримуємо масив індексів букв у верхньоу регістрі


// Base
function capitals(word) {
    var LettersBig = word.toUpperCase().split(''); // масив букв у верхньому регістрі
    console.log("LettersBig: ", LettersBig);

    var LettersOriginal = word.split(''); // масив букв в оригінальному регістрі
    console.log("LettersOriginal: ", LettersOriginal);

    var result = [];

    for (var i = 0; i < word.length; i++) {
        if (LettersBig[i] === LettersOriginal[i]) {
            result.push(i);
        };
    };

    return result;
}


// Advanced
function capitalsAdvanced(word) {
    var result = [];

    word.split('').forEach(function (letter, index) {
        if (letter === letter.toUpperCase()) { result.push(index); }
    });
    
return result;
}


// ES6
const capitalsES6 = word => 
    word.split('').reduce((result, letter, index) => {
        if (letter === letter.toUpperCase()) { result.push(index); }
        return result;
    }, []);


    console.log(capitals("CodEWaRs")); // [0, 3, 4, 6]
    console.log(capitals("justForTest")); // [4, 7]
    
    console.log(capitalsAdvanced("CodEWaRs")); // [0, 3, 4, 6]
    console.log(capitalsAdvanced("justForTest")); // [4, 7]
    
    console.log(capitalsES6("CodEWaRs")); // [0, 3, 4, 6]
    console.log(capitalsES6("justForTest")); // [4, 7]