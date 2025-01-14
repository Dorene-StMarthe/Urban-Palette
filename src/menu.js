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
        image: 'https://media.istockphoto.com/id/1290616097/photo/grilled-sea-bream-or-dorado-raw-fish-on-black-plate-with-braised-leeks-over-textured-black.jpg?s=612x612&w=0&k=20&c=goZF2-wdQaZPeLPJ8pUNri8EkT1SjEnLEO0OGz5KOtI=',
      },
      {
        name: 'Jerk Chicken with Rice & Peas',
        price: 18,
        image: 'https://media.istockphoto.com/id/538643574/photo/spicy-grilled-jerk-chicken.jpg?s=612x612&w=0&k=20&c=A5bzNuietYkn1suqd83hm4YVNRdl5xLWYNmQ4sv_5x0=',
      },
    ]);
  
    addMenuSection(menuContainer, 'Desserts', [
      {
        name: 'Rum Cake with Vanilla Ice Cream',
        price: 8,
        image: 'https://media.istockphoto.com/id/1445837651/photo/cake-coffee-on-a-black-plate-on-the-christmas-table-for-the-new-year-close-up.jpg?s=612x612&w=0&k=20&c=EWz8ajpg_JY8pJNxllcRwGlRA6CwK-dLqWhebuA42Ps=',
      },
      {
        name: 'Coconut Tart',
        price: 7,
        image: 'https://media.istockphoto.com/id/511473281/photo/avocado-and-cacao-mousse.jpg?s=612x612&w=0&k=20&c=rtOExxt9-342NgI_CR5JOgJZYvkPJmNEpc0OYqNnAsY=',
      },
    ]);
  
    addMenuSection(menuContainer, 'Beverages', [
      {
        name: 'Sorrel Punch',
        price: 5,
        image: 'https://media.istockphoto.com/id/1026457858/photo/christmas-punch-on-a-winter-table.jpg?s=612x612&w=0&k=20&c=ag-tzJ2zhguVGVNIlcdk7u3oGJClON1YZKs9CwlRDcU=',
      },
      {
        name: 'Rum Punch',
        price: 10,
        image: 'https://media.istockphoto.com/id/1273315646/photo/a-glass-filled-with-mulled-wine-with-orange-slices.jpg?s=612x612&w=0&k=20&c=gH_tvQkuD1vAfF_BkUbljcWOj3An_5uhAsdWpuDzyCk=',
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
  