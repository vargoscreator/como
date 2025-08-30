document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  burger.addEventListener("click", () => {
    header.classList.toggle("header-menu-show");
  });
});

if(document.querySelector('.cookiesPopup')){
    document.querySelector('.cookiesPopup__close').addEventListener('click', () => {
        document.querySelector('.cookiesPopup').classList.remove('show');
    });
}

moveUserBlock();
window.addEventListener("resize", moveUserBlock);
function moveUserBlock() {
  if(document.querySelector(".header__user")){
      const headerInner = document.querySelector(".header__inner");
      const headerMenu = document.querySelector(".header__menu ul");
      const headerUser = document.querySelector(".header__user");
      if (window.innerWidth <= 480) {
          headerMenu.appendChild(headerUser);
      } else {
          headerInner.appendChild(headerUser);
      }
  }
}
