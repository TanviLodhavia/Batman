class Rain {
    constructor(){
        var options = {
            isStatic:false,
            'restitution':0.4,
            'friction':0.3,
            'density':2
        }
        this.body = Bodies.circle(random(0,400),random(0,-1000),3,options);
        this.radius=3;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        strokeWeight(0)
        fill(171,213,230);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        
    }
}