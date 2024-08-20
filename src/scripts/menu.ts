const ham = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (ham && navLinks) {
  ham.addEventListener("click", () => {
    navLinks.classList.toggle("expanded");
  });
}

console.log("Client TS!");
