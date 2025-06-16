const sidebar = document.getElementById("sidebar");
const sideMenu = document.getElementById("sideMenu");
const main = document.getElementById("main");

let isOpen = false;

sideMenu.addEventListener("click", () => {
  if (isOpen) {
    main.style.marginLeft = "0px";
    sidebar.style.marginLeft = "-250px"
    isOpen = false;
  } else {
    main.style.marginLeft = "500px";
    sidebar.style.marginLeft = "250px"
    isOpen = true;
  }
});