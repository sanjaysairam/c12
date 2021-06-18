var ship,shipAnimation ;
var seaImage;

function preload() {
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

  seaImage = loadImage("sea.png");
 
}

function setup() {
  createCanvas(400,400);
//background("blue")
  //create a ship sprite
  ship = createSprite(100,250,10,50);
  ship.addAnimation("ship",shipAnimation);
  ship.scale = 0.3;
 
  //create a sea sprite
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX=-3;
//  sea.scale=3.8;
  
 
  
}

function draw() {
 background("blue");
 console.log(ship.x);
//sea.velocityX=-3;



 

  if (sea.x < 0) {
   sea.x = sea.width/8;
  
  }
  sea.depth=ship.depth;
  ship.depth=ship.depth+1;

  //ship.collide(sea);
  drawSprites();
}
