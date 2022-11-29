//Se crea constante para todo el alfabeto a encriptar y para cada uno de los elementos a controlar
const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inputOriginal = document.getElementById('input-original');//
const cifrador = document.getElementById('cifrador'); //Para todo el form entero
const resultado = document.getElementById('resultado'); //Para el mensaje ya encriptado
const rango =document.getElementById('rango'); //PAra el rango

const shifMessage =() => {  //llama
    const wordArray = [...inputOriginal.value.toUpperCase()]; //obtenemos el input original y lo transformamos en un array en mayusculas para que cuando se use el alfabeto tengamos las mismas letras y las podamos comparar.
   // alert(wordArray) //comprobamos para verificar que las letras se hayan armado bien en el array de mayusculas
    printChar(0,wordArray); // usamos la función printchar
}
//PARA ENCRIPTAR
const printChar = (currentLetterIndex, wordArray) => {  //Se declara la funcion recursiva printchar(index actual-posición por letra, el array creado)
 //Para evitar encriptar caracter por caracter, usamos una función recursiva que se llama asímisma.
    if(wordArray.length === currentLetterIndex) return; //para evitar que el largo de nuestro array sea igual del index actual, quiere decir que pasamos de la última letra. Se corta la recursión o loop y no llamar de vuelta a la recursión con el if, por ello se llama al return
    inputOriginal.value = inputOriginal.value.substring(1) //Si no es la ultima letra de nuestro Input original, para hacer la animacion quitando letras del texto ingrsado y se va agregando un caracter del resultado. Substring le saca el primer caracter.
    const spanChar =document.createElement("span");
    resultado.appendChild(spanChar);
    const charSinCodificar = wordArray[currentLetterIndex];
    spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
    //Busca en el alfabeto el indice del caracter sin codificar
        alfabeto [(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length]:
        charSinCodificar
    printChar(currentLetterIndex + 1, wordArray)
}
const submit = e => {  // Al llamar a la función submit, llamamos al event preventdefault para evitar el comportamiento base de submit xq no queremos llamar a un formulario.
    e.preventDefault(); 
    resultado.innerHTML = ''; // borra el resultado encriptado al ingresar un nuevo texto
    shifMessage()  //llamamos a la función shifmessage
}

cifrador.onsubmit =submit; //Al hacer el submit del form, cuando le demos enter estando en el input, llamemos a la función submit que recibe el evento. "El comportamiento base de submit es enviar un formulario".


import cipher from './cipher.js';

console.log(cipher);
