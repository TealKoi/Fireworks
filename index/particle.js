class Particle{
  type = "spark";
  lifespan = 255;
  constructor(x,y,size,hue,type){
    this.pos = createVector(x,y);
    this.type = type;
    this.size = size;
    this.burn = random(1,20);
    if(this.type == "firework"){
      this.vel = createVector(0,random(-15,-8));
    }else{
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(0,this.size));
    }
    this.acc = createVector(0,0);
    this.hue = hue;
  }

  applyForce(force){
    this.acc.add(force);
  }

  markForDelete(){
    if(this.lifespan < 0){
      return true;
    }else{
      return false;
    }
  }

  update(){
    if(this.type == "spark"){
      this.vel.mult(0.9);
      this.b = random(1,5)+this.burn;
      this.lifespan -= this.b;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show(){
    if(this.type == "spark"){
      strokeWeight(2);
      stroke(this.hue[0]+random(-10,10),this.hue[1]+random(-10,10),this.hue[2]+random(-10,10),this.lifespan);
    }else{
      strokeWeight(4);
      stroke(this.hue[0],this.hue[1],this.hue[2]);
    }
    point(this.pos.x,this.pos.y);
  }
}