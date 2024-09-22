export const landing = "This is the Urban Palette Restaurant App";

const content = document.querySelector('#content');

const mainText = document.createElement('div');
mainText.classList.add("mainText");
mainText.textContent = "Flavors That Color Your World";

content.appendChild(mainText);

const name = document.createElement('div');
name.classList.add("name");
name.textContent = "Urban Palette"

content.appendChild(name);


const subText = document.createElement('div');
subText.classList.add("subText");
subText.textContent = "Step into our modern, chic space and let us take you on a journey of culinary creativity, where every meal is a new brushstroke on your palate. From our signature dishes to seasonal specialties, Urban Palette is your destination for delicious innovation.";

content.appendChild(subText);





