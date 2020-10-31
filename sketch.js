
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var wall;

function preload(){
    // background(0);
}

function setup() {
	var canvas = createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	
	wall = new wall(100,160,200, PI/2);

	ball1 = new Balls(50,200,5,5);
	ball2 = new Balls(100,200,5,5);
	ball3 = new Balls(150,200,5,5);
	ball4 = new Balls(200,200,5,5);

	rope1 = new rope(ball1.body,wall.body,ball1.Diamete*2,0);
	rope2 = new rope (ball2.body,wall.body,ball2.Diameter*2,0);
	rope3 = new rope(ball3.body,wall.body,ball3.Diameter*2,0);
	rope4 = new rope(ball4.body,wall.body,ball4.Diameter*2,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  Chain.display();

  
  drawSprites();
 
}



