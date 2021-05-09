const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating variable and its object
 var engine, world;

 var holder,ball,ground;
 var stand1,stand2;
 var ball;
 var slingShot;
 var polygon_img;

//loading images in preload function
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {

 //creating engine and world
   engine = Engine.create();
   world = engine.world;

 //creating canvas
   createCanvas(1100,400);

 //creating ground,stand
   ground = new Ground();
   stand1 = new Stand(390,300,250,10);
   stand2 = new Stand(700,200,250,10);
 
 //level one
   block1 = new Block(300,275,30,40);
   console.log(block1);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
 //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
 //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
 //top
   block16 = new Block(390,155,30,40);

 //level one
   block17=new Block(635,175,30,40);
   block18=new Block(649,175,30,40);
   block19=new Block(665,175,30,40);
   block20=new Block(695,175,30,40);
   block21=new Block(725,175,30,40);
   block22=new Block(755,175,30,40);
   block23=new Block(785,175,30,40);
 //level two
   block24=new Block(657,140,30,40);
   block25=new Block(665,140,30,40);
   block26=new Block(695,140,30,40);
   block27=new Block(725,140,30,40);
   block28=new Block(755,140,30,40);

 //level three
   block29=new Block(672,105,30,40);
   block30=new Block(700,105,30,40);
   block31=new Block(731,105,30,40);

 //top
   block32=new Block(700,70,30,40);

 //creating polygon and adding to world
   polygon=Bodies.circle(50,200,40);
   World.add(world,polygon);

 //creating slingShot with bodyA to polygon
   slingShot=new Slingshot(this.polygon,{x:100,y:200});

 Engine.run(engine);
}

function draw() {
 //clear the screen 
   background(120); 
   
 Engine.update(engine);

 //text setup 
   strokeWeight(2);
   stroke("greeen")
   textSize(20);
   fill("lightyellow");
   text(mouseX + ',' + mouseY, 800, 15);

   strokeWeight(2);
   stroke("greeen")
   textSize(20);
   fill("lightyellow");
   text("Drag the Polygon to Destroy The BLocks",20,20);

 //text setup
   strokeWeight(2);
   stroke("greeen")
   textSize(20);
   fill("lightyellow");
   text("Press on Space Bar to Second Chance..",700,300);

 //displaying objects 
   ground.display();
   stand1.display();
   stand2.display();
  
   strokeWeight(2);
   stroke(15);
   fill("skyblue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();

   fill("pink");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();

   fill("turquoise");
   block13.display();
   block14.display();
   block15.display();
   fill("grey");
   block16.display();

   fill("skyblue")
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   block23.display();

   fill("pink");
   block24.display();
   block25.display();
   block26.display();
   block27.display();
   block28.display();

   fill("turquoise");
   block29.display();
   block30.display();
   block31.display(); 

   fill("grey");
   block32.display();

 //making images centre and image setup 
   imageMode(CENTER)
   image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 
 //displaying object
   slingShot.display();
}

function mouseDragged(){
 //making when mouse is moving back so it moves back
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
 
function mouseReleased(){
 //when mouse is released so it fly 
   slingShot.fly();
} 

function keyPressed(){
  if(keyCode===32){
      slingShot.attach(this.polygon);
  }
}