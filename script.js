window.addEventListener("load", () => {
  console.log("Bienvenido al Hospital Santa Isabel");
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const interactiveCards = document.querySelectorAll(".doctor-card, .mini-card");
interactiveCards.forEach(card => {
  card.addEventListener("mouseenter", () => card.style.backgroundColor = "#d6f0f0");
  card.addEventListener("mouseleave", () => card.style.backgroundColor = "#fff");
});

const doctorCards = document.querySelectorAll(".doctor-card");

doctorCards.forEach(card => {
  const popup = card.querySelector(".doctor-popup");
  const closeBtn = card.querySelector(".close-popup");

  card.addEventListener("click", (e) => {
    if(!e.target.classList.contains("close-popup")) {
      popup.style.display = "block";
    }
  });

  // Cerrar popup al presionar el botón
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.style.display = "none";
  });
});

