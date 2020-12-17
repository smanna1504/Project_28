class Ground{
    constructor(){
       var options={
           isStatic:true,
           restitution:0,
           friction:2,
           density:1.2
       } ;

       this.body=Bodies.rectangle(width/2,550,width*4,10,options);
       this.width=width*4;
       this.height=10;
       World.add(world,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        rect(posX,posY,this.width,this.height);
    
    }

}