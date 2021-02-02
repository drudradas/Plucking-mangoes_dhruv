class Stone{
    constructor(x,y,width,height){
        var options = {
// stone was set isStatic : true , so it wouldnt move . Remove that and add the below properties
            restitution :1,
            friction : 0.04,
            density: 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle //capturing the body's angle
        push();
        translate(this.body.position.x, this.body.position.y);
       rotate(angle)  // this command was not added - this is so that the image rotates according to the body itself
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}