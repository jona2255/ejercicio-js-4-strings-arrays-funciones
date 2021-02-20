let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1));
console.log(palabrasParesModificadas);

function modificaPares(palabras, funcion) {

  let palabrasParesModificadas = [];

  for (const [i, palabra] of palabras.entries()) {

    if (i % 2 !== 0) {
      palabrasParesModificadas.push(funcion(palabra));
    } else {
      palabrasParesModificadas.push(palabra);
    }

  }
  return palabrasParesModificadas;
}
