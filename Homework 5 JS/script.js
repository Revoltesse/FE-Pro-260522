/*Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты, "Заголовок, тело, футер, дата". 
Создать методы для заполнения и отображения документа. */

let docObj = {
    title: "",
    body: "",
    footer: "",
    date: "",

    app: {
        header: "",
        body: "",
        footer: "",
        date: ""
    },

    dataEnter: function () {
        docObj.title = prompt('Введіть заголовок');
        docObj.body = prompt('Введіть свій текст');
        docObj.footer = prompt('Введіть дані футеру');
        docObj.date = prompt('Введіть дату');

        if
            (confirm('Бажаєте внести додаткові дані?')) {
            docObj.app.title = prompt('Введіть заголовок');
            docObj.app.body = prompt('Введіть свій текст');
            docObj.app.footer = prompt('Введіть дані футеру');
            docObj.app.date = prompt('Введіть дату');
        }
    },

    dataShow: function () {
        {
            console.log(this.title);
            console.log(this.body);
            console.log(this.footer);
            console.log(this.date);

            console.log(this.app.title);
            console.log(this.app.body);
            console.log(this.app.footer);
            console.log(this.app.date);
        };
    },
};

docObj.dataEnter();
docObj.dataShow();





