/*BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell'immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all'immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.*/

const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

const imagesSin = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

const carouselElement = document.querySelector(".caroselloDestra");
console.log(carouselElement);

const carouselElementSin = document.querySelector(".caroselloSinistra");
console.log(carouselElementSin);

for (let index = 0; index < images.length; index++) {
  console.log(images[index]);

  carouselElement.innerHTML += `<div class="slide">
                                        <img src="${images[index]}">
                                    </div>`;

  carouselElementSin.innerHTML += `<div class="slideSin">
                                        <img src="${imagesSin[index]}">
                                    </div>`;
}

const allSlides = document.querySelectorAll(".slide");
console.log("allSlides", allSlides);

const allSlidesSin = document.querySelectorAll(".slideSin");
console.log("allSlidesSin", allSlidesSin);

let currentSlide = 0; // Prima slide attiva
let currentSlideSin = 0; // Prima slide attiva

allSlides[0].classList.add("trasparente");
allSlidesSin[0].classList.add("current");

const previousArrow = document.querySelector(".previous");
const nextArrow = document.querySelector(".next");

nextArrow.addEventListener(
  "click",

  function () {
    if (currentSlide < allSlides.length - 1) {
      console.log("ho cliccato su .next");

      allSlides[currentSlide].classList.remove("trasparente");
      allSlidesSin[currentSlideSin].classList.remove("current");

      currentSlide = currentSlide + 1;
      currentSlideSin = currentSlideSin + 1;

      allSlides[currentSlide].classList.add("trasparente");
      allSlidesSin[currentSlideSin].classList.add("current");
    } else if (currentSlide == allSlides.length - 1) {
      console.log("torno indietro");
      allSlides[currentSlide].classList.remove("trasparente");
      allSlidesSin[currentSlideSin].classList.remove("current");
      currentSlide = 0;
      currentSlideSin = 0;
      allSlides[currentSlide].classList.add("trasparente");
      allSlidesSin[currentSlideSin].classList.add("current");
    }
  }
);

previousArrow.addEventListener(
  "click",

  function () {
    if (currentSlide <= allSlides.length - 1 && currentSlide > 0) {
      console.log("ho cliccato su .previous");
      allSlides[currentSlide].classList.remove("trasparente");
      allSlidesSin[currentSlideSin].classList.remove("current");
      currentSlide = currentSlide - 1;
      currentSlideSin = currentSlideSin - 1;
      allSlides[currentSlide].classList.add("trasparente");
      allSlidesSin[currentSlideSin].classList.add("current");
    } else if (currentSlide == 0) {
      console.log("torno indietro");

      allSlides[currentSlide].classList.remove("trasparente");
      allSlidesSin[currentSlideSin].classList.remove("current");
      currentSlide = 4;
      currentSlideSin = 4;
      allSlides[currentSlide].classList.add("trasparente");
      allSlidesSin[currentSlideSin].classList.add("current");
    }
  }
);

allSlidesSin[0].classList.add("uno");
allSlidesSin[2].classList.add("tre");
allSlidesSin[3].classList.add("quattro");
allSlidesSin[4].classList.add("cinque");

allSlides[2].classList.add("treDes");
allSlides[0].classList.add("unoDes");
