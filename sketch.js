var BgImg;
var SleepAnm;
var BrushAnm;
var GymAnm;
var EatAnm;
var DrinkAnm;
var MoveAnm;
var Astronaut;

function preload(){
  BgImg=loadImage("images/iss.png");
  SleepAnm=loadAnimation("images/sleep.png");
  BrushAnm=loadAnimation("images/brush.png");
  GymAnm=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  EatAnm=loadAnimation("images/eat1.png","images/eat2.png");
  DrinkAnm=loadAnimation("images/drink1.png","images/drink2.png");
  MoveAnm=loadAnimation("images/move.png","images/move1.png");

}

function setup() {
  createCanvas(400, 400);

  Astronaut=createSprite(300,230);
  Astronaut.addAnimation("sleeping",SleepAnm);
  Astronaut.scale=0.1;
  
}

function draw() {
  background(220);
  createEdgesSprite;
}