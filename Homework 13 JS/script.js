//отримання даних
let url = "https://swapi.dev/api/people";
localStorage.user = JSON.stringify([]);
let arr = [];

let data = fetch(url, { method: "get" });

//сторення класу
class Person {
    constructor(name, gender, height, skin, birth, planet) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.skin = skin;
        this.birth = birth;
        this.planet = planet;
    }

    show() {
        //картка
        let card = document.createElement("div");
        card.className = "cards";
        document.querySelector(".person_card").append(card);

        //створення блоків під наповнення
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        card.append(p1, p2, p3, p4, p6);

        //Кнопка збереження 
        let btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", "Зберегти");
        btn.setAttribute("id", this.name);

        //наповнення картки
        p1.textContent = `name: ${this.name}`;
        p2.textContent = `gender: ${this.gender}`;
        p3.textContent = `height: ${this.height}`;
        p4.textContent = `skin: ${this.skin}`;
        p5.textContent = `birth: ${this.birth}`;
        p6.textContent = `planet: ${this.planet}`;
        p6.append(btn);
    }
}
let action = data.then((element) => element.json());

//створення нових персонажів
action.then((res) => {
    res.results.forEach(element => {
        let person = new Person(
            element.name,
            element.gender,
            element.height,
            element.skin_color,
            element.birth_year,
            element.homeworld
        );
        person.show();
        arr.push(person);
    });
});

document.querySelector(".person_card").addEventListener("click", (e) => {
    if (e.target.type === 'button') {
        arr.forEach((el) => {
            if (el.name === e.target.id) {
                let a = JSON.parse(localStorage.user);
                a.push(el);
                localStorage.user = JSON.stringify(a);
            }
        })
    }
})
