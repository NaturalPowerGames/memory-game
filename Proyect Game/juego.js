//generacion de variables//
let tarjetasDestapadas = 0
let tarjeta1=null
let tarjeta2=null
let primerResultado= null
let segundoResultado=null
let aciertos=0
// apuntando a documento HTML//
let mostrarAciertos=document.getElementById("aciertos")
//generacion de numeros aleatorios//
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
numeros=numeros.sort(()=>{return Math.random()-onabort-0.5})
console.log(numeros)
//funcion principal//
function destapar(id){
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas == 1){
        //mostrar primer numero//
        tarjeta1 = document.getElementById(id)
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado

        //deshabilitar primer boton//
        tarjeta1.disabled=true
    }else if(tarjetasDestapadas == 2){
       //mostrar segundo numero
       tarjeta2= document.getElementById(id)
       segundoResultado=numeros[id]
       tarjeta2.innerHTML = segundoResultado
       //deshabilitar segundo boton//
       tarjeta2.disabled=true
    }
    if(primerResultado == segundoResultado){
        //Encerar (volver a cero contador tarjetas destapadas)//
        tarjetasDestapadas= 0
        //aumentar aciertos//
        aciertos++
        mostrarAciertos.innerHTML= `Aciertos: ${aciertos}`
        //premios para los aciertos//
    }else{
      setTimeout(()=>{
        tarjeta1.innerHTML=" "
        tarjeta2.innerHTML=" "
        tarjeta1.disabled= false
        tarjeta2.disabled= false
        tarjetasDestapadas=0
      },2000)  
    }
    }
  

       
        
        
   