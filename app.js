function encriptarTexto() {
    let texto = document.querySelector('#texto').value.toLowerCase();

    let textoEncriptado = texto
        .replace(/a/g, '5@')
        .replace(/e/g, '9@')
        .replace(/i/g, '1@')
        .replace(/o/g, '8@')
        .replace(/u/g, '3@');

        //ocultar la imagen y centrar el texto
    document.querySelector('#resultado').innerHTML = textoEncriptado;
    document.querySelector('img').style.display = 'none';
    document.querySelector('#resultado').style.display = 'flex';
    document.querySelector('#resultado').style.justifyContent = 'center';
    document.querySelector('#resultado').style.alignItems = 'center';
    document.querySelector('#resultado').style.height = '100%';
}

function desencriptarTexto() {
    let textoEncriptado = document.querySelector('#texto').value.toLowerCase();

    let textoDesencriptado = textoEncriptado
        .replace(/8@/g, 'o')  
        .replace(/3@/g, 'u')  
        .replace(/1@/g, 'i')  
        .replace(/9@/g, 'e')  
        .replace(/5@/g, 'a'); 

    document.querySelector('#resultado').innerHTML = textoDesencriptado;

      //ocultar la imagen y centrar el texto
      document.querySelector('img').style.display = 'none';
      document.querySelector('#resultado').style.display = 'flex';
      document.querySelector('#resultado').style.justifyContent = 'center';
      document.querySelector('#resultado').style.alignItems = 'center';
      document.querySelector('#resultado').style.height = '100%';
}

function copiarTexto() {
    let resultado = document.querySelector('#resultado');

    // Crear un rango para seleccionar el contenido
    let range = document.createRange();
    range.selectNodeContents(resultado);

    // Limpiar cualquier selección previa
    let selection = window.getSelection();
    selection.removeAllRanges();

    // Añadir el nuevo rango que selecciona el texto del resultado
    selection.addRange(range);

    // Copiar el contenido seleccionado al portapapeles
    document.execCommand('copy');
}