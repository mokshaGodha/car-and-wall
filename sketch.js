var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  car.debug;
  wall=createSprite(1500,200,60,height/2)
  createSprite(400, 200, 50, 50);
}

function draw() {
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
 if(deformation>180){
   car.shapeColor="green";
 } 
if(deformation<180 && deformation>100){
  car.shapeColor="white";
}
if(deformation<100)
{car.shapeColor="red";
}
}
  background(0);  
  drawSprites();
}

