"use strict";
function price(x) {
  return `Precio sin IVA: ${x}, IVA: ${x * 0.21} y Total: ${x * 1.21} `;
}

console.log(price(5));
