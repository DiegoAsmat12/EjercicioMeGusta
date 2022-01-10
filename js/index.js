let likeButtons = document.querySelectorAll('button.like-button');

for(let i=0;i<likeButtons.length;i++){
    likeButtons[i].addEventListener("click",incrementaCount)
}

function incrementaCount(event){
    let id = event.target.id;
    let identificador=id.split('-')[1];
    let contador = document.querySelector('#like-counter-'+identificador)
    let contadorValue=parseFloat(contador.innerText);
    contador.innerText=++contadorValue;
}