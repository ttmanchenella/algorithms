var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2
  && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2
  && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height)/2
  && fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height)/2) {
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  } else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}