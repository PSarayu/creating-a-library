var fixedRect, movingRect,s,a;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "orange";
  movingRect.debug = false;
  s = createSprite(500,600,50,30);
  s.shapeColor = "blue";
  a = createSprite(700,300,30,80);
  a.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( touch(s,movingRect)){
    s.shapeColor="orange";
    movingRect.shapeColor="blue";
  }
  else if(touch(a,movingRect)){
    a.shapeColor="orange";
    movingRect.shapeColor="red"
  }
  else if(touch(fixedRect,movingRect)){
    fixedRect.shapeColor="orange";
    movingRect.shapeColor="yellow";
  }
  else{
    s.shapeColor="blue";
    movingRect.shapeColor="orange";
    a.shapeColor="red";
    fixedRect.shapeColor="yellow";
  }
 

  drawSprites();
}

