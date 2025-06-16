const sidebar = document.getElementById("sidebar");
const sideMenu = document.getElementById("sideMenu");
const main = document.getElementById("main");
const header = document.getElementById("header")

let isOpen = false;

sideMenu.addEventListener("click", () => {
  if (isOpen) {
    header.style.marginLeft = "0px";
    main.style.marginLeft = "0px";
    sidebar.style.marginLeft = "-250px"
    isOpen = false;
  } else {
    header.style.marginLeft = "250px";
    main.style.marginLeft = "500px";
    sidebar.style.marginLeft = "250px"
    isOpen = true;
  }
});