var bg,bgImg;
var player,playerImg;
var npc1,npc1Img;
var npc2,npc2Img;
var chitauriGroup;
var heart1,heartImg;
var heart2,heart3;

function preload() {
  bgImg=loadImage("assets/bg.jpg");

  playerImg=loadImage("assets/ironman.png");

  npc1Img=loadImage("assets/npc1.png");

  npc2Img=loadImage("assets/npc2.png");

  heartImg=loadImage("assets/heart.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2 , displayHeight/2 , 100, 100);
  bg.addImage(bgImg);
  bg.scale=1;

  player=createSprite(displayWidth-1000 , displayHeight-500 , 40, 40);
  player.addImage(playerImg);
  player.scale=0.35;

  chitauriGroup=new Group();

  npc2=createSprite(displayWidth-100,displayHeight-500,50,50);
    npc2.addImage(npc2Img);
    npc2.scale=0.35;
    npc2.velocityX=-3;

  heart1=createSprite(windowWidth-200 , windowHeight-500,50,50);
  heart1.addImage(heartImg);
  heart1.scale=0.25;
  
  heart2=createSprite(windowWidth-270 , windowHeight-500,50,50);
  heart2.addImage(heartImg);
  heart2.scale=0.25;

  heart3=createSprite(windowWidth-340 , windowHeight-500,50,50);
  heart3.addImage(heartImg);
  heart3.scale=0.25;
   
}

function draw() {
  background("white"); 
  
  if(keyDown("UP_ARROW")){
     player.y=player.y-20;
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+20;
 }
  if(keyDown("RIGHT_ARROW")){
  player.x=player.x+20;
 }
  if(keyDown("LEFT_ARROW")){
  player.x=player.x-20;
 }

 if(chitauriGroup.isTouching(player))
 {
  for(var i=0;i<chitauriGroup.length;i++)
  {
     if(chitauriGroup[i].isTouching(player))
     { 
       chitauriGroup[i].destroy()
       }
 }
}
  
  drawSprites();

  enemy();
}

function enemy(){
  if(frameCount%90===0) {
    npc1=createSprite(random(800,1200),random(150,550),50,50);
    npc1.addImage(npc1Img);
    npc1.scale=0.35;
    npc1.velocityX=-3;

   
    chitauriGroup.add(npc1);
  }

}