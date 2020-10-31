class Rope {
   constructor (x ,y , length , width) {
       var bodyA = ball1;
       var bodyB = ball2;
       var bodyC = ball3;
       var bodyD = ball4;
       var bodyE = wall;
       display()
       {
           var pointA=this.rope.bodyA.position;
           var pointB=this.rope.bodyE.position;

           var pointC=this.rope.bodyB.position;
           var pointB=this.rope.bodyE.position;
            
           var pointD=this.rope.bodyC.position;
           var pointB=this.rope.bodyE.position;

           var pointE=this.rope.bodyD.position;
           var pointB=this.rope.bodyE.position;

           strokeWeight(2);

           var Anchor1X=pointA.x
           var Anchor1Y=pointA.y

           var Anchor2X=pointB.x+this.offsetX
           var Anchor2Y=pointB.y+this.offsetY

           line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

       }
   }
}