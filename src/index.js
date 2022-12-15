import cipher from './cipher.js';   //Lógica y control de los inputs-HTML
const botonEncriptar = document.getElementById('botonEncriptar'); //creamos la constante que conseguirá el id del botón Encriptar 
const botonDesencriptar = document.getElementById('botonDesencriptar'); //creamos la constante que conseguirá el id del botón Desencriptar

botonEncriptar.addEventListener("click", function () { //Se llama a la función 
  //console.log("hola"); //comprobamos el funcionamiento del boton
  const msgxcifrar = document.getElementById('msgacifrar').value;
  const posicion = parseInt(document.getElementById('posiciones').value);
  const cifrado = cipher.encode(posicion, msgxcifrar);
  const msgcifrado = document.getElementById('msgcifrado');

  msgcifrado.value = cifrado;
});

botonDesencriptar.addEventListener("click", function () {
  //   console.log("desencripta"); //comprobamos el funcionamiento del boton
  const msgxcifrar = document.getElementById('msgacifrar').value;
  const posicion = parseInt(document.getElementById('posiciones').value);
  const cifrado = cipher.decode(posicion, msgxcifrar);
  const msgcifrado = document.getElementById('msgcifrado');

  msgcifrado.value = cifrado;
});
//console.log(cipher);
