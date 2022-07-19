let [...buttons] = document.querySelectorAll('.btn');

document.body.addEventListener("keypress", (event) => {
    buttons.forEach(el => {
        if (event.key.toLowerCase() === el.innerHTML.toLowerCase()) {
            el.style.background = "darkblue";
        }
        if (el.style.background === "darkblue" && event.key.toLowerCase() !== el.innerHTML.toLowerCase()) {
            el.style.background = "#33333a";
        };
    });
});
