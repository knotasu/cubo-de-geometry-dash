const cube = document.getElementById('player');
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
const speed = 20; 

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') posY -= speed;
  if (event.key === 'ArrowDown') posY += speed;
  if (event.key === 'ArrowLeft') posX -= speed;
  if (event.key === 'ArrowRight') posX += speed;

 
  cube.style.left = posX + 'px';
  cube.style.top = posY + 'px';
});
