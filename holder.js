class holder{
    constructor(){
        var options ={
            isStatic: true
        }
        this.ground = Bodies.rectangle(400,300,220,10,options);
        World.add(world,this.ground);
    }
    display(){
        strokeWeight(2);
        fill("black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,220,10);
    }
}