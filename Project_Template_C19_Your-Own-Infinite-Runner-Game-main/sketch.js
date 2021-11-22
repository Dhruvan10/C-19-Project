var buildingImg,buildingImg;
var doorImg,doorImg;
var climberImg,climberImg;
var ghost,ghostImg;
var invisibleBlocksGroup,invisibleBlocksGroup;
var gameState="play"

function preload(){
buildingImg=loadImage("building.png");
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost.png");
}

function setup() {
createCanvas(600,600)
building=createSprite(300,300)
tower.addImage("tower",towerImg)
tower.velocityY=2

doorGroup=new Group()
climbersGroup=new Group()
invisibleBlocksGroup=new Group()

ghost=createSprite(250,300)
ghost.addImage("ghost",ghostImg)
ghost.scale=0.4
 
}

function draw() {
background(200)

if(tower.y>400){
    tower.y=300
}

if(keyDown("space")){
    ghost.velocityY=-3
}
ghost.velocityY=ghost.velocityY+0.7

if(keyDown("LEFT_ARROW")){
    ghost.velocityX=-3
}

if(keyDown("RIGHT_ARROW")){
    ghost.velocityX=3
}

if(ghost.isTouching(climbersGroup)){
    ghost.velocityY=0
}

if (ghost.isTouching(invisibleBlocksGroup)){
    ghost.destroy()
    textSize(25)
    text("Game Over",300,300)
}

spawnDoors()
drawSprites()
 
}

function spawnDoors()

if (frameCount%230===0){
door=createSprite(200,-55)
door.addImage(doorImg)
door.velocityY=1
door.x=Math.round(random(100,400))
door.lifeTime=600
doorsGroup.add(door)
ghost.depth=door.depth
ghost.depth=ghost.depth+1

climber=createSprite(door.x,door,y+60)
climber.addImage(climberImg)
climber.velocityY=1
climber.lifeTime=600
climbersGroup.add(climber)

invisibleBlock=createSprite(door.x,door,y+60,climber.width,5)
invisibleBlock.velocityY=1
invisibleBlock.lifeTime=600
invisibleBlock.debug=true
invisibleBlocksGroup.add(invisibleBlock)


}







