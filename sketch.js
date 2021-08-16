var cat, cat1, cat2, cat3, cat4
var  mouse, rat1, rat3, rat4,rat2
var background_img
function preload() {
    //load the images here
background_img = loadImage("images/garden.png")
cat1 = loadAnimation("images/cat1.png")
cat2 = loadAnimation("images/cat2.png", "images/cat3.png")

cat4 = loadAnimation("images/cat4.png")
rat1 = loadAnimation("images/mouse1.png")
rat3 = loadAnimation("images/mouse4.png")
rat2 = loadAnimation("images/mouse2.png", "images/mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", rat1);
    mouse.scale = 0.15;
    
    cat = createSprite(900, 600);
    cat.addAnimation("catSleeping", cat1);
    cat.scale = 0.25;

    makeCatWalk();
}

function draw() {

    background(background_img);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat2);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", rat2);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();
}


function makeCatWalk(){

    mouse.addAnimation("mouseTeasing", rat3)
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25; 

    cat.velocityX = -5; 
    cat.addAnimation("catRunning", cat4);
    cat.changeAnimation("catRunning");
}

