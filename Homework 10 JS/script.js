/*
* В папке calculator дана верстка макета калькулятора. Необходимо сделать этот калькулятор рабочим.
* При клике на клавиши с цифрами - набор введенных цифр должен быть показан на табло калькулятора.
* При клике на знаки операторов (`*`, `/`, `+`, `-`) на табло ничего не происходит - программа ждет введения второго числа для выполнения операции.
* Если пользователь ввел одно число, выбрал оператор, и ввел второе число, то при нажатии как кнопки `=`, так и любого из операторов, 
в табло должен появиться результат выполенния предыдущего выражения.
* При нажатии клавиш `M+` или `M-` в левой части табло необходимо показать маленькую букву `m` - это значит, 
что в памяти хранится число. Нажатие на `MRC` покажет число из памяти на экране. Повторное нажатие `MRC` должно очищать память. */

let a = '';
let b = '';
let sign = '';
let memVal = '';
let memSign = document.querySelector('span');
let complete = false;
let check = false;

const digital = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/', '='];
const out = document.querySelector('.display input');

let clear = () => {
    a = '';
    b = '';
    sign = '';
    complete = false;
    out.value = 0;
}

let memorize = () => {
    memVal = out.value;
    memSign.textContent = 'm';
}

let recall = () => {
    if (check) {
        memVal = '';
        memSign.textContent = '';
        check = false;
    } else {
        a = memVal;
        out.value = memVal;
        check = true;
    }
}

document.querySelector('.keys').addEventListener('click', (e) => {
    if (e.target.value === 'C') {
        clear();
        return;
    }
    if (e.target.value === 'm-' || e.target.value === 'm+') {
        memorize();
        return
    }
    if (e.target.value === 'mrc') {
        recall();
        return
    }

    out.value = '';
    let key = e.target.value;

    if (digital.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.value = a;
        }
        else if (a !== '' && b !== '' && complete) {
            b = key;
            complete = false;
            out.value = b;
        }
        else {
            b += key;
            out.value = b;
        }
        return;
    }

    if (action.includes(key)) {
        if (sign !== '' && !complete) {
            switch (sign) {
                case "+":
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "*":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        out.value = 'error';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
            }
            complete = true;
            out.value = a;
        } else {
            sign = key;
            return;
        }
    }
})

