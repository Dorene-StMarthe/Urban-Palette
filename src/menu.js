export default function menu() {
    const content = document.querySelector('#content');
    content.textContent = ''; // Clear previous content
  
    // Create the menu title
    const menuText = document.createElement('div');
    menuText.classList.add('menuText');
    menuText.textContent = 'Explore the Urban Palette Menu';
    content.appendChild(menuText);
  
    // Create the menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    content.appendChild(menuContainer);
  
    // Add menu sections
    addMenuSection(menuContainer, 'Entrées', [
      {
        name: 'Grilled Snapper with Mango Salsa',
        price: 22,
        image: 'https://via.placeholder.com/80?text=Snapper',
      },
      {
        name: 'Jerk Chicken with Rice & Peas',
        price: 18,
        image: 'https://via.placeholder.com/80?text=Jerk+Chicken',
      },
    ]);
  
    addMenuSection(menuContainer, 'Desserts', [
      {
        name: 'Rum Cake with Vanilla Ice Cream',
        price: 8,
        image: 'https://via.placeholder.com/80?text=Rum+Cake',
      },
      {
        name: 'Coconut Tart',
        price: 7,
        image: 'https://via.placeholder.com/80?text=Coconut+Tart',
      },
    ]);
  
    addMenuSection(menuContainer, 'Beverages', [
      {
        name: 'Sorrel Punch',
        price: 5,
        image: 'https://via.placeholder.com/80?text=Sorrel+Punch',
      },
      {
        name: 'Rum Punch',
        price: 10,
        image: 'https://via.placeholder.com/80?text=Rum+Punch',
      },
    ]);
  }
  
  function addMenuSection(container, sectionTitle, items) {
    const section = document.createElement('div');
    section.classList.add('menu-section');
  
    const title = document.createElement('h2');
    title.textContent = sectionTitle;
    section.appendChild(title);
  
    const itemList = document.createElement('ul');
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('menu-item');
  
      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemImage.classList.add('menu-item-image');
  
      const itemText = document.createElement('div');
      itemText.classList.add('menu-item-text');
      itemText.textContent = `${item.name} - $${item.price}`;
  
      listItem.appendChild(itemImage);
      listItem.appendChild(itemText);
      itemList.appendChild(listItem);
    });
  
    section.appendChild(itemList);
    container.appendChild(section);
  }
  