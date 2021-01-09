//defining the constants 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//definig the needed variables
var engine, world;
var backgroundImg

function preload() {
  //calling the function for the changing of the background
  getBackgroundImg();
  //loading the stone image
  pImg = loadImage("h.png");
}

function setup() {
	createCanvas(1250, 600);

    engine = Engine.create();
  	world = engine.world;

    Engine.run(engine);
    
     //making the boundaries of the canvas
    ground1 = new Ground(625,590,1250,20);
    ground2 = new Ground(625,11,1250,20)
    ground3 = new Ground(1236,10,20,1200);
    ground4 = new Ground(10,10,20,1200);
      //stands for the pyramids
    ground5 = new Ground(613,500,340,20);
    ground6 = new Ground(743,200,130,20);
    //FOR THE 1ST PYRAMID//
    //blocks of 1st row from the bottom
    box1 = new Box(484,468,40,40);
    box2 = new Box(528,468,40,40);
    box3 = new Box(572,468,40,40);
    box4 = new Box(616,468,40,40);
    box5 = new Box(660,468,40,40);
    box6 = new Box(704,468,40,40);
    box7 = new Box(748,468,40,40);
    //blocks of 2nd row from the bottom
    box8 = new Box(528,424,40,40);
    box9 = new Box(572,424,40,40);
    box10 = new Box(616,424,40,40);
    box11 = new Box(660,424,40,40);
    box12 = new Box(704,424,40,40);
    //blocks of 3rd row from the bottom
    box13 = new Box(572,380,40,40);
    box14 = new Box(616,380,40,40);
    box15 = new Box(660,380,40,40);
    //block at the top of 1st pyramid
    box16 = new Box(616,340,40,40);

    //FOR THE 2ND PYRAMID//
    //blocks of 1st row from the bottom
    box17 = new Box(700,180,20,20);
    box18 = new Box(722,180,20,20);
    box19 = new Box(744,180,20,20);
    box20 = new Box(766,180,20,20);
    box21 = new Box(788,180,20,20);
    //blocks of 2nd row from the bottom
    box22 = new Box(722,158,20,20);
    box23 = new Box(744,158,20,20);
    box24 = new Box(766,158,20,20);
   //block at the top of 2nd pyramid
    box25 = new Box(744,136,20,20);

    //The Hexagonal Stone
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    //point from which the hexagon should be attached
    sling = new Sling(this.ball,{x:150,y:100});
}

function draw() {
  //condition for the background
  if(backgroundImg) {
    background(backgroundImg);
   }
   else{
    background("lightgreen");
   }

   //updating the engine
  Engine.update(engine);

  //points to be displayed on the output scree
  textSize(20);
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the Blocks.",150,50); 
    textSize(20);
    fill("white");
    text("Press Space to hit the Blocks Again n Again!!",200,85);
  
  //displaying the borders of the canvas
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  //displaying the stands for the pyramids
  ground5.display();
  ground6.display();
  //displaying the blocks of 1st row from the bottom of 1st pyramid
  fill(250,100,100)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  //displaying the blocks of 2nd row from the bottom of 1st pyramid
  fill(24,192,203);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  //displaying the blocks of 3rd row from the bottom of 1st pyramid
  fill("purple");
  box13.display();
  box14.display();
  box15.display();
   //displaying the block at the top of 1st pyramid
  fill("orange")
  box16.display();
   //displaying the blocks of 1st row from the bottom of 2nd pyramid
  fill("purple");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
   //displaying the blocks of 2nd row from the bottom of 2nd pyramid
  fill("orange")
  box22.display();
  box23.display();
  box24.display();
  //displaying the block at the top of 2nd pyramid
  fill(250,100,100)
  box25.display();
  //displaying the sling for the stone
  fill("black")
  sling.display();

  //inserting the image to the stone
  imageMode(CENTER)
  image(pImg ,ball.position.x,ball.position.y,40,40);

  drawSprites();
 }

 //Mouse Dragging function
 function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

//function to be followed after the releasing of mouse
function mouseReleased(){
  sling.fly();
}

//function to return the stone back to is earlier position to play the game again
function keyPressed(){
  if (keyCode === 32){
    sling.attach(ball);
  }
}

//function for changing the background according to the time
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  console.log(response);
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour >=6 && hour <=19 ){
      backgroundImg = loadImage("day.jpg")
  }
  else{
      backgroundImg = loadImage("ni.jpg");
  }
  }