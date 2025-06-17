const sidebar = document.getElementById("sidebar");

let isOpen = false;

sideMenu.addEventListener("click", () => {
  if (isOpen) {
    sidebar.style.marginLeft = "-250px"
    isOpen = false;
  } else {
    sidebar.style.marginLeft = "250px"
    isOpen = true;
  }
});