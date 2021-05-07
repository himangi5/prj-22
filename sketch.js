var starImg,bgImg,fairyAni;
var star, starBody,fairy,sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyAni = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,450);
	fairy.addAnimation("bruh",fairyAni);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	sound.play();

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 


  //write code to stop star in the hand of fairy
  if(star.isTouching(fairy)){
	Matter.Body.setStatic(starBody,true);
  }
  if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x-3;
}
  if(keyDown(RIGHT_ARROW)){
	  fairy.x = fairy.x+3;
  }
  fairy.debug = true;
  fairy.setCollider("rectangle",0,0,1050,250);

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
