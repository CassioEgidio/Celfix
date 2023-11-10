const elementoOculto = document.getElementById("elemento-oculto");
const elementoAcionador = document.getElementById("elemento-acionador");

elementoAcionador.addEventListener("mouseenter", function() {
  elementoOculto.classList.add("visible");
});

elementoAcionador.addEventListener("mouseleave", function() {
  setTimeout(function() {
    if (!elementoOculto.matches(":hover")) {
      elementoOculto.classList.remove("visible");
    }
  }, 100);
});

elementoOculto.addEventListener("mouseenter", function() {
  // Nada a ser adicionado aqui, a transição cuidará do movimento.
});

elementoOculto.addEventListener("mouseleave", function() {
  elementoOculto.classList.remove("visible");
});

const menus = document.querySelector(".menu-perfil");
const nav = document.querySelector(".navbar");

menus.addEventListener("click", () => nav.classList.toggle("active"));

const menuPerfil = document.querySelector(".menu-perfil");
const perfilImg = document.querySelector(".menu-perfil img");

let isPerson = true; // Variável para controlar o estado da imagem

menuPerfil.addEventListener("click", () => {
  // Inverta o estado da variável
  isPerson = !isPerson;

  // Atualize a imagem com a transição
  perfilImg.style.opacity = 0;
  setTimeout(() => {
    perfilImg.src = isPerson
      ? "Imagens/person.svg"
      : "Imagens/close_FILL0_wght400_GRAD0_opsz24.svg";
    perfilImg.style.opacity = 1;
  }, 200); // Tempo de transição em milissegundos
});


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
},  6000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}


const carouselInner = document.getElementById('carousel-inner');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    let translateX = 0;
  
    prevButton.addEventListener('click', () => {
      if (translateX < 0) {
        translateX += 100;
        carouselInner.style.transform = `translateX(${translateX}%)`;
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (translateX > -200) {
        translateX -= 100;
        carouselInner.style.transform = `translateX(${translateX}%)`;
      }
    });




    const carouselInner2 = document.getElementById('carousel-inner2')
    const prevButton2 = document.getElementById('prev2');
    const nextButton2 = document.getElementById('next2');

prevButton2.addEventListener('click', () => {
  if (translateX < 0) {
    translateX += 100;
    carouselInner2.style.transform = `translateX(${translateX}%)`;
  }
});

nextButton2.addEventListener('click', () => {
  if (translateX > -200) {
    translateX -= 100;
    carouselInner2.style.transform = `translateX(${translateX}%)`;
  }
});

const carouselInner3 = document.getElementById('carousel-inner3')
const prevButton3 = document.getElementById('prev3');
const nextButton3 = document.getElementById('next3');

prevButton3.addEventListener('click', () => {
if (translateX < 0) {
translateX += 100;
carouselInner3.style.transform = `translateX(${translateX}%)`;
}
});

nextButton3.addEventListener('click', () => {
if (translateX > -200) {
translateX -= 100;
carouselInner3.style.transform = `translateX(${translateX}%)`;
}
});


document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  scrollToTopButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Role suavemente em vez de um salto instantâneo
      });
  });
});