const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const hamburgerBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const menuBtns = menu.querySelectorAll("a");

const tabsHandler = (e) => {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  panels.forEach((panel) => panel.classList.add("hidden"));

  e.target.classList.add("border-softRed", "border-b-4");
  const classStr = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classStr)[0]
    .classList.remove("hidden");
};

const menuHandler = (e) => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
};

tabs.forEach((tab) => tab.addEventListener("click", tabsHandler));
hamburgerBtn.addEventListener("click", menuHandler);
menuBtns.forEach((menuBtn) => menuBtn.addEventListener("click", menuHandler));
