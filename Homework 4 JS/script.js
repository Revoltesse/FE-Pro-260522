//Напишіть функцію map(fn, array), яка приймає на вхід функцію і масив, і обробляє кожен елемент масива, повертаючи новий масив

let arr = [5, 3, 5, 10];

function map(fn, array) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i]);
    }
    return newArray;
}
//перевірка
function double(x) { return x * 2; }
console.log(map(double, arr));


/*
Переписати функцію, викорисовуючи оператор ? або ||
function checkAge(age) {
    if (age < 18) {
        return true;
    } else {
        return confirm('Батьки дозволили?');
    }
}
 */
function checkAge(age) {
    return (age < 18) ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
    return (age < 18) || confirm('Батьки дозволили?');
}
