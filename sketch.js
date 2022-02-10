var Caminito_sprite
var Caminito_Animation
var Piso_trampilla
var trex ,trex_running;
var Nubes, Nubes_animation;
var Cactus1,Cactus2,Cactus3,Cactus4,Cactus5,Cactus6;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    Caminito_Animation = loadImage("ground2.png");
    Nubes_animation = loadImage("cloud.png");
    Cactus1 = loadImage ("obstacle1.png");
    Cactus2 = loadImage ("obstacle2.png");
    Cactus3 = loadImage ("obstacle3.png");
    Cactus4 = loadImage ("obstacle4.png");
    Cactus5 = loadImage ("obstacle5.png");
    Cactus6 = loadImage ("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  Caminito_sprite = createSprite (200,180,400,20);
  Piso_trampilla = createSprite (200,190,400,20);
  Piso_trampilla.visible = false;
  //crear sprite del t-rex.
 trex = createSprite (50,160,20,50);
 trex.addAnimation("correr",trex_running);
 var edges = createEdgeSprites();
 Caminito_sprite.addImage(Caminito_Animation);
 
}

function draw(){
  background("black");

  nubes_magas();

  Obstaculos();

  drawSprites();

  console.log(trex.y);
  if(keyDown("space") && trex.y>=125) {
trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(Piso_trampilla);
  Caminito_sprite.velocityX = -5;
  if(Caminito_sprite.x <0){
Caminito_sprite.x = Caminito_sprite.width/2
  }
 
}
function nubes_magas () {
  if(frameCount %60===0){
Nubes = createSprite (600,100,40,10);
Nubes.addImage("nubes:random",Nubes_animation);
Nubes.y = Math.round(random(50,80));
Nubes.velocityX = -4;
//tiempo de nubes//
Nubes.lifetime = 200;
//Ajustes de profundidad//
Nubes.depth = trex.depth;
trex.depth += 1;

  }
}
function Obstaculos (){//Aqui se hacen los obstaculos no lo olvides ;-;//
if(frameCount %60===0){



  var pinchos = createSprite(400,150);
  pinchos.addImage("pinchosa",Cactus1);
  pinchos.scale = 0.5;
  pinchos.velocityX -6;
  
  var pinchos_2 = createSprite(500,150);
  pinchos_2.addImage("pinchosa",Cactus2);
  pinchos_2.scale = 0.5;
  pinchos_2.velocityX -6;
  
  var pinchos_3 = createSprite(300,150);
  pinchos_3.addImage("pinchosa",Cactus3);
  pinchos_3.scale = 0.5;
  pinchos_3.velocityX -6;

  var pinchos_4 = createSprite(200,150);
  pinchos_4.addImage("pinchosa",Cactus4);
  pinchos_4.scale = 0,5;
  pinchos_4.velocityX -6;

  var pinchos_5 = createSprite(250,150);
  pinchos_5.addImage("pinchosa",Cactus5);
  pinchos_5.scale = 0.5;
  pinchos_5.velocityX -6;

  var pinchos_6 = createSprite(350,150);
  pinchos_6.addImage("pinchos",Cactus6);
  pinchos_6.scale = 0.5;
  pinchos_6.velocityX -6;

  var sorpresa = Math.round(random(1,6));
  
  switch(sorpresa){
    case 1: pinchos;
    break;

    case 2: pinchos_2;
    break;

    case 3: pinchos_3;
    break;

    case 4: pinchos_4;
    break;

    case 5: pinchos_5;
    break;

    case 6: pinchos_6;
    break;

    default:
      break;
      }

  }
}
