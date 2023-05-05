const searchInput = document.getElementById("header-search_input");
const classSelect = document.getElementById("class-select");
const menu = document.getElementById("menu");
const ellipse = document.querySelector(".ellipse");

// main input
searchInput.addEventListener("input", () => {
  console.log(searchInput.value); //value for backend
});

classSelect.addEventListener("click", () => {
  menu.classList.toggle("active");
  classSelect.classList.toggle("active");

  function addClass() {
    ellipse.classList.toggle("active");
  }
  ellipse.classList.contains("active") ? setTimeout(addClass, 800) : ellipse.classList.add("active");

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
    }
  });
});
