class Block {
    constructor(x, y, width, height) {
        var options = {
            friction: 0.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
        this.image = loadImage("block.png");
    }

    display() {
        imageMode(CENTER);
        if(this.body.speed < 3) {
            // push();
            // translate(this.body.position.x, this.body.position.y);
            // rotate(this.body.angle);
            // tint(255, 255);
            image(this.image, this.x, this.y, this.width, this.height);
            // pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility -= 5;
            tint(255, this.visibility);
            image(this.image, this.x, this.y, this.width, this.height);
            pop();
        };
    };
};