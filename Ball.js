class Ball{
    constructor(x,y){
        var op={
          density:4  
        }
       this.body=Bodies.rectangle(x,y,60,60,op);
       this.w=60;
       this.h=60;
       World.add(myWorld,this.body); 
    }  
  
    display(){
       var post=this.body.position;
       var ang=this.body.angle;
      
       push();
       stroke("red");
       translate(post.x,post.y);
       rotate(ang);
       strokeWeight(3);
       fill("pink");
       ellipseMode(RADIUS);
       ellipse(0,0,this.w,this.h); 
       pop();
    }
  }