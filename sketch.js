const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var ground2;
var ground3;
var ground4;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var g2;
var push;
var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";


function setup(){

var canvas = createCanvas(800, 800);


  


ground1 = new Ground(width/2, 795,width,15);
ground2 = new Ground(width/2, 5,width,15);
ground3 = new Ground(795, 400,15,height);
ground4 = new Ground(5, 400,15,height);

engine = Engine.create();
world = engine.world;

}

function draw(){

background(0);

fill("white");
textSize(35)
  text("Score : "+score,20,40);
  

textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

Engine.update(engine);

if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

if(particle!=null)
{
particle.display();
        
if (particle.body.position.y>760)
{
if (particle.body.position.x < 300) 
{
score=score+500;      
 particle=null;
if ( count>= 5) gameState ="end";                          
}
else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
{
score = score + 100;
particle=null;
if ( count>= 5) gameState ="end";
}
else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
{
score = score + 200;
particle=null;
if ( count>= 5)  gameState ="end";
}             
}
}  

for (var k = 0; k < divisions.length; k++) 
{
divisions[k].display();
}

for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

 ground.display();
ground1.display();
ground2.display();
ground3.display();

}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
