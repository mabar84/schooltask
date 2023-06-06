const searchInput = document.getElementById("header-search_input");
const classSelect = document.getElementById("class-select");
const menu = document.getElementById("menu");
const ellipse = document.querySelector(".ellipse");
const classSselectItems = menu.querySelectorAll(".class-select_item");
const menuItems = menu.querySelectorAll(".menu-item");
const allMenuAdditional = document.querySelectorAll(".menu-additional");
const navButtons = document.querySelectorAll(".nav-button");
const navButtonsMobile = document.querySelector(".nav-buttons_mobile");
const navMenuMobile = document.querySelector(".nav-menu_mobile");
// main input
searchInput.addEventListener("input", () => {
  console.log(searchInput.value); //value for backend
});
// site-navigate
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((el) => {
      el.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// show/close menu
classSelect.addEventListener("click", () => {
  menu.classList.toggle("active");
  classSelect.classList.toggle("active");

  function addClass() {
    ellipse.classList.toggle("active");
  }
  ellipse.classList.contains("active") ? setTimeout(addClass, 0) : ellipse.classList.add("active");
  // ellipse.classList.contains("active") ? setTimeout(addClass, 800) : ellipse.classList.add("active");

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

      // setTimeout(removeClass, 800);
      setTimeout(removeClass, 0);
      menu.classList.remove("active");
      classSelect.classList.remove("active");

      allMenuAdditional.forEach((el) => {
        el.classList.remove("active");
      });
    }
  });
});

// show/close menu-additional

// classSselectItems.forEach((el) => {
//   el.addEventListener("mouseenter", () => {
//     const menuAdditional = document.querySelector("." + el.getAttribute("for"));

//     menuAdditional?.classList.add("active");

//     allMenuAdditional.forEach((el) => {
//       el.classList.remove("active");
//     });
//     menuAdditional.classList.add("active");
//   });
// });

menuItems.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    const menuAdditional = el.querySelector(".menu-additional");

    // menu.style.overflow = "visible";

    menuAdditional?.classList.add("active");

    allMenuAdditional.forEach((el) => {
      el.classList.remove("active");
    });
    menuAdditional.classList.add("active");
  });
});

// show/close mobile menu
navButtonsMobile.addEventListener("click", () => {
  navMenuMobile.classList.toggle("active");

  document.addEventListener("click", (e) => {
    const isClickInsideMobileMenu = navMenuMobile.contains(e.target);
    console.log(isClickInsideMobileMenu);

    const isClickInsideMenu = navMenuMobile.contains(e.target);
    const isClickInsideNavButtons = navButtonsMobile.contains(e.target);

    if (!isClickInsideMenu && !isClickInsideNavButtons) {
      navMenuMobile.classList.remove("active");
    }
  });
});

//accordions PC
let accordionHeaders = document.querySelectorAll(".accordion-header");
if (accordionHeaders) {
  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      // Получаем блок с содержанием, следующий непосредственно за заголовком
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });
  });
}

//accordion mobile menu
let mobileAccordionHeaders = document.querySelectorAll(".menu-accordion-header");
// let mobileAccordionContent = document.querySelectorAll(".menu-accordion-content");
if (mobileAccordionHeaders) {
  mobileAccordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      mobileAccordionHeaders.forEach(function (item) {
        if (item !== header) {
          item.classList.remove("active");
          item.nextElementSibling.classList.remove("active");
        }
      });
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });
  });
}

//rating
const rating = document.getElementById("rating");
if (rating) {
  rating.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.closest("label")) {
      const label = e.target.closest("label");
      const name = "." + label.getAttribute("for");
      this.querySelector(name).checked = true;
      const selectedRating = name[6];

      console.log("block has value ", selectedRating);
    }
  });
}

// feedback, required fields
const fields = document.querySelectorAll(".feedback-input");
const errorMessage = document.querySelector(".error-message");
const sendData = document.getElementById("send-data");
if (sendData) {
  sendData.addEventListener("click", (e) => {
    let isAllFieldFilled = true;

    e.preventDefault();
    fields.forEach((f) => {
      if (!f.value) {
        f.classList.add("error");
        errorMessage.classList.add("error");
        isAllFieldFilled = false;
      }
    });
    if (isAllFieldFilled) {
      console.log(document.getElementById("name").value);
      console.log(document.getElementById("email").value);
      console.log(document.getElementById("subject").value);
      console.log(document.getElementById("message").value);
      console.log(document.getElementById("code").value);
    }
  });

  fields.forEach((f) => {
    f.addEventListener("input", () => {
      if (f.value) {
        f.classList.remove("error");
        errorMessage.classList.remove("error");
      }
    });
  });
}

// filter exercises
const input = document.getElementById("regular-search_input");

if (input) {
  function filterList() {
    let items = document.querySelectorAll(".exercises-content a");
    let filter = input.value.toUpperCase();

    for (let i = 0; i < items.length; i++) {
      let text = items[i].innerText.toUpperCase();
      if (text.indexOf(filter) > -1) {
        items[i].style.display = "";
        items[i].childNodes[1].style.display = "";
      } else {
        items[i].style.display = "none";
        items[i].childNodes[1].style.display = "none";
      }
    }
  }
  input.addEventListener("input", filterList);
}

// filter esse
const inputEsse = document.getElementById("esse-search_input");

if (inputEsse) {
  function filterListEsse() {
    let items = document.querySelectorAll(".part-content a");
    let filter = inputEsse.value.toUpperCase();

    for (let i = 0; i < items.length; i++) {
      let text = items[i].childNodes[1].innerText.toUpperCase();

      if (text.indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
  inputEsse.addEventListener("input", filterListEsse);
}
