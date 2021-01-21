class log {
    constructor(x,y,height,width){
      var options={
        isStatic:true
      }
      
     
     // Matter.Body.setAngle(this.body, angle);
    
     this.img = loadImage("dustbin.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        
        World.add(world, this.body);
    }
      display(){
        push()
       var pos =this.body.position
       // rectMode(CENTER)
       
        strokeWeight(3)
       fill(255,0,255)
       imageMode(CENTER);
        image(this.img, pos.x, pos.y, this.width, this.height)
        //fill("red")
       
        pop()
      }
  }