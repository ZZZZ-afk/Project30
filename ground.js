class Ground{
     constructor(){
         var ground_options={
           isStatic : true
        }

     this.ground = Bodies.rectangle(550,390,1100,20,ground_options)
     World.add(world,this.ground);
     }
     display(){
     push();
     noStroke();
     fill(188,67,67);
     rectMode(CENTER);
     rect(this.ground.position.x,this.ground.position.y,1100,20);
     pop();
     }
}