let background = () => {

    let body = document.querySelector('body');
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }

    let titulo = document.querySelector('p');

    let texto = document.querySelector('h1');

    if (titulo.style.color === "white" && texto.style.color === "white") {
        titulo.style.color = "black";
        texto.style.color = "black";
    } else {
        titulo.style.color = "white";
        texto.style.color = "white";
    }
}

let colorTexto = () => {

    let titulo = document.querySelector('p');

    let texto = document.querySelector('h1');

    if (titulo.style.color === "blue" && texto.style.color === "blue") {
        titulo.style.color = "black";
        texto.style.color = "black";
    } else {
        titulo.style.color = "blue";
        texto.style.color = "blue";
    }
}

