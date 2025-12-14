// Récupération du bouton du menu burger (icône cliquable)
const burgerBtn = document.getElementById("burgerToggle");

// Récupération du contenu du menu burger (menu déroulant)
const burgerMenu = document.getElementById("burgerContent");

// Récupération de la sidebar (menu latéral fixe)
const sidebar = document.querySelector(".sidebar");

// Récupération de la zone de contenu principal
const content = document.querySelector(".content");

// Événement déclenché au clic sur le bouton burger
burgerBtn.addEventListener("click", () => {

  // Vérifie si le menu burger est actuellement visible
  const burgerVisible = window.getComputedStyle(burgerMenu).display === "block";

  // Si le menu burger est ouvert
  if (burgerVisible) {

    // Fermer le menu burger
    burgerMenu.style.display = "none";

    // Réafficher la sidebar si elle existe
    if (sidebar) sidebar.style.display = "flex";

    // Le contenu reprend sa largeur normale
    if (content) content.style.width = "";
    if (content) content.style.marginLeft = "";

  } else {

    // Ouvrir le menu burger
    burgerMenu.style.display = "block";

    // Cacher la sidebar pour libérer l’espace
    if (sidebar) sidebar.style.display = "none";

    // Le contenu occupe toute la largeur de l’écran
    if (content) content.style.width = "100%";
    if (content) content.style.marginLeft = "0";
  }
});

// ===================== ANIMATION AU SCROLL =====================

// Récupération de la section compétences
// Attention : l’ID contient un accent
const sectionCompetence = document.getElementById('compétences');

// Récupération des barres de compétences
const barreHtmlCss = document.querySelector('.skillsHtmlcss');
const barreJs = document.querySelector('.skillsJs');
const barrePhp = document.querySelector('.skillsPhp');

// Variable servant à empêcher l’animation de se relancer plusieurs fois
let animationDejaLancee = false;

// Écouteur d’événement déclenché lors du scroll de la page
window.addEventListener('scroll', function () {

  // Position de la section compétences par rapport au haut de la fenêtre
  const positionSection = sectionCompetence.getBoundingClientRect().top;

  // Hauteur visible de la fenêtre (viewport)
  const hauteurFenetre = window.innerHeight;

  // Si la section est visible à 80% de la fenêtre
  // et que l’animation n’a pas encore été lancée
  if (positionSection < hauteurFenetre * 0.8 && !animationDejaLancee) {

    // Ajout des classes CSS qui déclenchent l’animation des barres
    barreHtmlCss.classList.add('animHtmlCss');
    barreJs.classList.add('animJs');
    barrePhp.classList.add('animPhp');

    // Empêche de relancer l’animation lors des prochains scrolls
    animationDejaLancee = true;
  }
});