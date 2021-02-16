const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var myEngine,myWorld,ground;

function setup(){
myEngine=Engine.create();
myWorld=myEngine.world; 
createCanvas(1200,800);

var gr={
    isStatic:true
}
ground=Bodies.rectangle(600,790,1200,20,gr);
World.add(myWorld,ground);
    
b1=new Box(600,740);
b2=new Box(600,660);
b3=new Box(600,580);
b4=new Box(600,500);
b5=new Box(600,420);
b6=new Box(600,340);
b7=new Box(600,260);
b8=new Box(600,180);

b11=new Box(700,740);
b12=new Box(700,660);
b13=new Box(700,580);
b14=new Box(700,500);
b15=new Box(700,420);
b16=new Box(700,340);
b17=new Box(700,260);
b18=new Box(700,180);

b21=new Box(800,740);
b22=new Box(800,660);
b23=new Box(800,580);
b24=new Box(800,500);
b25=new Box(800,420);
b26=new Box(800,340);
b27=new Box(800,260);
b28=new Box(800,180);

ball=new Ball(400,500);

string=new String(ball.body,{x:400,y:150});
}

function draw(){
    
Engine.update(myEngine);
background("lightblue");

push();
fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,1200,20);
pop();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();

b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();

b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
b27.display();
b28.display();

ball.display();

string.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});  
}
