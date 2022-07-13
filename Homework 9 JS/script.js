/*Створіть програму секундомір.
 *Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
 *При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий 
 *Виведення лічильників у форматі ЧЧ:ММ:СС
 *Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції*/
let start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    background = document.querySelector(".stopwatch-display");

let hoursElem = document.getElementById("hoursElem"),
    minutesElem = document.getElementById("minutesElem"),
    secondsElem = document.getElementById("secondsElem");

let intervalHandler,
    sec = 0,
    mins = 0,
    hrs = 0;

let counter = () => {
    sec++;
    secondsElem.textContent = sec;
    if (sec === 60) {
        mins++;
        sec = 00;
        minutesElem.textContent = mins;
    } else if (mins === 60) {
        hrs++;
        mins = 00;
        hoursElem.textContent = hrs;
    }
}

start.addEventListener("click", () => {
    intervalHandler = setInterval(counter, 500);
    background.classList.remove("silver", "red");
    background.classList.add("green");
})

stop.addEventListener("click", () => {
    clearInterval(intervalHandler);
    background.classList.remove("green", "silver");
    background.classList.add("red");
})

reset.addEventListener("click", () => {
    clearInterval(intervalHandler);
    sec = 00;
    mins = 00;
    hrs = 00;
    secondsElem.textContent = "00";
    minutesElem.textContent = "00";
    hoursElem.textContent = "00";
    background.classList.remove("green", "red");
    background.classList.add("silver");
})





/*Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер правильний зробіть зелене 
тло і використовуючи document.location переведіть користувача на сторінку
 https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.*/


let input = document.createElement("input");
input.setAttribute('placeholder', 'Введіть телефон 000-000-00-00')
document.body.append(input);

let button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("value", "Зберегти");
document.body.append(button);

let div = document.createElement("div");
input.before(div);

let pattern = /\d{3}-\d{3}-\d{2}-\d{2}/;

let num;

button.onclick = () => {
    num = input.value;
    if (pattern.test(num)) {
        input.style.backgroundColor = "green";
        document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
    } else {
        div.innerHTML = "Введіть номер у правильному форматі: 000-000-00-00";
    }
}


/* Слайдер
Створіть слайдер кожні 3 сек змінюватиме зображення
Зображення для відображення
https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg
https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg
https://naukatv.ru/upload/files/shutterstock_418733752.jpg
https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg
https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg*/


let divSlider = document.createElement("div");
document.body.append(div);

let img = document.createElement("img");
div.append(img);

let imgIndex = 0;
let images = [
    "https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1561629625-edea42c6da34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1639341267320-2d062b250c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80",
    "https://images.unsplash.com/photo-1581545089841-9423c2ec0548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80",
    "https://images.unsplash.com/photo-1595355308161-4ab4c6a2b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
];

let slider = () => {
    img.setAttribute('src', images[imgIndex]);
    imgIndex++;
    if (imgIndex === images.length) imgIndex = 0;
}

let showImages = () => {
    setInterval(slider, 1500);
}

showImages()
