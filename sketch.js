function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // topcolor = color(255, 255, 255);
  // bottomcolor = color(137, 207, 240);
  // for (let y = 0; y < height; y++) {
  //   n = map(y, 0, height, 0, 0.8);
  //   let newcolor = lerpColor(topcolor, bottomcolor, n);
  //   stroke(newcolor);
  //   line(0, y, width, y);
  // }
  background(187,168,162);
  translate(width / 2, height / 2);
  rotate(90);
  push();
  let s = second();
  let end1 = map(s, 0, 60, 0, 360);
  strokeWeight(6);
  stroke(140, 184, 218,150);
  fill(187, 232, 252);
  arc(-90, 0, 50, 50, 0, end1);
  pop();

  push();
  let m = minute();
  let end2 = map(m, 0, 60, 0, 360);
  strokeWeight(6);
  stroke(128, 168, 199,150);
  fill(187, 235, 255, 100);
  arc(0, 0, 100, 300, 0, end2);
  pop();

  push();
  let h = hour();
  let end3 = map(h % 12, 0, 12, 0, 360);
  strokeWeight(6);
  stroke(150, 184, 210,150);
  fill(187, 232, 252, 20);
  arc(0, 0, 105, 390, 0, end3);
  pop();
}
