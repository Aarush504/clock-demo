var hr,sc,mn;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr= hour();
  mn= minute();
  sc= second();
}

function draw() {
  background(255,255,255);  
  scAngle= map(sc, 0,60,0,360);
  angleMode(DEGREES);
  drawSprites();
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();
 
  
}