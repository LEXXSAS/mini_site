// Примечание
// menu ===  humburger
// mainMenu === menu with ul li a

let menu = document.querySelector('.menu');
let mainMenu = document.querySelector('.main-menu');
menu.addEventListener('click', menuClose);

function menuClose() {
    if (this.classList.contains('menu-open')) {
        this.classList.remove('menu-open');
        this.classList.add('menu-close');
        mainMenu.classList.add('active');
    } else if (this.classList.contains('menu-close')) {
        this.classList.remove('menu-close');
        this.classList.add('menu-open');
        mainMenu.classList.remove('active');
}
}

function menuOuterClose() {
    if (menu.classList.contains('menu-open')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-close');
        mainMenu.classList.add('active');
    } else if (menu.classList.contains('menu-close')) {
        menu.classList.remove('menu-close');
        menu.classList.add('menu-open');
        mainMenu.classList.remove('active');
}
}


let leftbtn = document.querySelector('.row-view');
let rigthbtn = document.querySelector('.tile-view');
let newList = document.querySelector('.news-list');
let box = document.querySelector('.box');
leftbtn.addEventListener('click', checked);
rigthbtn.addEventListener('click', checked);
function checked() {
    if (leftbtn.classList.contains('view-checked')) {
        leftbtn.classList.remove('view-checked');
        rigthbtn.classList.add('view-checked');
        box.classList.add('list-tiles-view');
        newList.classList.add('list-tiles-view');

        
    } else if (rigthbtn.classList.contains('view-checked'))  {
        rigthbtn.classList.remove('view-checked');
        leftbtn.classList.add('view-checked');
        box.classList.remove('list-tiles-view');
        newList.classList.remove('list-tiles-view');

    }
}

// menu ===  humburger
// mainMenu === menu (ul li a)

// const toggleMenu = () => {
//   mainMenu.classList.toggle('active');
// }

menu.addEventListener('click', e => {
  e.stopPropagation();
//   toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == mainMenu || mainMenu.contains(target);
  let its_hamburger = target == menu;
  let menu_is_active = mainMenu.classList.contains('active');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    menuOuterClose()
  }
})
