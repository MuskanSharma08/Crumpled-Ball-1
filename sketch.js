
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1300, 550);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1100,450);
	paperObject=new paper(200,350,40);
	groundObject= new ground(width/2, 500, width, 40)
	Engine.run(engine);
	  
}
function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
 	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}