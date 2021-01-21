var ball1,log1,log2,log3,log4
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
	log1=new log(620,660,40,80)
	log2=new log(585,630,80,40)
	log3=new log(655,630,80,40)
	ball1=new ball(200,350,20,50)
	log4=new ground(310,670,10,1000)
	
	Engine.run(engine);
  
}


function draw() {
	
	keypressed();
  rectMode(CENTER);
  background(0);
  log1.display();
log2.display();
  log3.display();
  log4.display();
  ball1.display();
  drawSprites();
 
}
function keypressed(){
	if (keyDown("space")){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:-1})	
}}



