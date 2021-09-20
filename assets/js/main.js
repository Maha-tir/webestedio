const btnMode = document.querySelector(".toggle_mode");
const iconMode = document.querySelector(".mode");
const modeBg = document.querySelector("[data-theme='light']");

btnMode.addEventListener("click", () => {
  btnMode.classList.toggle("is-changed");
  iconMode.classList.toggle("to-dark-mode");
  iconMode.classList.toggle("to-light-mode");
  const inputChangeMode = document.getElementById("icon__xs");
  inputChangeMode.addEventListener("change", () => {
    if (inputChangeMode.checked) {
      modeBg.dataset.theme = "dark";
    } else {
      modeBg.dataset.theme = "light";
    }
  });
});

const btnMenu = document.querySelector(".toggle_menu");
const navBar = document.querySelector(".__nav");
btnMenu.addEventListener("click", () => {
  navBar.classList.toggle("slide");
  const backdrop = document.createElement("div");
  document.body.appendChild(backdrop);
  document.body.classList.toggle("scroll-blocked");
  backdrop.classList.add("backdrop");
  setTimeout(function () {
    backdrop.classList.add("fade-show");
  }, 60);

  const closeNavBar = document.querySelector(".exit");
  closeNavBar.addEventListener("click", hideNav);
  backdrop.addEventListener("click", hideNav);
  function hideNav() {
    navBar.classList.remove("slide");
    document.body.classList.remove("scroll-blocked");
    backdrop.classList.remove("fade-show");
    setTimeout(function () {
      document.body.removeChild(backdrop);
      backdrop.classList.remove("backdrop");
    }, 1000);
  }
});

window.addEventListener("scroll", () => {
  var header = document.querySelector(".lr-header");
  header.classList.toggle("sticky", window.scrollY > 25);
});
