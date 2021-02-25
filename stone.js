class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("images/stone.png")
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}