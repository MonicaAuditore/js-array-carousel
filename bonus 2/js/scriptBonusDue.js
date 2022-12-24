/*BONUS 1:
Aggiungere il ciclo infinito del carosello. 
Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all'immagine precedente, 
dovrà comparire l'ultima immagine dell'array e viceversa.*/

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

/*copia


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

allSlides[0].classList.add("uno");
allSlides[2].classList.add("tre");
allSlides[3].classList.add("quattro");
allSlides[4].classList.add("cinque");

allSlides[0].classList.add("current");

const previousArrow = document.querySelector(".previous");
const nextArrow = document.querySelector(".next");

nextArrow.addEventListener(
  "click",

  function () {
    if (currentSlide < allSlides.length - 1) {
      console.log("ho cliccato su .next");
      allSlides[currentSlide].classList.remove("current");
      currentSlide = currentSlide + 1;

      allSlides[currentSlide].classList.add("current");
    } else if (currentSlide == allSlides.length - 1) {
      console.log("torno indietro");
      allSlides[currentSlide].classList.remove("current");
      currentSlide = 0;
      allSlides[currentSlide].classList.add("current");
    }
  }
);

previousArrow.addEventListener(
  "click",

  function () {
    if (currentSlide <= allSlides.length - 1 && currentSlide > 0) {
      console.log("ho cliccato su .previous");
      allSlides[currentSlide].classList.remove("current");
      currentSlide = currentSlide - 1;

      allSlides[currentSlide].classList.add("current");
    } else if (currentSlide == 0) {
      console.log("torno indietro");

      allSlides[currentSlide].classList.remove("current");
      currentSlide = 4;
      allSlides[currentSlide].classList.add("current");
    }
  }
);

*/
