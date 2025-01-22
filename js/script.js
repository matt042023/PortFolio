/* ===================== typing animation ===================== */
let typed = new Typed(".typing", {
  strings: [
    "",
    "Developpeur Full Stack",
    "Developpeur Back-end",
    "Developpeur Front-End",
    "Prompt Engineer",
    "Developpeur web Mobile",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
/* ===================== typing animation ===================== */
/* ===================== typing1 animation ===================== */
let typedProjet = new Typed(".typingProjet", {
  strings: ["", "Ici tout commence ...", "Imaginons demain !"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
/* ===================== typing animation ===================== */

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
// console.log(navList);
// console.log(totalNavList);
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionToglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.getElementById(target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toogler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionToglerBtn();
});
function asideSectionToglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

document.getElementById("sendMail").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Vérification que les champs ne sont pas vides
  if (!name || !email || !subject || !message) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  // Génération du lien mailto
  const mailtoLink = `mailto:matt.lheureux@hotmail.fr?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
  )}`;

  // Ouvre le client de messagerie
  window.location.href = mailtoLink;
});
