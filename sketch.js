var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftBox, leftBoxBody
var rightBox, rightBoxBody
var baseBox, baseBoxBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftBox = createSprite(300,610,20,100);
	leftBox.shapeColor = "red";

	leftBoxBody = Bodies.rectangle(320,610,20,100,{isStatic:true});
	World.add(world,leftBoxBody);

	baseBox = createSprite(400,650,200,20);
	baseBox.shapeColor = "red";

	baseBoxBody = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,baseBoxBody);

	rightBox = createSprite(500,610,20,100);
	rightBox.shapeColor = "red";

	rightBoxBody = Bodies.rectangle(480,610,20,100,{isStatic:true});
	World.add(world,rightBoxBody);


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  leftBox.x = leftBoxBody.position.x
  leftBox.y = leftBoxBody.position.y
  baseBox.x = baseBoxBody.position.x
  baseBox.y = baseBoxBody.position.y
  rightBox.x = rightBoxBody.position.x
  rightBox.y = rightBoxBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
    
  }
}



