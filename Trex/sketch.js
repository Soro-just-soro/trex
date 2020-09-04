var start=0;
var end=1;
var gamestate=start;
var score = 0;
var cloud,ground,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,rexy,reset,go,trex_hit, GFS, prickly_boi,select
var rex, the_ground, Reset , GO , THE_PRICKLY_BOIS, GIANT_SHEEP_THAT_FLY
function preload(){
rexy=loadAnimation("trex1.png","trex3.png","trex4.png")
trex_hit=loadAnimation("trex_collided.png")
cloud=loadImage("cloud.png")
ground=loadImage("ground2.png")
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  reset=loadImage("restart.png")
  go=loadImage("gameOver.png")
}
function setup(){
rex = createSprite(40, 320);
rex.addAnimation("trex",rexy);
rex.scale=(0.50);
the_ground = createSprite(200, 350);
the_ground.addImage(ground);
rex.debug=true;
rex.setCollider("rectangle",0,0,10,50);
the_ground.velocityX=-10;
 Reset = createSprite(200, 200);
 GO = createSprite(200, 80);
Reset.addImage(reset);
GO.addImage(go);
Reset.visible=false;
GO.visible=false;
 THE_PRICKLY_BOIS = createGroup();
 GIANT_SHEEP_THAT_FLY = createGroup();}
function draw() {
  background("white");
  drawSprites();
  text("score "+score, 195, 10);
  
  //control
  if (gamestate==start) {
    the_ground.velocityX=-(10+score/100);
  score=score+Math.round(getFrameRate()/60);
  if (keyDown("up")&&rex.y>=330) {
    rex.velocityY=-10;
  }
  if(the_ground.x<0){the_ground.x=the_ground.width/2}
  //physics
  rex.velocityY=rex.velocityY+0.5;
rex.collide(the_ground);
Giant_Flying_Sheep();
  A_very_prickly_boi();
  if (rex.isTouching(THE_PRICKLY_BOIS)) {
  rex.changeAnimation("trex_collided",trex_hit);
    gamestate=end;
  }
  }else if(gamestate==end){THE_PRICKLY_BOIS.setVelocityXEach(0);
  GIANT_SHEEP_THAT_FLY.setVelocityXEach(0);
  the_ground.velocityX=(0);
  rex.velocityY=(0);
    GIANT_SHEEP_THAT_FLY.setLifetimeEach(-1);
     THE_PRICKLY_BOIS.setLifetimeEach(-1);
  GO.visible=true;
  Reset.visible=true;
  if (mousePressedOver(Reset)) {
    gamestate=start;
    score=0;
    GO.visible=false;
  Reset.visible=false;
  rex.changeAnimation("trex",rexy);
  THE_PRICKLY_BOIS.destroyEach();
  GIANT_SHEEP_THAT_FLY.destroyEach();
  }
  }
 // if (score%100==0&&score>0) 
 // }
  
}
function Giant_Flying_Sheep() {
 if (frameCount%25==0) {
    
    GFS = createSprite(500, Math.round(random(50,200)));
  GFS.addImage(cloud);
  GFS.velocityX=-(2.5+score/100);
 GFS.lifetime=(225);
 GIANT_SHEEP_THAT_FLY.add(GFS);
 }
}
function A_very_prickly_boi() {
  if (frameCount%100==0) {
     prickly_boi = createSprite(500, 335);
    prickly_boi.scale=(0.5);
     select=Math.round(random(1,6));
  switch(select){
    case 1:prickly_boi.addImage(obstacle1);
      break;
    case 2:prickly_boi.addImage(obstacle2);
      break;
    case 3:prickly_boi.addImage(obstacle3);
      break; 
    case 4:prickly_boi.addImage(obstacle4);
      break;  
    case 5:prickly_boi.addImage(obstacle5);
      break;  
    case 6:prickly_boi.addImage(obstacle6);
      break;  
  default:break;
  }
      
      
      
      
      prickly_boi.velocityX=-(10+score/100);
    prickly_boi.depth=rex.depth;
  rex.depth=rex.depth+1;
  prickly_boi.lifetime=(125);
    THE_PRICKLY_BOIS.add(prickly_boi);
  }
}