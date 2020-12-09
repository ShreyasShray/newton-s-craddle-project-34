class Ball{
    constructor(x, y, color){
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction:0,
            frictionAir:0.0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.color = color;
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        var pos = this.body.position;
        push();
        fill(this.color);
        stroke("black");
        strokeWeight(2);
        ellipse(pos.x, pos.y, 100, 100);
        pop();
    }
}