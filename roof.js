class Roof {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
        }

        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body)
    }

    display () {
        var roofPosition = this.body.position;
        push();
        translate(roofPosition.x, roofPosition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        rect(0, 0, this.w, this.h);
        pop();
    }
}