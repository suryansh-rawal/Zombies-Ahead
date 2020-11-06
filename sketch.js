const Engine = Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;
var engine,world;
var supplies,suppliesSprite,suppliesImg;
var chopper,chopperImg;
var ground,groundImg,groundSprite;
var startpg,startpgImg;
var startg;
var scene1,scene1Img;
var backSprite,backImg;
var peopleImg;
var people;



function preload(){
startpgImg=loadImage("start.jpg");
scene1Img=loadImage("scene1.jpg");
chopperImg=loadImage("chopper.png");
backImg=loadImage("back.jpg");
groundImg=loadImage("ground.png");
suppliesImg=loadImage("supplies.png");
peopleImg=loadImage("hope.png");

}

function setup() {
  var canvas =createCanvas(400,400);
  
  backSprite=createSprite(200,200);
  backSprite.addImage(backImg);

  startpg=createSprite(200,200);
  startpg.addImage(startpgImg);

groundSprite=createSprite(200,325);
groundSprite.addImage(groundImg);
groundSprite.visible=false;

people=createSprite(50,300);
people.addImage(peopleImg);
people.visible=false;
people.scale=0.2;



suppliesSprite=createSprite(200,50);
suppliesSprite.addImage(suppliesImg);
suppliesSprite.scale= 0.3;
suppliesSprite.visible=false;

  chopper=createSprite(200,50);
  chopper.addImage(chopperImg);
  chopper.visible=false;
  chopper.scale=0.6;
  

startg =createGroup();

startg.add(startpg); 

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
    
  }
  ground=Bodies.rectangle(200,400,400,200,options);
  World.add(world,ground);

  var options2={
    isStatic:true
  }


   supplies = Bodies.rectangle(200,50,20,20,options2);
   World.add(world,supplies);

 
  

 
  

  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);


 
  rect(ground.position.x,ground.position.y,400,200);
  
  chopper.display();
  

chopper.x=mouseX;
suppliesSprite.y=supplies.position.y;


  if(keyDown("space")){
    
   startg.destroyEach();
     chopper.visible=true;
     groundSprite.visible=true;
    
     people.visible=true;
     

  }

  if(keyDown("down")){
    suppliesSprite.visible=true;
    Matter.Body.setStatic(supplies,false);
  }

 
   drawSprites();
  
}