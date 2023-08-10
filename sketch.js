let cor; 
let x;
let y;

function setup() {
  createCanvas(600, 600);
  background("black");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  x = 300;
  y = 300;
}

function draw() {
  stroke("white")
  fill(cor)
  circle(x, y, 50);
  
  if(x < mouseX){
    x++;
  }
  if(x > mouseX){
    x--;
  }
    if(y < mouseY){
    y++;
  }
  if(y > mouseY){
    y--;
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}