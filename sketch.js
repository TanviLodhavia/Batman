var ground;
var bruce, bruceImg;
var cloud1, cloudImg;
var drops = [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  bruceImg = loadImage("Bruce.png");
  cloudImg = loadImage("Cloud.png")
}

function setup() {
  createCanvas(400,550);
  
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);  

  bruce = createSprite (200,460,20,20);
  bruce.addImage(bruceImg);

  cloud1 = createSprite(40,80,20,20);
  cloud1.addImage(cloudImg);

  cloud2 = createSprite(120,50,20,20);
  cloud2.addImage(cloudImg); 

  cloud3 = createSprite(200,100,20,20);
  cloud3.addImage(cloudImg); 

  cloud4 = createSprite(260,60,20,20);
  cloud4.addImage(cloudImg);

  cloud5 = createSprite(370 ,75,20,20);
  cloud5.addImage(cloudImg);
}


function draw() {
  rectMode(CENTER);
  background(3,12,60);

  if(frameCount % 5 === 0){ 
    drops.push(new Drops(random(60, 400), random(10,30))); 
  } 
  for (var j = 0; j < drops.length; j++) { 
    drops[j].display(); }

    bruce.display();
    cloud1.display();
    cloud2.display();
    cloud3.display();

  drawSprites();
}