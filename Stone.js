class Stone{
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("sprites/stone.png");

this.body=Bodies.rectangle(200,200,20,20,options);
this.width=20;
this.height=20;
World.add(world,this.body);
    }
display(){
    var posX=this.body.position.x;
    var posY=this.body.position.y;
    rect(posX,posY,this.width,this.height);
}

}