// ===== MENU TOGGLE =====
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    });
});

// ===== TEXT ROTATOR =====
const words = document.querySelectorAll(".change-text .word");
let wordIndex = 0;
function rotateWords() {
    words.forEach((w, i) => {
        w.style.display = (i === wordIndex) ? "inline-block" : "none";
    });
    wordIndex = (wordIndex + 1) % words.length;
}
rotateWords();
setInterval(rotateWords, 2000);

// ===== STICKY NAVBAR =====
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== ACTIVE NAV LINK =====
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navlist a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===== SCROLL REVEAL (Simple Fade In) =====
const revealElements = document.querySelectorAll("section, .services-box, .skills-bar, .port-box");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== BACK TO TOP =====
let backToTop = document.createElement("button");
backToTop.innerText = "⬆";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== DOWNLOAD CV =====
document.querySelectorAll(".btn").forEach(btn => {
    if (btn.innerText.includes("Download CV")) {
        btn.addEventListener("click", () => {
            window.open("cv.pdf", "_blank");
        });
    }
});

// ===== SKILL BAR ANIMATION =====
const skillFills = document.querySelectorAll(".skill-fill");

function fillSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skillFills.forEach(fill => {
    const skillTop = fill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      let target = fill.getAttribute("data-skill");
      fill.style.width = target + "%";
    }
  });
}
window.addEventListener("scroll", fillSkills);
