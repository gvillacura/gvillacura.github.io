const cipher = {
  encode: encodeMessage,
  decode: decodeMessage
};

function encodeMessage(offset, string) {

  let wordEncrypted = "";

  let uppercaseMessage = string.toUpperCase();

  offset = Number(offset);

  for (let index = 0; index < uppercaseMessage.length; index++) {

    let x = uppercaseMessage.charCodeAt(index);
    let positionAscci = (x - 65 + offset) % 26 + 65;

    if (x < 65 || x > 90) {
      wordEncrypted = wordEncrypted + uppercaseMessage[index];
      continue;
    }
    let encryptedLetter = String.fromCharCode(positionAscci);

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