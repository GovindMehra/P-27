const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball1,ball2,ball3,ball4,ball5,sling1,sling2,sling3,sling4,sling5;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,100,400,30);
    ball1 = new Ball(100,600,40);
    sling1 = new sling(ball1.body,{x:315,y:400});
    ball2 = new Ball(200,600,40);
    sling2 = new sling(ball2.body,{x:340,y:400});
    ball3 = new Ball(300,600,40);
    sling3 = new sling(ball3.body,{x:365,y:400});
    ball4 = new Ball(400,600,40);
    sling4 = new sling(ball4.body,{x:390,y:400});
    ball5 = new Ball(500,600,40);
    sling5 = new sling(ball5.body,{x:415,y:400});


}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    sling1.display();
    ball1.display();
    sling2.display();
    ball2.display();
    sling3.display();
    ball3.display();
    sling4.display();
    ball4.display();
    sling5.display();
    ball5.display();
}
