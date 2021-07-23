class Rubber {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        };
        this.body = Constraint.create(options);
        World.add(world, this.body);
    };
    
    fly() {
        this.body.bodyA = null;
    };

    attach(bodyA) {
        this.body.bodyA = bodyA;
    };

    display() {
        if(this.body.bodyA !== null) {
            strokeWeight(4);
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.pointB.x, this.body.pointB.y);
        };
    };
};