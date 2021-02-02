
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var Boy;
var ground;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var sling;

function preload()
{
	boyImge = loadImage("boy.png");// preload the image of the boy  . 
	treeImg = loadImage("tree.png")// preload the image of the tree
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Boy = new boy(150,625,190,200)
    ground = new Ground(400,675,800,10)
	//tree = new Tree(600,441,350,500)
	stone = new Stone(95,580,30,30)
	mango1 = new Mango(600,360,50,50);
	mango2 = new Mango(535,395,50,50);
	mango3 = new Mango(620,270,50,50);
	mango4 = new Mango(490,345,50,50,);
	mango5 = new Mango(740,380,50,50);
	mango6 = new Mango(670,320,50,50);
	mango7 = new Mango(660,380,50,50);
	mango8 = new Mango(550,310,50,50);
	mango9 = new Mango(700,350,30,30);
	mango10 = new Mango(570,260,30,30);
	sling = new Sling(stone.body,{x:95,y:580});
	mango11 = new Mango(640,230,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImge,60,525,200,200)// display the image of the boy. 
  image(treeImg,420,185,350,500)//display the image of the tree 
//Boy.display();
ground.display();
//tree.display();
sling.display();

stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
  drawSprites();
 
}

function mouseDragged(){
   
Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    sling.fly();
}