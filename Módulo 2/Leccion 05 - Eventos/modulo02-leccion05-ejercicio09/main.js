"use strict";

const isra = document.querySelector(".teacher--isra");
const tuerto = document.querySelector(".teacher--tuerto");
const nasi = document.querySelector(".teacher--nasi");

function handleTeacherClick(event) {
  const selectedTeacher = event.currentTarget;
  selectedTeacher.classList.toggle("teacher--selected");
  const favorite = selectedTeacher.querySelector(".favorite");
  if (favorite.innerHTML === "Añadir") {
    favorite.innerHTML = "Quitar";
  } else if (favorite.innerHTML === "Quitar") {
    favorite.innerHTML = "Añadir";
    console.log("hola");
  }
}

isra.addEventListener("click", handleTeacherClick);
tuerto.addEventListener("click", handleTeacherClick);
nasi.addEventListener("click", handleTeacherClick);
