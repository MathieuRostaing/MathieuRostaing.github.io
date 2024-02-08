// projet avorte d une nav qui illuminait la partie de la page dans laquelle on est
// let mainNavLinks = document.querySelectorAll("nav ul li a");
// let mainSections = document.querySelectorAll("part");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop-1 <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.classList.add("current");
//     } else {
//       link.classList.remove("current");
//     }
//   });
// });


// Pour l animation au defilement
function reveal() {
    var reveals = document.querySelectorAll(".reveal"); //on recupere les elements pour lesquels ca s applique
    var windowHeight = window.innerHeight;
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top; // on recupere le bord superieur de l element
      if (elementTop < windowHeight) {
        reveals[i].classList.add("active"); 
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  // ne pas oublier sinon il n y a rien pour declencher
  window.addEventListener("scroll", reveal); 