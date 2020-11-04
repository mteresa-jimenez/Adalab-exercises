"use strict";
const price = (x) =>
  `Precio sin IVA: ${x}, IVA: ${x * 0.21} y Total: ${x * 1.21} `;
console.log(price(10));
