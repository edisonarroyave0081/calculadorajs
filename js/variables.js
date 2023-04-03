window.addEventListener('load', ()=>{
    const keypadButtons = document.getElementsByClassName('keys__button');
    const display = document.querySelector('.calculator__display');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button)=>{
        button.addEventListener('click', () =>{
            calculadora(button, display)
        });
    });
});


function calculadora(button, display){
    switch(button.innerHTML){
        //Recuperar el valor que tenemos en el html InnerHTML
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }

}

function calcular(display){
    //eval: Convertir en número, cadena de texto
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

function borrar(display){
    if(display.innerHTML != 0){
        display.innerHTML = 0;
    }
}