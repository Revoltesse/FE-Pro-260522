/*Разработайте функцию-конструктор, которая будет создавать объект Human(человек) 
создайте массив объектов и реализуйте функцию, которая будет сортировать элементы массива по значению свойства Age по возрастанию или по убыванию.
 */

function Human(name, age) {
    this.name = name;
    this.age = age;
}
let humanArray = [];
humanArray.push(new Human('Denis', 40));
humanArray.push(new Human('Irene', 25));
humanArray.push(new Human('Julia', 55));
humanArray.push(new Human('Ann', 15));

//зростання
humanArray.sort((a, b) => a.age - b.age);
for (let item of humanArray) {
    console.log(item.age)
}

//зменшення
humanArray.sort((a, b) => b.age - a.age);
for (let item of humanArray) {
    console.log(item.age)
}

