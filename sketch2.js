var Caminito_sprite
var Caminito_Animation

var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  Caminito_sprite = createSprite (200,180,400,20);
  //crear sprite del t-rex.
 trex = createSprite (50,160,20,50);
 trex.addAnimation("correr",trex_running);
 var edges = createEdgeSprites();
 
}

function draw(){
  background("blue")
  drawSprites();
  if(keyDown("space")){
trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(Caminito_sprite);
  Caminito_sprite.velocityX = -5;
  if(Caminito_sprite.x <0){
Caminito_sprite.x = Caminito_sprite.width/2
  }
}
