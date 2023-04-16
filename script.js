//Seleção dos eventos nos botões;

let btn_ac = Number(document.querySelector('.ac').addEventListener('click',eventAc));
let btn_dividir = Number(document.querySelector('.barra').addEventListener('click',eventDividir));
let btn_sete = Number(document.querySelector('.sete').addEventListener('click',eventBtn7));
let btn_oito = Number(document.querySelector('.oito').addEventListener('click',eventBtn8));
let btn_nove = Number(document.querySelector('.nove').addEventListener('click',eventBtn9));
let btn_multiplicar = Number(document.querySelector('.multi').addEventListener('click',eventMulti));
let btn_quatro = Number(document.querySelector('.quatro').addEventListener('click',eventBtn4));
let btn_cinco = Number(document.querySelector('.cinco').addEventListener('click',eventBtn5));
let btn_seis = Number(document.querySelector('.seis').addEventListener('click',eventBtn6));
let btn_subtrair = Number(document.querySelector('.subtracao').addEventListener('click',eventSub));
let btn_um = Number(document.querySelector('.um').addEventListener('click',eventBtn1));
let btn_dois = Number(document.querySelector('.dois').addEventListener('click',eventBtn2));
let btn_tres = Number(document.querySelector('.tres').addEventListener('click',eventBtn3));
let btn_adicao = Number(document.querySelector('.adicao').addEventListener('click',eventSoma));
let btn_zero = Number(document.querySelector('.zero').addEventListener('click',eventBtn0));
let btn_igual = Number(document.querySelector('.igual').addEventListener('click',eventIgual));


function eventAc(){
    let clear = document.querySelector('.zero').innerText
    document.querySelector('.input-value').innerHTML = clear
}
function eventDividir(){
    prompt('/')
}
function eventBtn7(){
    let value = document.querySelector('.sete').innerText
    document.querySelector('.input-value').innerHTML = value
}

function eventBtn8(){
    let value = document.querySelector('.oito').innerText
    document.querySelector('.input-value').innerHTML = value
}

function eventBtn9(){
    let value = document.querySelector('.nove').innerText
    document.querySelector('.input-value').innerHTML = value
}

function eventBtn4(){
    let value = document.querySelector('.quatro').innerText
    document.querySelector('.input-value').innerHTML = value
}
function eventBtn5(){
    let value = document.querySelector('.cinco').innerText
    document.querySelector('.input-value').innerHTML = value
}
function eventBtn6(){
    let value = document.querySelector('.seis').innerText
    document.querySelector('.input-value').innerHTML = value
}

function eventBtn1(){
    let value = document.querySelector('.um').innerText
    document.querySelector('.input-value').innerHTML = value
}
function eventBtn2(){
    let value = document.querySelector('.dois').innerText
    document.querySelector('.input-value').innerHTML = value
}
function eventBtn3(){
    let value = document.querySelector('.tres').innerText
    document.querySelector('.input-value').innerHTML = value
}

function eventBtn0(){
    let value = document.querySelector('.zero').innerText
    document.querySelector('.input-value').innerHTML = value
}





