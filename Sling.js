class sling{
    constructor(body1,body2)
    {
        var options={
            bodyA : body1,
            pointB : body2,
            length : 10,
        }
        this.body=Constraint.create(options);
        World.add(world,this.body)
    }
    display(){
        if(this.body.bodyA,this.body.bodyB){
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB;
        strokeWeight(15);
        line(posA.x,posA.y,posB.x,posB.y);
    }
    }

}