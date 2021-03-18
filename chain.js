class Chain{

    constructor(bodyA,pointB){
    
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10
        }
    
       // this.bodyA=bodyA;
       
        this.chain=Constraint.create(options)
        this.pointB=pointB;
        World.add(world,this.chain)
    }
    
  //  attach(body){
  //      this.chain.bodyA=body;
  //  }
    
    fly(){
        this.chain.bodyA=null;
    }

    display(){
    
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position
            var pointB=this.pointB
    
            strokeWeight(2);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    }