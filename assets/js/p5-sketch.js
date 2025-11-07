// p5: simple sketch in the #p5-holder element
let c;
function setup() {
  const holder = document.getElementById("p5-holder");
  const w = holder.clientWidth;
  c = createCanvas(w, 220);
  c.parent('p5-holder');
  noStroke();
}

function windowResized(){
  const holder = document.getElementById("p5-holder");
  resizeCanvas(holder.clientWidth, 220);
}

function draw() {
  background(8, 10, 16);
  const t = millis() * 0.001;
  for (let i = 0; i < width; i+=8) {
    const y = 110 + 60 * sin(i*0.02 + t*2.0);
    ellipse(i, y, 6, 6);
  }
}
