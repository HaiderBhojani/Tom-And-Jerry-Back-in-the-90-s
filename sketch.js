var garden;
var cat,catimg1,catimg3,catimg
var mouse,mouseimg,mouseimg1,mouseimg2 
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    catimg=loadImage("images/cat1.png")
    catimg1=loadAnimation("images/cat2.png","images/cat3.png")
    catimg3=loadImage("images/cat4.png")
    mouseimg=loadImage("images/mouse1.png")
    mouseimg1=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg2=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites h
    mouse = createSprite(200,700)
    mouse.addImage(mouseimg)
    mouse.scale = 0.1

    cat = createSprite(800,700)
cat.addImage(catimg)
    cat.scale = 0.15

   

}

function draw() {

  

    background(garden);

fill("white")

textSize(23)
text("press LEFT ARROW key then press RIGHT ARROW key to see the animation",200,400)

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("tomLastImage",catimg3);
        cat.changeAnimation("tomLastImage")
        mouse.addAnimation("o",mouseimg2)
        mouse.changeAnimation("o")
        mouse.x = mouse.x - 30
       
        
        
    }
   //console.log(cat.x)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===RIGHT_ARROW){
      mouse.addAnimation("teasing",mouseimg1)
      mouse.changeAnimation("teasing")
      mouse.frameDelay=7
    
  }

if (keyCode===LEFT_ARROW){
    cat.addAnimation("walking",catimg1)
    cat.changeAnimation("walking")
    cat.velocityX=-3
    cat.frameDelay=7
}
}
