// 왼쪽 사이드메뉴 on off 기능
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