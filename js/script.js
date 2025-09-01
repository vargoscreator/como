document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const header = document.querySelector(".header");
    const menuItems = document.querySelectorAll(".header__menu li a");
    function resetMenu() {
        gsap.set(menuItems, { y: 0, opacity: 1 });
        header.classList.remove("header-menu-show");
    }
    function toggleMenu() {
        if (window.innerWidth > 768) return;
        const isOpen = header.classList.contains("header-menu-show");
        if (!isOpen) {
            header.classList.add("header-menu-show");
            gsap.to(menuItems, {
                y: 0,
                opacity: 1,
                duration: 0.2,
                delay: 0.2
            });
        } else {
            gsap.to(menuItems, {
                y: 100,
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    header.classList.remove("header-menu-show");
                }
            });
        }
    }
    burger.addEventListener("click", toggleMenu);
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            resetMenu();
        } else {
            gsap.set(menuItems, { y: 100, opacity: 0 });
        }
    });
    if (window.innerWidth > 768) {
        resetMenu();
    } else {
        gsap.set(menuItems, { y: 100, opacity: 0 });
    }
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
