class Stone{
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("sprites/stone.png");

this.body=Matter.Bodies.circle(150,320,50,options);
this.radius=50;
World.add(world,this.body);
    }
display(){
    var posX=this.body.position.x;
    var posY=this.body.position.y;
    imageMode(CENTER);
    image(this.image,posX,posY,this.radius,this.radius);
}

}