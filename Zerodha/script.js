
const nav = document.querySelector("nav ul");
const toggleIcon = document.querySelector("nav ul li svg");

toggleIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
});


document.querySelectorAll("nav ul li").forEach((navItem) => {
  navItem.addEventListener("click", (event) => {
    let target = event.target.textContent.trim().toLowerCase();
    let targetElement = document.querySelector(`.${target}-section`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const signupBtn = document.querySelector(".signup-btn");

signupBtn.addEventListener("mouseover", () => {
  signupBtn.style.transform = "scale(1.1)";
});

signupBtn.addEventListener("mouseleave", () => {
  signupBtn.style.transform = "scale(1)";
});


window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "1000";
    nav.style.backgroundColor = "#fff";
    nav.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.position = "relative";
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
});
