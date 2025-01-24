/** @type {CanvasRenderingContext2D} */
let context;
let context2;

let canvas;
let canvas2;

function drawMainPage() {
  canvas = document.getElementById("canvas1");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext("2d");
  context.shadowOffsetX = 4;
  context.shadowOffsetY = 2;
  context.shadowBlur = 5;
  context.shadowColor = "rgba(0,0,0,0.5)";

  let width = context.canvas.width;
  let height = context.canvas.height;

  context.clearRect(0,0, width, height)
  context.fillStyle = "#F9F8F3";
  context.beginPath();
  context.arc(width/6-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/3-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/2-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/6*4-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/6*5-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width-width/12, 100, width/10, 0, Math.PI*2);
  context.fill();
  drawPerson((width/36)/5*6, 3, width/36, "#2C463F");
  drawPerson((width/36)/5*6, 2, width/36, "white");
  drawPerson((width/36)/5*6, 1, width/36, "black");
  drawPerson((width/36)/5*6*3, 2.2, width/36, "orange");
  drawPerson((width/36)/5*6*3, 1.2, width/36, "#053447");
  drawPerson((width/36)/5*6*5, 1.4, width/36, "red");
  context.beginPath();
  context.fillStyle =  "white";
  context.arc(width/10*9 + width/35, height/6*4-height/100, width/75, 0, Math.PI*2)
  context.fill();
  drawLines(width/10*9 + width/35, height/6*4-height/100, width/75, "black")
}

/**
 * 
 * @param {Number} x middle of top circle
 * @param {Number} y middle of top circle
 * @param {String} color color of the person
 */
function drawPerson(x, y, size, color) {
  let width = context.canvas.width;
  let height = context.canvas.height;

  y = height - size*2*y

  context.fillStyle = color;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  context.beginPath();
  context.arc(x, y, size, -1.5*Math.PI,0.5*Math.PI);
  context.fill();
  context.beginPath();
  context.arc(x, y+size*2, size/5*6, Math.PI, 0);
  context.lineTo(x+size/5*6, y+size*4);
  context.lineTo(x-size/5*6, y+size*4);
  context.fill();
}

function drawLines(center_x, center_y, radius, color) {
  drawLine(center_x, center_y, radius, 0, color);
  drawLine(center_x, center_y, radius, 15, color);
  drawLine(center_x, center_y, radius, 30, color);
  drawLine(center_x, center_y, radius, 47, color);
  drawLine(center_x, center_y, radius, 68, color);
  drawLine(center_x, center_y, radius, -15, color);
  drawLine(center_x, center_y, radius, -30, color);
  drawLine(center_x, center_y, radius, -47, color);
  drawLine(center_x, center_y, radius, -68, color);
}

function drawLine(center_x, center_y, radius, angle, color) {
  var x = center_x + radius * Math.cos(-(35-angle)*Math.PI/180);
  var y = center_y + radius * Math.sin(-(35-angle)*Math.PI/180);
  var x2 = center_x + radius * Math.cos(-(angle-145)*Math.PI/180);
  var y2 = center_y + radius * Math.sin(-(angle-145)*Math.PI/180);

  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(x, y);
  context.lineTo(x2, y2);
  context.stroke();
}

function drawAbout() {
  // Voeg cirkels toe aan de juiste secties
  createCircle('yellow', '.section.what-is-poutrel', { top: '-50px', left: '10%' });
  createCircle('red', '.section.what-is-poutrel', { bottom: '-30px', right: '10%' });

  createCircle('red', '.section.mission', { top: '-50px', right: '10%' });
  createCircle('yellow', '.section.mission', { bottom: '-30px', left: '10%' });

  createCircle('yellow-large', '.section.join-us', { bottom: '-50px', left: '50%' });
}

function createCircle(className, parentSelector, styles) {
  const circle = document.createElement('div');
  circle.className = `circle ${className}`;
  Object.assign(circle.style, styles);
  console.log(parentSelector)
  document.querySelector(parentSelector).appendChild(circle);
}

let lastShownInfoName;

function mapShowInfo(name) {
  document.getElementById(name).style.display = "grid";
  if (lastShownInfoName != undefined) {
    document.getElementById(lastShownInfoName).style.display = "none";
  }
  lastShownInfoName = name;
}