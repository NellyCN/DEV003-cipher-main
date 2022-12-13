import cipher from './cipher.js';
const botonEncriptar = document.getElementById('botonEncriptar'); //creamos la constante que almacenará del botón
const botonDesencriptar = document.getElementById('botonDesencriptar');

botonEncriptar.addEventListener("click", function () {
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
