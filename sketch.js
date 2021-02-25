
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango,mango2;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango=new Mango(1100,100,30);
	mango2=new Mango(1050,70,30);
	mango3=new Mango(1050,150,30);
	mango4=new Mango(1150,150,30);
	mango5=new Mango(1200,200,30);
	mango6=new Mango(1150,250,30);
	mango7=new Mango(1000,100,30);
	mango8=new Mango(1000,190,30);
	mango9=new Mango(1050,250,30);
	mango10=new Mango(950,170,30);
	mango11=new Mango(950,240,30);
	
	stone=new Stone(200,100)
	treeObj=new tree(1050,580);

	//chain = new Chain(Stone.body,{x:100,y:100})
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango.display();
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
  stone.display();
  // chain.display();
  groundObject.display();
}





function keyPressed(){
	if(keyCode===UP_ARROW){
	    
		Matter.Body.setPosition(stone.body,{x:1150,y:150})
		Matter.Body.setStatic(mango6.body,false)
		Matter.Body.setStatic(mango5.body,false)
		
	}
}