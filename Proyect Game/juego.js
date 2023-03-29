// variables//
let cardContainer = document.getElementById('card-container');
let cardAmountSelector = document.getElementById('card-amount-selector');
let mostrarAciertos = document.getElementById("aciertos");
let spanContadorAciertos = document.getElementById("contador-aciertos");
let tiempoTotal = document.getElementById("contador-cronometro");
let comenzarJuego = document.getElementById("comenzar-juego")//para manipular boton comenzar juego//
let cardAmunt = 4;
let cards;
let lastCard;
let aciertos = 0;

function generateCardListeners(){
    let cards = document.getElementsByClassName('card');   

    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener('click', function ()
        {
        cards[i].classList.remove('card-back');
        cards[i].classList.add('card-front');
        
       
        if(!lastCard){ //si no existe//
          lastCard = cards[i];
          
          } else {
            if (lastCard.innerHTML == cards[i].innerHTML) {
                //acierto//
                
               aciertos++
               lastCard = null;
               mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`
               spanContadorAciertos.innerHTML = `ContadorAciertos:${aciertos}`
            } else
            {
                console.log(`Last card:${lastCard.innerHTML}, current card: ${i}`);
                
               lastCard.classList.remove('card-front');
               lastCard.classList.add('card-back');
               lastCard = null;
               cards[i].classList.remove('card-front');
               cards[i].classList.add('card-back');
            }
          }
        })
      }
  }
          cardAmountSelector.addEventListener('change', function(){
            cardAmunt = this.value;      
         
  });
    comenzarJuego.addEventListener("click",function time(){
      let time = 30;
      tiempoTotal.classList.add("card");
      let reloj = setInterval(()=>{
        time--
        tiempoTotal.innerHTML = time;
        if(time == 0){
          clearInterval(reloj);
          console.log("se acabo el tiempo");
        }
      },1000)
    } );
  

  

  
        function generate() {
          //ejemplo     8        /2
         let array = Array(cardAmunt/2);    //vacio, pero las posiciones son: 0 1 2 3, si el usuario escogio 8 cartas
         for (let i = 0; i < array.length; i++) {        
             array[i] = i;
         } //lleno, posicion 0 = 0, posicion 1 = 1, ... 
         array = array.concat(array);
         
         //array = array de 8 posiciones con  0 1 2 3 0 1 2 3
         array.sort(() => Math.random() - 0.5);
         //arreglado aleatoriamente
      
       cardContainer.innerHTML = '';
       for(let i = 0; i < cardAmunt; i++){
         let div = document.createElement('div');
         div.innerHTML = array[i];
         div.classList.add('card', 'card-back');
       
         cardContainer.appendChild(div);
       }
       generateCardListeners();
      }
      generate();

     

      
      
      

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
  

       
        
        
  