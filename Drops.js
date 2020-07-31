class Drops {
    constructor(x,y){
        var options = {
            isStatic:false,
            'restitution':0.4
}
        this.body = Bodies.circle(x,y,3,options);
        this.radius=3;
        World.add(world,this.body);
    }
    display(){ 
        var pos =this.body.position; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(this.body.angle); 
        strokeWeight(0); 
        fill(171,213,230    ); 
        ellipseMode(RADIUS); 
        ellipse(0,0,this.radius,this.radius); 
        pop(); }
}