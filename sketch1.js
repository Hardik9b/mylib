var fixedRect,movingRect;
var gameobject1 , gameobject1

function setup() {
  createCanvas(800,600);
  
  fixedRect = createSprite(400,200,50,80)
  movingRect = createSprite(400,400,80,30);

  fixedRect.shapeColor ="blue";
  movingRect.shapeColor = "yellow";

  fixedRect.debug = true;
  movingRect.debug = true;

  movingRect.velocityY = -2
  fixedRect.velocityY = +2
  gameobject1 = createSprite(500,100,30,30)
  gameobject1.shapeColor = "red"
  gameobject1.velocityX = -2
  gameobject2 = createSprite(100,100,30,30)
  gameobject2.shapeColor = "blue"
  gameobject2.velocityX = +2
}
function draw() {
  background("black"); 

  

  console.log(movingRect.x - fixedRect.x);


  Bounceoff(gameobject1,gameobject2);  
   
  
  drawSprites();
}

















