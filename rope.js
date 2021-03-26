class rope{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.pointB=pointB
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
         }
         fly(){
             this.rope.bodyA=null
         }
         display(){
             if(this.rope.bodyA){
     
             
             strokeWeight(4)
             line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
         }
     }
     }