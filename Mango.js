class Mango{
    constructor(x,y){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.image=loadImage("sprites/mango.png");
this.body=Bodies.circle(x,y,80,options);
this.radius=80;

World.add(world,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;
imageMode(CENTER);
        image(this.image,posX,posY,this.radius,this.radius);
    }
}