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
  const navLink = document.querySelectorAll(".nav_link");
  navLink.forEach((n) => n.addEventListener("click", hideNav));
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

const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const scrollToTop = document.querySelector(".scroll_top");
window.addEventListener("scroll", () => {
  scrollToTop.classList.toggle("up", window.scrollY > 250);
});
scrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
// window.onload = () => {
//   for (let i = 0; i < gallery.length; i++) {
//     let clickedImgIndex;
//     let newIndex = i;
//     gallery[i].onclick = () => {
//       clickedImgIndex = 1;
//       // function preview() {
//       //   let imgUrl = gallery[newIndex].querySelector("img").src;
//       // }
//       console.log(gallery[newIndex].querySelector("img").src);
//     };
//   }
// };
