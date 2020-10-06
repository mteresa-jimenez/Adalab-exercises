"use strict";

function contentSize(borderBox, width, padding, border) {
  if (!borderBox) {
    console.log(
      `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${
        width + padding * 2 + border * 2
      }px`
    );
  } else {
    return console.log(
      `El ancho del contenido es: ${
        width - padding * 2 - border * 2
      }px y el ancho total de la caja es: ${width}px`
    );
  }
}

contentSize(true, 100, 10, 2);
