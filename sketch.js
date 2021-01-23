var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world; 
	var star_options = {
	  isStatic:true
	}
	engine = Engine.create();
	world = engine.world; 
	var fairy_options = {
	  isStatic:true
	}
    	
	fairyVoice.play();
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

    fairy = Bodies.rectangle(400, 395, 100, 20, ground_options);
  World.add(world, fairy);

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  rectMode(CENTER);
  rect(starBody.position.x, starBody.position.y, 800, 20);
  

  drawSprites();
}

function keyPressed() {
	if (keyDown("LEFT_ARROW")) {
      fairy.x = 10;
	}

    if (keyDown("RIGHT_ARROW")) {
		fairy.y = -5;
	}
   
    if (keyDown("SPACE")) {
		star.velocityY = 5;
	}

   if (star.isTouching(fairy)){
	   star.collide(fairy);
   }

}
