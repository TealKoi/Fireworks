var fireworks = [];
var gravity;

function setup() {
  createCanvas(1100,600);
  gravity = createVector(0,0.4);
  stroke(255);
  strokeWeight(4);
  background('#111111');
}

function draw() {;
  background('#111111');
  if(random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  for(var i = fireworks.length-1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()) {
      fireworks.splice(i,1);
    }
  }
}

/*
Need to look into solution for getting particles to fly out in shapes other than a circle when exploding. Firework and Particle classes should be merged into one class.

*/