/*Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.


MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

const carouselElement = document.querySelector(".carousel");
console.log(carouselElement);

for (let index = 0; index < images.length; index++) {
  console.log(images[index]);

  carouselElement.innerHTML += `<div class="slide">
                                        <img src="${images[index]}">
                                    </div>`;
}

const allSlides = document.querySelectorAll(".slide");
console.log("allSlides", allSlides);

let currentSlide = 0; // Prima slide attiva

const previousArrow = document.querySelector(".previous");
const nextArrow = document.querySelector(".next");

nextArrow.addEventListener(
  "click",

  function () {
    console.log("ho cliccato su .next");
    allSlides[currentSlide].classList.remove("current");
    currentSlide = currentSlide + 1;

    allSlides[currentSlide].classList.add("current");
  }
);

previousArrow.addEventListener("click", function () {
  console.log("ho cliccato su .next");
  allSlides[currentSlide].classList.remove("current");
  currentSlide = currentSlide + 1;

  allSlides[currentSlide].classList.add("current");
});
