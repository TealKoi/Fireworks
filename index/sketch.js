var fireworks = [];
var gravity;

function setup() {
  createCanvas(400,300);
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