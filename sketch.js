
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
tree=new Tree(1050,580);
stone=new Stone();
boy=createSprite(270,450,100,100);
boy.addImage(boyImg);
boy.scale=0.2;
mango1=new Mango(1093,152);          
mango2=new Mango(1085,100);
mango3=new Mango(1000,140);
mango4=new Mango(900,230);
mango5=new Mango(950,80);
mango6=new Mango(1030,215);
elastic=new Elastic(stone.body,{x:180,y:320});
tree.debug=true;

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

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
};


function mouseReleased(){
  elastic.fly();
}


function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:180,y:320});
     elastic.attach(stone.body);
  }
}

function detectCollision(lStone,lMango){
  mangoPosition=lMango.body.position;
  stonePosition=lStone.body.position;
  var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
  if(distance<=lStone.radius+lMango.radius){
    Matter.Body.setStatic(lMango,false);
  }
}