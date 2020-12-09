const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function setup(){
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(600, 500, "blue");
    ball2 = new Ball(700, 500, "blue");
    ball3 = new Ball(800, 500, "blue");
    ball4 = new Ball(900, 500, "blue");
    ball5 = new Ball(1000, 500, "blue");

    rope1 = new Rope(ball1.body , {x: 600, y: 100})
    rope2 = new Rope(ball2.body , {x: 700, y: 100})
    rope3 = new Rope(ball3.body , {x: 800, y: 100})
    rope4 = new Rope(ball4.body , {x: 900, y: 100})
    rope5 = new Rope(ball5.body , {x: 1000, y: 100})
}

function draw(){
    background("grey");
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
}