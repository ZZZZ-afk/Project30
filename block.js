class Block{
     constructor(x, y, width, height) {

       var options = {
      }
     
    this.Visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("block.png");
    World.add(world, this.body);
   }

   display(){
   console.log(this.body.speed);
    var angle = this.body.angle;
    var position= this.body.position;

    if(this.body.speed <3){
      push();
      translate(position.x, position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,30,40);
      pop();
    }

    else {
      World.remove(world, this.body);
      push()
      this.Visibility-=5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,30,40)
      pop();
    } 
   }
}