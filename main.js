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
  x: 0,
  y: 0
}

let mouse = {
  x: width / 2,
  y: height / 2,
}

const color = randomColor();

function drawSphere(){
  context.beginPath();
  ball.x += (mouse.x - ball.x)*0.1;
  ball.y += (mouse.y - ball.y)*0.1;
  context.arc(ball.x, ball.y, 40, 0, 2 * Math.PI, false);
  context.fillStyle = randomColor();
  context.fill();
  context.closePath();
}

let time = Date.now();
let fps = 0;

function render(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (Date.now() - time >= 1000){
    console.log(fps > 60 ? "60" : fps);
    time = Date.now();
    fps = 0;
  }
    drawSphere();
    fps++;
  requestAnimationFrame(render);
};

function randomPos(){
  mouse.x = Math.floor(Math.random() * width);
  mouse.y = Math.floor(Math.random() * height);
}

setInterval(randomPos, 200);

// canvas.addEventListener('mousemove', function(event){
//      mouse.x = event.clientX;
//      mouse.y = event.clientY;
// });

render();
