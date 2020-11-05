var player,player_running;

var banana,bananaImage,obstacle,obstacleImage;

var ground;

var obstacleGroup,foodGroup;

var background;

var score;


function preload(){
  
  background = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}



function setup() {
  
  background = createSprite(80,315,20,20);
  background.addImage("jungle",background);
  background.velocityX = -4;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 ground.x = ground.width/2;
 ground.visible = false;
 console.log(ground.x);
  
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
 }


function draw() {
  
background("aqua");
  
  food();
  obstacles();
  
if(foodGroup.isTouching(player)){
  score=score+2;
  player.destroy(banana);
  switch(score){
      case 10 : player.scale = 0.12;
      break;
      case 20 : player.scale = 0.14;
      break;  
      case 30 : player.scale = 0.16;
      break;      
      case 40 : player.scale = 0.18;
      break;
      default: break;   
  }
}
  
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.2;
  }
 
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score,500,50);
 
}

 function food(){
  if (frameCount % 80 === 0){
  banana = createSprite(400,200);
  banana.y = Math.round(random(160,260));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 150;
  foodGroup.add(banana);
}
}

function obstacles(){
  if (frameCount % 300 === 0){
  obstacle = createSprite(400,326);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;  
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle);
}
}