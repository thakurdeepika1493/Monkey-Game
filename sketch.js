var PLAY=1;
var END=0
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
 
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") ;
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
 
  
  monkey = createSprite(50,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
 ground=createSprite(200,340,400,10);
  
foodGroup=createGroup();
  obstacleGroup=createGroup();
  
 
  

  
}


function draw() {
  background(220)
  if(gameState==PLAY){
  if(keyDown("space")&&monkey.y>100){
    monkey.velocityY=-12;
     }
  
  monkey.velocityY=monkey.velocityY+0.8;
  ground.velocityX=-8;
 
 banana();
  obstace();
    if(obstacleGroup.isTouching(monkey)){
      gameState=END;
    }
  
    
  }
  monkey.collide(ground);
  if(gameState==END){
    
 
   foodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setLifetimeEach(-1)
    obstacleGroup.setLifetimeEach(-1)
     
   
  }
   
  var survivalTime=0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/getFrameRate())
  text("survival Time:"+survivalTime,100,50);
  
  ground.x=ground.width/2;

  drawSprites()
}
function banana(){
  if(frameCount%80===0){
    var banana=createSprite(400,100,20,20);
     banana.y=Math.round(random(74,239));
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.addImage("bananaImage",bananaImage);
     banana.lifetime=130;
    foodGroup.add(banana);
  }
}
function obstace(){
  if(frameCount%160===0){
    var obstacle=createSprite(400,320,20,20)
    obstacle.velocityX=-3;
    obstacle.addImage("obstaceImage",obstaceImage)
    obstacle.scale=0.1;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle)
  
}
}





