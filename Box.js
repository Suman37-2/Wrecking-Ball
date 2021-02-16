class Box{
  constructor(x,y){
     this.body=Bodies.rectangle(x,y,80,80);
     this.w=80;
     this.h=80;
     World.add(myWorld,this.body); 
  }  

  display(){
     var post=this.body.position;
     var ang=this.body.angle;
    
     push();
     stroke("green");
     translate(post.x,post.y);
     rotate(ang);
     strokeWeight(3);
     rectMode(CENTER);
     rect(0,0,this.w,this.h); 
     pop();
  }
}