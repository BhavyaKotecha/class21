var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(300, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(700,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(300, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(400, 100, 50, 50);
  gameObject2.shapeColor = "green";

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 if( isTouching(movingRect,gameObject1)){

  movingRect.shapeColor = "white";
  gameObject1.shapeColor = "white";

 }
 else{
  movingRect.shapeColor = "green";
 gameObject1.shapeColor = "green";

 }
bounceOff(movingRect,fixedRect);
  drawSprites();
}
