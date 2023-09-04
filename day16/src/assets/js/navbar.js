let menuIsOpen = false;

let openDropMenu = () => {
  let dropMenu = document.getElementById("dropMenu-container");

  if (!menuIsOpen) {
    dropMenu.style.display = "block";
    menuIsOpen = true;
  } else {
    dropMenu.style.display = "none";
    menuIsOpen = false;
  }
};
