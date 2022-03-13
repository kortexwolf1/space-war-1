var score=0 
var ship1,ship2
var meteor,gems,hearts,bonus
function preload() {
  ship1=loadImage("./sprites/spaceship001.png")
  //ship2=loadImage("sprites/spaceship2.png")
  //meteor=loadImage("sprites/meteor.png")
}

function setup() {
  createCanvas(1000,500);
  shipSprite=createSprite(500,450,50,50)
  shipSprite.addImage(ship1)
  //ship2=createSprite(500,50,50,50)
  //ship2.addImage(ship2)
 // meteor=createSprite(500,300,50,50)
 // meteor.addImage(meteor)
}

function draw() {
  background("blue");
  textSize(20);
  fill("white");
  text("Score: " + score, 50, 50);

  drawSprites()
}