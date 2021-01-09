class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1
            // isStatic :true
        }
        //making the rectangular body
        this.body = Bodies.rectangle(x, y, width, height, options);
        //defining the width
        this.width = width;
        //defining the height
        this.height = height;
        //marking the visibiity
        this.visibility = 255;
        //adding the body to the world
        World.add(world, this.body);
      }
      display(){
        //printing the speed of the body in console window
        console.log(this.body.speed);
        //preparing an if conditon to slowly vanish the block after being hit
        if(this.body.speed < 5)
        {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(5);
        rect(0, 0, this.width, this.height);
        pop();
      }

      else{
        World.remove(world,this.body);
        push()
        this.visibility = this.visibility -5;
        tint(255,this.visibility);
        pop();
      }
      }
}