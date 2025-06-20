
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + size/2, y - size, x + size*1.5, y + size/2, x, y + size*1.5);
  ctx.bezierCurveTo(x - size*1.5, y + size/2, x - size/2, y - size, x, y);
  ctx.fillStyle = color;
  ctx.fill();
}

setInterval(() => {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height / 2;
  let color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  let size = Math.random() * 20 + 10;
  drawHeart(x, y, size, color);
}, 300);
