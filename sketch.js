var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var line1,line2,line3;
var speed,weight;
var deformation;




function setup() {

car1=createSprite(50,70,10,10);
car1.shapeColor='red';

wall1=createSprite(1190,70,20,140);
wall1.shapeColor='grey';

line1=createSprite(600,145,1600,10/2);
line1.shapeColor='black';

car2=createSprite(50,220,10,10);
car2.shapeColor='red';

wall2=createSprite(1190,220,20,140);
wall2.shapeColor='grey';

line2=createSprite(600,295,1600,5);
line2.shapeColor='black';


car3=createSprite(50,370,10,10);
car3.shapeColor='red';

wall3=createSprite(1190,370,20,140);
wall3.shapeColor='grey';

line3=createSprite(600,445,1600,5);
line3.shapeColor='black';

car4=createSprite(50,525,10,10);
car4.shapeColor='red';

wall4=createSprite(1190,525,20,140);
wall4.shapeColor='grey';


speed=Math.round(random(7,10));
weight=Math.round(random(10,10));


deformation=2*(weight)*(speed)*(speed)/10;


  createCanvas(1200,600);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background('pink'); 






  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  


  if(car1.x-wall1.x < car1.width/2+wall1.width/2 && wall1.x-car1.x < car1.width/2+wall1.width/2){

    car1.velocityX=0;

    
    if(deformation<100){
      car1.shapeColor='green';
    }

    if(deformation>100 &&deformation>180){
      car1.shapeColor='yellow';
    }

    if(deformation>180){
      car1.shapeColor='orange';
    }

  }else{
    car1.shapeColor='red';
  }

  
  if(car2.x-wall2.x < car2.width/2+wall2.width/2 && wall2.x-car2.x < car2.width/2+wall2.width/2){
    car2.velocityX=0;

    if(deformation<100){
      car2.shapeColor='green';
    }

    if(deformation>100 && deformation>180){
      car2.shapeColor='yellow';
    }

    if(deformation>180){
      car2.shapeColor='orange';
    }

  }else{
    car2.shapeColor='red';
    car2.velocityX=speed;
  }

  
  if(car3.x-wall3.x < car3.width/2+wall3.width/2 && wall3.x-car3.x < car3.width/2+wall3.width/2){
    car3.velocityX=0;

    if(deformation<100){
      car3.shapeColor='green';
    }

    if(deformation>100 &&deformation>180){
      car3.shapeColor='yellow';
    }

    if(deformation>180){
      car3.shapeColor='orange';
    }

  }else{
    car3.shapeColor='red';
  }

  
  if(car4.x-wall4.x < car4.width/2+wall4.width/2 && wall4.x-car4.x < car4.width/2+wall4.width/2){
    car4.velocityX=0;

    if(deformation<100){
      car4.shapeColor='green';
    }

    if(deformation>100 &&deformation>180){
      car4.shapeColor='yellow';
    }

    if(deformation>180){
      car4.shapeColor='orange';
    }

  }else{
    car4.shapeColor='red';
  }
  car1.depth=wall1.depth;
  car1.depth=car1.depth+1;

  car2.depth=wall2.depth;
  car2.depth=car2.depth+1;

  car3.depth=wall3.depth;
  car3.depth=car3.depth+1;

  car4.depth=wall4.depth;
  car4.depth=car4.depth+1;



  drawSprites();
}

