
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(150, 600, 100);
	bobObject2 = new Bob(250, 600, 100);
	bobObject3 = new Bob(350, 600, 100);
	bobObject4 = new Bob(450, 600, 100);
	bobObject5 = new Bob(550, 600, 100);
	roofObject = new Roof(350, 100, 500, 50);
	rope1 = new Rope(bobObject1.body, roofObject.body, 0, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  
  drawSprites();
 
}



