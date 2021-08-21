class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
        ///World.add(world, this.color);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        fill(this.color)
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};