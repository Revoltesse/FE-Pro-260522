window.onload = () => {
    let buttonCircle = document.querySelector("#circle");

    buttonCircle.onclick = () => {
        let div = document.createElement("div"),
            button = document.createElement("button"),
            input = document.createElement("input");

        button.innerText = 'Print diameter in px and paint';
        button.onclick = drawCircle;

        input.setAttribute("id", "input");

        document.body.append(div, input, button);
    }

    drawCircle = () => {
        let divCircle = document.createElement("div"),
            circleDiam = document.querySelector("#input").value;

        for (let i = 0; i < 100; i++) {
            let newCircle = document.createElement("div");

            newCircle.style.width = circleDiam + "px";
            newCircle.style.height = circleDiam + "px";
            newCircle.style.borderRadius = circleDiam + "px"
            newCircle.style.background = `hsl(${(Math.random() * 360)}, 50%, 50%)`;

            divCircle.append(newCircle);

            newCircle.onclick = () => newCircle.remove();
        }
        document.body.append(divCircle);
    }
}
