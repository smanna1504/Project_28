class Elastic{
    constructor(bodyA,pointB){
var options={
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.04,
    length : 10
};

this.pointB=pointB;
this.elastic=Constraint.create(options);
World.add(world,this.elastic);

    }

fly(){
    this.elastic.bodyA = null;
}

display(){
if(this.elastic.bodyA){
var pointA = this.elastic.bodyA.position;
var pointB=this.pointB;

push();

stroke('black'); 

line(pointA.x - 10, pointA.y, pointB.x -10, pointB.y);
        



pop(); 


}

}

attach(body){
    this.sling.bodyA=body;
}

}