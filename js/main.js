const searchInput = document.getElementById("header-search_input");
const classSelect = document.getElementById("class-select");
const menu = document.getElementById("menu");
const ellipse = document.querySelector(".ellipse");
const classSselectItems = menu.querySelectorAll(".class-select_item");
const allMenuAdditional = document.querySelectorAll(".menu-additional");

// main input
searchInput.addEventListener("input", () => {
  console.log(searchInput.value); //value for backend
});
// show/close menu
classSelect.addEventListener("click", () => {
  menu.classList.toggle("active");
  classSelect.classList.toggle("active");

  function addClass() {
    ellipse.classList.toggle("active");
  }
  ellipse.classList.contains("active") ? setTimeout(addClass, 800) : ellipse.classList.add("active");

  allMenuAdditional.forEach((el) => {
    el.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickInsideClassSelect = classSelect.contains(e.target);
    if (!isClickInsideMenu && !isClickInsideClassSelect) {
      function removeClass() {
        ellipse.classList.remove("active");
      }
      setTimeout(removeClass, 800);
      menu.classList.remove("active");
      classSelect.classList.remove("active");

      allMenuAdditional.forEach((el) => {
        el.classList.remove("active");
      });
    }
  });
});

// show/close menu-additional

classSselectItems.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    const menuAdditional = document.querySelector("." + el.getAttribute("for"));

    menuAdditional.classList.add("active");

    allMenuAdditional.forEach((el) => {
      el.classList.remove("active");
    });
    menuAdditional.classList.add("active");
  });
});
