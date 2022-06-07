//Classwork
let mes = prompt("Введіть логін");
let enterPass;
if (mes == 'Адмін') {
    enterPass = prompt('Введіть пароль');

    if (enterPass == 'Повелитель') {
        alert('Вітаємо!');
    } else if (enterPass == null) {
        alert('Вхід скасовано');
    } else {
        alert('Пароль невірний');
    }

} else {
    alert('Вхід скасовано');
}

/*Homework 1
Переписати if з використанням оператора ?
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
*/

let a = 5,
    b = 10,
    result = a + b < 4 ? 'Мало' : 'Багато';
document.write(result + "<br>" +"<hr>");

/* Homework 2
Перепишіть if...else з використанням кількох операторів ?
var message;
if (login == 'Вася'){
message = 'Привіт';
} else if (login == 'Директор') {
message = 'Добрий день';
} else if (login == '') {
message = 'Немає логіну';
} else {
message = '';
}
*/

let message,
    login = prompt("Введіть логін");
message =
    (login == 'Вася') ? 'Привіт' :
        (login == 'Директор') ? 'Добрий день' :
            (login == '') ? 'Немає логіну' :
                '';
alert(message);


// Homework 3
//Дано два числа, А і В, де А < B. 
//Виведіть на екран суму всіх чисел в числовому проміжку між А і В. 
let A = 5,
    B = 15,
    sum = 0;

while (A < B) {
    sum += A;
    A++;
}
document.write(sum + '<br>' +"<hr>");


//Виведіть всі непарні числа в проміжку між А і В

for (A=5; A < B; A++) {
    if (A % 2 !== 0)
        document.write(A + '<br>');
}
document.write("<br>" +"<hr>");


//Homework 4
//прямокутник

for (let c = 0; c < 15; c++) {

    for (let d = 0; d < 20; d++) {
        document.write("$");
    }
    document.write("<br>");
}
document.write("<br>" +"<hr>");

//трикутник прямокутний

for (let e = 0; e < 10; e++) {

    for (let f = 0 - e; f < 1; f++) {
        document.write("$");
    }
    document.write("<br>");
}
document.write("<br>" +"<hr>");

//трикутник рівносторонній

for (let y = 0; y < 8; y++) {
    for (let x = 0 + y; x < 8; x++) {
        document.write('&nbsp; ');
    }
    for (x = 1; x < y * 2; x++) {
        document.write('$')
    }
    document.write("<br>");
};
document.write("<br>" +"<hr>");

//ромб
//перша половина ромбу
for (let y = 0; y < 8; y++) {
    for (let x = 0 + y; x < 8; x++) {
        document.write('&nbsp; ');
    }
    for (x = 1; x < y * 2; x++) {
        document.write('$');
    }
    document.write("<br>");
};

//друга половина ромбу
for (y = 8; y > 0; y--) {
    for (x = 0 + y; x < 8; x++) {
        document.write('&nbsp; ');
    }
    for (x = 1; x < y * 2; x++) {
        document.write('$')
    }
    document.write("<br>");
}








