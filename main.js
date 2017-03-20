const canvas = document.querySelector("#canvas");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

window.addEventListener('resize', resize);
function resize(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //return ('rgba(' + r + ', ' + g + ', ' + b + ', 1');
  return (`rgba(${r}, ${g}, ${b}, 1`); // es
}

let ball = {
  x: Math.floor(Math.random() * width),
  y: Math.floor(Math.random() * height)
}

let mouse = {
  x: ball.x,
  y: ball.y,
}

const color = randomColor();

function drawSphere(){
  context.beginPath();
  ball.x += (mouse.x - ball.x)*0.1;
  ball.y += (mouse.y - ball.y)*0.1;
  context.arc(ball.x, ball.y, 40, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

let interval = 1000;

function render(){
    if (Date.now() - time >= interval){
      time = Date.now();
    if (interval >= 100)
      interval -= 10;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawSphere();
  requestAnimationFrame(render);
};

function randomPos(){
  mouse.x = Math.floor(Math.random() * width);
  mouse.y = Math.floor(Math.random() * height);
}
canvas.addEventListener('mousemove', function(event){
     mouse.x = event.clientX;
     mouse.y = event.clientY;
});

let time = Date.now();

//loop();
render();
