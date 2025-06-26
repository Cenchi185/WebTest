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

  const expandBtn = document.getElementById("expandBtn");
  const maxiplayer = document.getElementById("maxiplayer");

  expandBtn.addEventListener("click", () => {
    maxiplayer.classList.toggle("active");

    // ▲와 ▼ 모양을 토글 (선택사항)
    if (maxiplayer.classList.contains("active")) {
      expandBtn.textContent = "▼";
    } else {
      expandBtn.textContent = "▲";
    }
  });

