const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1
var holder1
var block1

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    
    ground1 = new ground();
    holder1 = new holder();
    //4th row
    block1 = new block(310,280,30,40);
    block2 = new block(340,280,30,40);
    block3 = new block(370,280,30,40);
    block4 = new block(400,280,30,40);
    block5 = new block(430,280,30,40);
    block6 = new block(460,280,30,40);
    block7 = new block(490,280,30,40);
    //3rd row
    block8 = new block(340,240,30,40);
    block9 = new block(370,240,30,40);
    block10 = new block(400,240,30,40);
    block11 = new block(430,240,30,40);
    block12 = new block(460,240,30,40);
    //2nd row
    block13 = new block(370,200,30,40);
    block14 = new block(400,200,30,40);
    block15 = new block(430,200,30,40);
    //1st row
    block16 = new block(400,160,30,40);

    polygon1=new polygon(100,250,50)
    rope1=new rope(polygon1.body,{x:100,y:230});
	World.add(world,rope1);
    Engine.run(engine);
}
function draw(){
    background(230);
   ground1.display();
   holder1.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   polygon1.display();
   rope1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   rope1.fly()
}
