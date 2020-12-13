class Tree{
    constructor(){
        var options={
            isStatic:true,
            density:1
        };

        this.image=loadImage("sprites/tree.png");

      this.body=Bodies.rectangle(970,300,300,600,options);  
this.height=600;
this.width=300;
World.add(world,this.body);
    }

    display(){
     var posX=this.body.position.x;
     var posY=this.body.position.y;
     imageMode(CENTER);
      image(this.image,posX,posY,this.width,this.height);  
    }
}