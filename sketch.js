var Runner;
var path;
var coin;
var energyDrink;
var bomb;

function preload(){
  //pre-load images

path = createSprite(200,200);
path.addImage(path.png);
path.velocityY = 4;
path.scale = 1.2;

Runner = createSprite(100,50);
coin = createSprite(50,30);
energy = createSprite(100,50);
bomb= createSprite(100,70);

}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);
if(path.y > 400){
 path.y = height/2;
}
}
