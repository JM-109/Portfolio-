var typed = document.getElementById("typed");
var texts = ["Web Developer", "Programmer", "IT Student", "Designer"];
var textIndex = 0;
var charIndex = 0;
var isDeleting = false;

function type() {
  var currentText = texts[textIndex];
  var displayed = currentText.substring(0, charIndex);
  typed.textContent = displayed;

  var speed = isDeleting ? 60 : 150;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, speed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, speed);
  } else {
    isDeleting = !isDeleting;
    textIndex = !isDeleting ? (textIndex + 1) % texts.length : textIndex;
    setTimeout(type, isDeleting ? 500 : 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();

  var header = document.querySelector("header");
  var navLinks = document.querySelectorAll("nav a");
  var sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.boxShadow = "0 0 15px rgba(183, 75, 75, 0.6)";
    } else {
      header.style.boxShadow = "none";
    }

    var current = "";
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
