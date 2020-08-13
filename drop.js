const HOST = 'server.com/';

function populateCategories(category){
  const activeMenuItemName = activeMenuItem.children[0].innerHTML;
  api.get(HOST + 'categories',{category,menuItem: activeMenuItemName},function(categories){
    let newCategories = '';
    for(const category of categories){
      const categoryElement = `
      <li class='menu__sub__categories__item'>
      <a href='#' class='menu__sub__categories__item__link'>${category}</a>
      </li>
      `;
      newCategories += categoryElement;
    }
    const categoriesElement = document.getElementsByClassName(`menu__sub__categories__items--${category}`)[0];
    categoriesElement.innerHTML = newCategories;
  });
}
function showSubMenu(){
  const subMenu = document.getElementsByClassName('menu__sub')[0];
  subMenu.style.display = 'block';

  populateCategories('top');
  populateCategories('additional');
}
function hideSubMenu(){
  const subMenu = document.getElementsByClassName('menu__sub')[0];
  subMenu.style.display = 'none';
  const menuItems = document.getElementsByClassName("menu__main__item");
  for (const menuItem of menuItems) {
    menuItem.classList.remove('menu__main__item--active');
  }

}

let activeMenuItem = null;
function onMenuItemMouseEnter(item){
  if(activeMenuItem){
    activeMenuItem.classList.remove('menu__main__item--active');
  }
  activeMenuItem = item;
  item.classList.add('menu__main__item--active');
  showSubMenu();
}


const menuItems = document.getElementsByClassName("menu__main__item");
for (const menuItem of menuItems) {
  menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem)
}

const menu = document.getElementsByClassName('menu')[0];
menu.onmouseleave = hideSubMenu;

//server
function getCategories(data) {
  if (data.category == 'top') {
    if (data.menuItem == 'Motors') {
      return [
        'Car',
        'Motorcycle',
        'Plane',
        'Trucks',
        'Wheels'
      ];
    }
    if (data.menuItem == 'Fashion') {
      return [
        'Women\'s tops',
        'Men\'s tops',
        'Jeans',
        'Hats'
      ];
    }
    if (data.menuItem == 'Electronics') {
      return [
        'Cell Phones & Accessories',
        'Smart Watches',
        'Video Games & Accessories',
        'Computers & Tablets',
        'Digital Cameras & Photos',
        'Camera Drones',
        'Deals'
      ];
    }
    if (data.menuItem == 'Health+Beauty') {
      return [
        'Makeup',
        'Healthcare',
        'Fragrances',
        'Nailcare, Manicure & Pedicure',
        'Hair Care & Styling',
        'Deals'
      ];
    }
    if (data.menuItem == 'Collectibles') {
      return [
        'Action Figures',
        'Coins & Paper Money',
        'Stamps',
        'Postcards',
        'Autographed Memorabilia',
        'Sports Memorabilia',
        'Collectibles'
      ];
    }
    if (data.menuItem == 'Sports') {
      return [
        'Cycling',
        'Outdoor Sports',
        'Hunting',
        'Fishing',
        'Fitness, Running & Yoga',
        'Deals'
      ];
    }
    return [
      'Server apple',
      'Server banana',
      'Server pear',
      'Server orange'
    ];
  }
  if (data.category == 'additional') {
    if (data.menuItem == 'Motors') {
      return [
        'Tires',
        'Windshields',
        'Ski racks',
        'Doors',
        'Windows'
      ];
    }
    if (data.menuItem == 'Fashion') {
      return [
        'On sale',
        'Red stuff',
        'Gucci',
        'New Arrivals'
      ];
    }
    if (data.menuItem == 'Electronics') {
      return [
        'iPhone',
        'Samsung',
        'Portable Audio & Headphones',
        'TV, Video & Home Audio',
        'Vehicle Electronics & GPS',
        'Smart Home'
      ];
    }
    
    if (data.menuItem == 'Health+Beauty') {
      return [
        'Skin Care',
        'Vitamins & Dietary Supplements',
        'Shaving & Hair Removal',
        'Vision Care',
        'Bath & Body',
        'Oral Care'
      ];
    }
    if (data.menuItem == 'Collectibles') {
      return [
        'Arts',
        'Antiques',
        'Pens & Writing Instruments',
        'TV, Movie & Character Toys',
        'Autographed Memorabilia',
        'Toy Vehicles',
        'Comics'
      ];
    }
    if (data.menuItem == 'Sports') {
      return [
        'Tennis',
        'Swimming',
        'Water Sports',
        'Winter Sports',
        'Team Sports',
        'Fitness Technology'
      ];
    }
    return [
      'Server square',
      'Server circle',
      'Server oval',
      'Server diamond'
    ];
  }
  return [];
}
const endpoints = {
  "/categories":{
    "get": getCategories
  }
}

function getFunction(url,data,callback){
  const domain = url.substring(0, url.indexOf('/'));
  const endpoint = url.substring(url.indexOf('/'), url.length);

  callback(endpoints[endpoint]["get"](data));
}

const api = {
  get: getFunction
};
