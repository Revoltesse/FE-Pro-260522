//1
//Создай класс, который будет создавать пользователей с именем и фамилией.
//Добавить к классу метод для вывода имени и фамилии 
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    onDisplay() {
        return `User: ${this.name}, ${this.surname}`;
    }
}
document.querySelector('button').addEventListener('click', () => {
    let user = new User(
        document.getElementById('name').value,
        document.getElementById('surname').value
    );
    let output = document.querySelector('.output');
    output.innerText = (user.onDisplay());
})

//2
//Создай список состоящий из 4 листов.
//Используя джс обратись к 2 li и с использованием навигации по DOM дай 1 элементу синий фон, а 3 красный

let liBlue = document.querySelector('.first');
liBlue.style.backgroundColor = 'blue';
let liRed = document.querySelector('.third');
liRed.style.backgroundColor = 'red';

//3
//Создай див высотой 400 пикселей и добавь на него событие наведения мышки.
//При наведении мышки выведите текстом координаты, где находится курсор мышки
let div = document.createElement('div');
let span = document.createElement('span');
document.body.append(span);
document.body.append(div);

div.style.border = '5px dotted red';
div.style.height = '400px';
div.style.width = '600px';

div.addEventListener('mouseover', (event) => {
    span.innerText = `x: ${event.x}, y: ${event.y}`;
    span.style.fontSize = '20px';
});
div.addEventListener('mouseout', () => {
    span.innerText = '';
})

//4
// Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата
let btn1 = document.querySelector('.one'),
    btn2 = document.querySelector('.two'),
    btn3 = document.querySelector('.three'),
    btn4 = document.querySelector('.four');

let spanBtn = document.querySelector('.spanBtn');

btn1.addEventListener('click', () => {
    spanBtn.innerText = 'Button one is clicked';
})

btn2.addEventListener('click', () => {
    spanBtn.innerText = 'Button two is clicked';
})
btn3.addEventListener('click', () => {
    spanBtn.innerText = 'Button three is clicked';
})
btn4.addEventListener('click', () => {
    spanBtn.innerText = 'Button four is clicked';
})

//5
// Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице
let divPosition = document.createElement('div');
document.body.append(divPosition);

divPosition.style.width = '100px';
divPosition.style.height = '100px';
divPosition.style.background = 'black';
divPosition.style.position = 'relative';

divPosition.addEventListener('mouseover', () => {
    divPosition.style.left = `${Math.floor(Math.random() * 200)}px`;
    divPosition.style.top = `${Math.floor(Math.random() * 200)}px`;
});

divPosition.addEventListener('mouseleave', () => {
    divPosition.style.left = '';
    divPosition.style.top = '';
});

//6
// Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body
let inputColor = document.createElement('input');
document.body.append(inputColor);

inputColor.setAttribute('type', 'color');
inputColor.addEventListener('input', (event) => {
    document.style.background = event.target.value;
})

//7
//Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль
let inputLogin = document.createElement("input");
document.body.append(inputLogin);

inputLogin.setAttribute('type', 'text');
inputLogin.addEventListener('input', (event) => {
    console.log(event.target.value);
})

//8
//Создайте поле для ввода данных, выведите текст под полем 
let inputOut = document.createElement("input");
let spanOut = document.createElement("span");
document.body.append(inputOut);
document.body.after(spanOut);

inputOut.setAttribute('type', 'text');
inputOut.addEventListener('input', (event) => {
    spanOut.innerText = event.target.value;
});

