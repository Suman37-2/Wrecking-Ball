class String{
   constructor(bodyA,pointB){
      var options={
         stifness:1,
         length:350,
         bodyA:bodyA,
         pointB:pointB
      } 
      this.pointB=pointB;
      this.string=Constraint.create(options);
      World.add(myWorld,this.string);
   } 

   display(){
       var posA=this.string.bodyA.position;
       var posB=this.pointB;
       push();
       stroke("black");
       strokeWeight(3);
       line(posA.x,posA.y,posB.x,posB.y);
       pop();
   }
}