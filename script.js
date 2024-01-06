// Blob Element Movement
const blob = document.querySelector('.blob');

window.addEventListener('pointermove', (e) => {
  let { clientX, clientY } = e;

  // Limit clientX and clientY to stay within the top and left boundaries of the viewport
  clientX = Math.max(0, Math.min(clientX, window.innerWidth - blob.clientWidth));
  clientY = Math.max(0, Math.min(clientY, window.innerHeight - blob.clientHeight));

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
});

function scrollToSection(sectionId) {
  var targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Slider and Section Navigation
var sliderCounter = 0;
var sliderContent = [
  "Developer",
  "Designer",
  "Student",
  "Gamer",
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";

  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");

  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);


// Navigation Menu
document.addEventListener('DOMContentLoaded', function () {
  const navButton = document.getElementById('navButton');
  const popupMenu = document.getElementById('popupMenu');

  navButton.addEventListener('click', function () {
    popupMenu.style.display = (popupMenu.style.display === 'block') ? 'none' : 'block';
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Close the popup menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!event.target.matches('.nav-button') && !event.target.closest('.popup-menu')) {
      popupMenu.style.display = 'none';
    }
  });
});

const sundaeSection = document.querySelector(".preview");

document.addEventListener("scroll", function () {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const translateYValue = Math.max(windowHeight - scrollPosition * 0.5, 0);

  sundaeSection.style.transform = `translateY(${translateYValue}px)`;
});

function openSundaePage() {
  window.location.href = 'sundae.html';
}


