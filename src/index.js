import cipher from './cipher.js';
let userName;
let string;
let offset;

//acá estamos creando los botones para la opción de cifrar y descifrar.
const buttonEncode = document.getElementById("encode_page");
buttonEncode.addEventListener("click", encode);
const buttonDecode = document.getElementById("decode_page");
buttonDecode.addEventListener("click", decode);

function nombre() {
    userName = document.getElementById("name").value;
}

//*funcion para cambiarletras minusculas a mayuscula (onkeyup="myFunction() va haciendo cambio uno X uno")*//
function myFunction() {
    var x = document.getElementById("message_to_encode");
    x.value = x.value.toUpperCase();
}

//función para mostrar la página de codificado.
function encode() {
    nombre();
    document.getElementById("start").innerHTML = `
  <p>¡Hola ${userName.toUpperCase()}!</p>
  <form>
  <textarea id="message_to_encode" onkeyup="myFunction()" rows="4" placeholder="Mensaje a codificar:"></textarea>
  </form>
  <br>
  <div class="pass">
  <span> Clave: </span>
  <input id="key" type="number" min="1" max="100" autocomplete="off">
  </div>
  <br>
  <button type="button" id="start_encode"" class="btn-style">Codificar</button>
  <br>
  <br>
  <textarea id="content" rows="4" placeholder="Mensaje codificado:"></textarea>
  <br>
  <input type="button" id="copyID" class="copy-btn"/>
  <br>
  <br>
  <button type="button" id="button_start" class="btn-style">Volver al inicio</button> 
 
 `
    //acá damos la funcionabilidad de copiar el texo cifrado.
    var button = document.getElementById("copyID"),
        input = document.getElementById("content");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        input.select();
        document.execCommand("copy");
    });

    const buttonBack1 = document.getElementById("button_start");
    buttonBack1.addEventListener('click', startAgain1);
    const startEncode = document.getElementById("start_encode");
    //Llamamos a cipher desde cipher.js
    startEncode.addEventListener('click', function () {
        string = document.getElementById("message_to_encode").value;
        offset = document.getElementById("key").value;
        let finalMessage = cipher.encode(offset, string);
        document.getElementById("content").innerHTML = finalMessage;
    });
}
//función para volver a la página inicial.
function startAgain1() {
    window.location = "index.html";
}
//*funcion para cambiarletras minusculas a mayuscula (onkeyup="myFunction() va haciendo cambio uno X uno")*//
myFunction();

//función para mostrar la página de decodificado.
function decode() {
    nombre();
    document.getElementById("start").innerHTML = `
  <p>¡Hola ${userName.toUpperCase()}!</p>
  <form>
  <textarea id="message_to_decode" rows="4" cols="25" onkeyup="myFunction1()"  placeholder="Mensaje a decodificar:"></textarea>
  </form>
  <br>
  <div class="pass">
  <span> Clave: </span>
  <input id="key" type="number" min="1" max="100" autocomplete="off" size="3">
  </div>
  <br>
  <button type="button" id="start_decode" class="btn-style">Decodificar</button>
  <br>
  <br>
  <textarea id="content" rows="4" cols="25" placeholder="Mensaje decodificado:"></textarea>
  <br>
  <input type="button" id="copyID" class="copy-btn" />
  <br>
  <br>

  <button type="button" id="button_start" class="btn-style">Volver al inicio</button>
  `
    var button = document.getElementById("copyID"),
        input = document.getElementById("content");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        input.select();
        document.execCommand("copy");
    });

    const buttonBack1 = document.getElementById("button_start");
    buttonBack1.addEventListener('click', startAgain1);
    const startDecode = document.getElementById("start_decode");
    //Llamamos a cipher desde cipher.js
    startDecode.addEventListener('click', function () {
        string = document.getElementById("message_to_decode").value;
        offset = document.getElementById("key").value;
        let finalMessage = cipher.decode(offset, string);
        document.getElementById("content").innerHTML = finalMessage;
    });
}