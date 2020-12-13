
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stone,backgroundImg,tree,boy,boyImg,mango1,mango2,mango3,mango4,mango5,mango6;
var elastic;

function preload()
{
	backgroundImg=loadImage("sprites/background.jpeg");
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1250, 570);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree();
boy=createSprite(270,450,100,100);
boy.addImage(boyImg);
boy.scale=0.2;
stone=new Stone();
mango1=new Mango(1093,152);          
mango2=new Mango(1085,100);
mango3=new Mango(1000,140);
mango4=new Mango(900,230);
mango5=new Mango(920,65);
mango6=new Mango(1030,215);
elastic=new Elastic(stone.body,{x:180,y:320});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  drawSprites();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  elastic.display();
  stone.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
};


function mouseReleased(){
  elastic.fly();
}


function keyPressed(){
  if(keyCode===32){
     elastic.attach(stone.body);
  }
}

