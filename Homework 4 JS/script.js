//Напишіть функцію map(fn, array), яка приймає на вхід функцію і масив, і обробляє кожен елемент масива, повертаючи новий масив

let arr = [];

function map(array, fn) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }

    return console.log(newArray);
}
//перевірка
function double(x) {
    return x * 2;
}
map([1, 2, 10], double);


/*
Переписати функцію, викорисовуючи оператор ? або ||
function checkAge(age) {
    if (age < 18) {
        return true;
    } else {
        return confirm('Батьки дозволили?');
    }
}*/

function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}
checkAge(22);

function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}

