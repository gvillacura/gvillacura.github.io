const cipher = {
  encode: encodeMessage,
  decode: decodeMessage
};

function encodeMessage(offset, string) {

  let wordEncrypted = "";
  //acá convertimos las letras ingresadas a mayúsculas.
  let uppercaseMessage = string.toUpperCase();

  offset = Number(offset);

  for (let index = 0; index < uppercaseMessage.length; index++) {

    let x = uppercaseMessage.charCodeAt(index); //buscamos la posición de la letra en el código ASCII.
    let positionAscci = (x - 65 + offset) % 26 + 65; //buscamos la posición de la letra más el offset en el código ASCII.

    if (x < 65 || x > 90) { //nos aseguramos que todos los carácteres que no sean letras sean escritos de la misma forma.
      wordEncrypted = wordEncrypted + uppercaseMessage[index];
      continue;
    }
    let encryptedLetter = String.fromCharCode(positionAscci); //buscamos la letra correspondiente a la posición nueva.
    wordEncrypted = wordEncrypted + encryptedLetter;

  }

  return wordEncrypted;

}


function decodeMessage(offset, string) {

  let wordDecrypted = "";

  let uppercaseMessage = string.toUpperCase();

  offset = Number(offset);

  for (let index = 0; index < uppercaseMessage.length; index++) {

    let x = uppercaseMessage.charCodeAt(index);
    let positionAscci = (x + 65 - offset) % 26 + 65;

    if (x < 65 || x > 90) {
      wordDecrypted = wordDecrypted + uppercaseMessage[index];
      continue;
    }
    let letraEncriptada = String.fromCharCode(positionAscci);

    wordDecrypted = wordDecrypted + letraEncriptada;

  }

  return wordDecrypted;

}

export default cipher;