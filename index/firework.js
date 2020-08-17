function Firework() {

  this.hue = [random(60,244),random(60,244),random(60,244)];
  this.firework = new Particle(random(width),height,1,this.hue,"firework");
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    if(this.exploded && this.particles.length === 0) {
      return true;
    }else{
      return false;
    }
  }

  this.update = function() {
    if(!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if(this.firework.vel.y >= 1) {
        this.exploded = true;
        this.explode();
      }
    }
    for(var i = this.particles.length-1; i >= 0; i--){
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if(this.particles[i].markForDelete()) {
        this.particles.splice(i,1);
      }
    }
  }

  this.explode = function() {
    if(random() <= 0.03){
      s = random(15,20);
    }else{
      s = random(1,10);
    }
    for(var i = 0; i < 100; i++){
      var p = new Particle(this.firework.pos.x, this.firework.pos.y,s,this.hue,"spark");
      this.particles.push(p);
    }
  }

  this.show = function() {
    if(!this.exploded) {
      this.firework.show();
    }
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].show();
    }
  }
}