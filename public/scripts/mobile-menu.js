let lastActiveElement;

const keyboardCode = {
  ESC: 27,
};

function $(elem) {
  return document.querySelector(elem);
}

function openMenu() {
  lastActiveElement = document.activeElement;
  $("#nav-menu-mobile-backdrop").style = "opacity: .8; pointer-events: all;";
  $("#nav-menu-mobile").style = "transform: translate(0);";
  $("#close-button").focus();
}

function closeMenu() {
  $("#nav-menu-mobile-backdrop").style = "opacity: 0; pointer-events: none;";
  $("#nav-menu-mobile").style = "transform: translate(100%);";
  lastActiveElement.focus();
}

$("#burger-menu").addEventListener("click", openMenu);
$("#close-button").addEventListener("click", closeMenu);
$("#nav-menu-mobile-backdrop").addEventListener("click", closeMenu);
$("#nav-menu-mobile").addEventListener("keydown", (event) => {
  if (event.which === keyboardCode.ESC) {
    closeMenu();
  }
});
