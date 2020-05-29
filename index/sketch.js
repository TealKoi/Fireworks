var fireworks = [];
var gravity;

function setup() {
  createCanvas(800,600);
  gravity = createVector(0,0.2);
  stroke(255);
  strokeWeight(4);
  background('#111111');
}

function draw() {;
  background('#111111');
  if(random(1) < 0.02) {
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