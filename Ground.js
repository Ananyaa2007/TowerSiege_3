class Ground {
    constructor(x,y,width,height){
       var options = {
            isStatic:true
        }
        //making the rectangular body
        this.body = Bodies.rectangle(x,y,width,height,options);
         //defining the width
        this.width = width;
         //defining the height
        this.height = height;
        //adding the body to the world
        World.add(world, this.body);
    }

   display() {
       //defning a variable for the position of the body
    var pos = this.body.position;
    rectMode(CENTER);
    //giving the colour 
    fill("black");
    rect (pos.x,pos.y, this.width,this.height);
   }
}