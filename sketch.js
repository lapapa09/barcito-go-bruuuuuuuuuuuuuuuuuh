var barco;
var oceano; 




function preload(){
barcoImg = loadImage("ship-3.png", "ship-4.png");
oceanoImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
 oceano = createSprite(200,200);
 oceano.addImage(oceanoImg);
 barco = createSprite(200,200,20,20);
 barco.addImage(barcoImg)
barco.scale = 0.5



}

function draw() {
  background("lightblue");
 drawSprites()



}