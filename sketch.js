
// var chain;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var chain;
var roof;
// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400, 50, 300, 60);
	ball1 = new Paper(400, 300, 50);
	ball2 = new Paper(350, 300, 50);
	ball3 = new Paper(450, 300, 50);
	ball4 = new Paper(300, 300, 50);
	ball5 = new Paper(500, 300, 50);
	// rope1 =new Rope (ball1.body, roof.body);
	var options=
   {
       bodyA : ball1.body,
       bodyB : roof.body,
       stiffness : 0.4,
       length : 10
   }
    chain= Constraint.create(options);
    World.add(world, chain);
	Engine.run(engine);
  
}


function draw() {
//   rectMode(CENTER);
  background("grey");
  roof.display();
  
//   rope1.dipslay();
  drawSprites();
 strokeWeight(3);
 line(ball1.body.position.x, ball1.body.position.y, roof.body.position.x, roof.body.position.y);
 line(ball1.body.position.x + 50, ball1.body.position.y, roof.body.position.x+50, roof.body.position.y);
 line(ball1.body.position.x+100, ball1.body.position.y, roof.body.position.x+100, roof.body.position.y);
 line(ball1.body.position.x-50, ball1.body.position.y, roof.body.position.x-50, roof.body.position.y);
 line(ball1.body.position.x-100, ball1.body.position.y, roof.body.position.x-100, roof.body.position.y);
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
}



