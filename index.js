let paragraphElement = document.createElement('p');
paragraphElement.innerText = 'Coding is cool and Fun.';
paragraphElement.style.fontSize = '150%';
paragraphElement.style.fontFamily = 'sans-serif';
paragraphElement.style.color = 'darkblue';

let imageElement = document.createElement('img');
imageElement.setAttribute('src','https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg');
imageElement.style.width = '80%';

let bodyElement = document.getElementById('bodyElement');
bodyElement.appendChild(paragraphElement);
bodyElement.appendChild(imageElement);

let heading = document.getElementById('heading');

let button = document.getElementById('button');
button.addEventListener('click',function(){
    let colorArray = ['red','blue','teal','orange','green','purple'];
    let textArray = ['Glad to have you here','You are most welcome','Hoooray!!!','The Lord is Good'];
    bodyElement.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    heading.innerText= textArray[Math.floor (Math.random()*textArray.length)];
})

