const cipher = {  //lógica que recibe el index.js
  encode: function (posicion, msgxcifrar) { 
    // console.log(msgxcifrar);
    if (!msgxcifrar || typeof msgxcifrar !== 'string') { // Si el mensaje a dscifrar es vacío o es diferente de string, tirar el error 
      throw new TypeError();
    }
    let cifrado = "";
    for (let i = 0; i < msgxcifrar.length; i++) {
      let char = msgxcifrar[i]; //char cadena de caracteres tomados del asci
      const codigo = msgxcifrar.charCodeAt(i);  //indice de la letra en el codigo ASCII
      if (codigo >= 65 && codigo <= 90) {     //De la A a la Z
        char = String.fromCharCode((codigo - 65 + posicion) % 26 + 65);
      } else if (codigo >= 97 && codigo <= 122) {   //De la a a la z
        char = String.fromCharCode((codigo - 97 + posicion) % 26 + 97);
      }
      cifrado = cifrado + char;
    }
    return cifrado;
  },
  decode: function (posicion, msgxdescifrar) {
    // console.log(msgxdescifrar);
    if (!msgxdescifrar || typeof msgxdescifrar !== 'string') { // Si el mensaje a dscifrar es vacío o es diferente de string, tirar el error 
      throw new TypeError();
    }
    let descifrado = "";
    for (let i = 0; i < msgxdescifrar.length; i++) {
      let char = msgxdescifrar[i];
      const codigo = msgxdescifrar.charCodeAt(i);
      if (codigo >= 65 && codigo <= 90) {
        char = String.fromCharCode(((codigo - 90 - posicion) % 26) + 90);
      } else if (codigo >= 97 && codigo <= 122) {
        char = String.fromCharCode(((codigo - 122 - posicion) % 26) + 122);
      }
      descifrado = descifrado + char;
    }
    //console.log(descifrado);
    return descifrado;
  }
};
//console.log(cipher.encode('2', 'BBB'));
export default cipher;