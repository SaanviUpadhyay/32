 const Engine = Matter.Engine;
 const Render = Matter.Render;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Body = Matter.Body;
 const Composites = Matter.Composites;
 const Composite = Matter.Composite;

let engine;
let world;

var ball;
var blower;
var blower_mouth;


function setup() {
  createCanvas(800,400);

  ball         =new Ball(400,200,50,50);
  blower       =new  Blower(400,150,100,50);
  blower_mouth = new Blower_mouth(350,150,50,100);

  button=createSprite("Click to Blow")
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}