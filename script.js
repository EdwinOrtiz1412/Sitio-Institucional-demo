const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function toggleMenu() {
  nav.classList.toggle("active");
}

function closeMenu() {
  nav.classList.remove("active");
}

function initMenu() {
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  const menuLinks = document.querySelectorAll(".nav-menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

initMenu();

//Preguntas Frecuentes
function toggleFaq(event) {
  const question = event.currentTarget;
  const answer = question.nextElementSibling;
  const icon = question.querySelector("i");
  document.querySelectorAll(".faq-answer").forEach((item) => {
    if (item !== answer) {
      item.classList.remove("active");
    }
  });
  document.querySelectorAll(".faq-question i").forEach((item) => {
    if (item !== icon) {
      item.classList.remove("fa-minus");
      item.classList.add("fa-plus");
    }
  });
  answer.classList.toggle("active");
  if (answer.classList.contains("active")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}
function initFaq() {
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", toggleFaq);
  });
}
initFaq();
