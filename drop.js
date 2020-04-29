function showSubMenu(){
  const subMenu = document.getElementsByClassName('menu__sub')[0];
  subMenu.style.display = 'block';
}
function hideSubMenu(){
  const subMenu = document.getElementsByClassName('menu__sub')[0];
  subMenu.style.display = 'none';
  const menuItems = document.getElementsByClassName("menu__main__item");
  for (const menuItem of menuItems) {
    menuItem.classList.remove('menu__main__item--active');
  }

}

let active = null;
function onMenuItemMouseEnter(item){
  if(active){
    active.classList.remove('menu__main__item--active');
  }
  active = item;
  item.classList.add('menu__main__item--active');
  showSubMenu();
}


const menuItems = document.getElementsByClassName("menu__main__item");
for (const menuItem of menuItems) {
  menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem)
}

const menu = document.getElementsByClassName('menu')[0];
menu.onmouseleave = hideSubMenu;
