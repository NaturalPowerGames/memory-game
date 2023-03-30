// variables//
let cardContainer = document.getElementById('card-container');
let cardAmountSelector = document.getElementById('card-amount-selector');
let mostrarAciertos = document.getElementById("aciertos");
let tiempoTotal = document.getElementById("contador-cronometro");
let comenzarJuego = document.getElementById("comenzar-juego");
let parejasFaltantesDisplay =document.getElementById("contador-parejas-faltantes");
let aciertosConsecutivosDisplay = document.getElementById("aciertos-consecutivos");
let puntosTotales = document.getElementById("puntos-totales");


let cantidadDeParejasIniciales = 4;
let cards;
let lastCard;
let puntos = 0;
let aciertosConsecutivos = 0;
let parejasRestantes = 0;
let aciertos = 0;

function generate() 
{
  //ejemplo     8        /2
  let array = Array(cantidadDeParejasIniciales / 2);    //vacio, pero las posiciones son: 0 1 2 3, si el usuario escogio 8 cartas
  for (let i = 0; i < array.length; i++) {
      array[i] = i;
  } //lleno, posicion 0 = 0, posicion 1 = 1, ... 
  array = array.concat(array);

  //array = array de 8 posiciones con  0 1 2 3 0 1 2 3
  array.sort(() => Math.random() - 0.5);
  //arreglado aleatoriamente

  cardContainer.innerHTML = '';
  for (let i = 0; i < cantidadDeParejasIniciales; i++) {
      let div = document.createElement('div');
      div.innerHTML = array[i];
      div.classList.add('card', 'card-back');

      cardContainer.appendChild(div);
  }
  generateCardListeners();
}
generate();

function generateCardListeners() {
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            cards[i].classList.remove('card-back');
            cards[i].classList.add('card-front');


            if (!lastCard) 
            { //si no existe//
                lastCard = cards[i];
            } 
            else 
            {
            if (lastCard.innerHTML == cards[i].innerHTML)
              {
                 //acierto//
            if(aciertosConsecutivos > 0)
            {
                puntos += 2;
               }
              else 
            {
                puntos++;
                }
                lastCard = null;
                //hacer campo para mostrar puntos
                puntosTotales.innerHTML = `Puntos Totales: ${puntos}`;
                mostrarAciertos.innerHTML = `Aciertos: ${puntos}`;
                //calculo aciertos consecutivos
                aciertosConsecutivos++;
                aciertosConsecutivosDisplay.innerHTML = `Aciertos Consecutivos:${aciertosConsecutivos}`;
                //calculo parejas restantes// 
                if( parejasRestantes == cantidadDeParejasIniciales & aciertos > 0){
                 parejasRestantes--
                }
                else{
                  parejasRestantes = 0;
                }
                parejasFaltantesDisplay.innerHTML = `Parejas Faltantes : ${parejasRestantes}`             
                
                } 
                else 
                {
                  lastCard.classList.remove('card-front');
                  lastCard.classList.add('card-back');
                  lastCard = null;
                  cards[i].classList.remove('card-front');
                  cards[i].classList.add('card-back');
                  //calculo aciertos consecutivos
                  aciertosConsecutivos = 0;
                  aciertosConsecutivosDisplay.innerHTML = `Aciertos Consecutivos:${aciertosConsecutivos}`;
                }
            }
        })
    }
}
cardAmountSelector.addEventListener('change', function () {
    cantidadDeParejasIniciales = this.value;

});
comenzarJuego.addEventListener("click", function time() {
    let time = 30;
    tiempoTotal.classList.add("card");
    let reloj = setInterval(() => {
        time--
        tiempoTotal.innerHTML = time;
        if (time == 0) {
            clearInterval(reloj);
            console.log("se acabo el tiempo");
        }
    }, 1000)
});









/*if(!lastCard){
  lastCard = cards[i].innerHTML;
  console.log(lastCard);
}else{
  console.log(lastCard === cards[i].innerHTML);
}
})
}

}*/





          //si no existe//
/*if(!lastCard){
  lastCard = cards[i].innerHTML;
  console.log(lastCard);
} else {
    if (lastCard == cards[i].innerHTML) {
        //acierto
        aciertos++
     mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`
    } else
    {
        lastCard = "";
        cards[i].classList.add('card-back');
        cards[i].classList.remove('card-front');
    }
  console.log(lastCard === cards[i].innerHTML);
  }*/

     // })//
  //  }//
  //}//











//funcion principal//
// function destapar(id){
//     tarjetasDestapadas++;
//     console.log(tarjetasDestapadas)

//     if(tarjetasDestapadas == 1){
//         //mostrar primer numero//
//         tarjeta1 = document.getElementById(id)
//         primerResultado = numeros[id]
//         tarjeta1.innerHTML = primerResultado

//         //deshabilitar primer boton//
//         tarjeta1.disabled=true
//     }else if(tarjetasDestapadas == 2){
//        //mostrar segundo numero
//        tarjeta2= document.getElementById(id)
//        segundoResultado=numeros[id]
//        tarjeta2.innerHTML = segundoResultado
//        //deshabilitar segundo boton//
//        tarjeta2.disabled=true
//     }
//     if(primerResultado == segundoResultado){
//         //Encerar (volver a cero contador tarjetas destapadas)//
//         tarjetasDestapadas= 0
//         //aumentar aciertos//
//         aciertos++
//         mostrarAciertos.innerHTML= `Aciertos: ${aciertos}`
//         //premios para los aciertos//
//     }
//     }





