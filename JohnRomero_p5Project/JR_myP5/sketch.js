function setup() {
  // put setup code here
  createCanvas(2400,1180);
  background('black');
}

function draw() {
  // put drawing code here

  stroke('white')
  fill('black')
  circle(1200,590,1700);

  stroke('white')
  fill('black')
  circle(1200,590,925);

  stroke('white')
  fill('black')
  circle(1200,590,725);

if (mouseIsPressed == true) {
  stroke('white');
  fill('pink');
  circle(1200,590,350);
} else {
  stroke('red');
  fill('yellow');
  circle(1200,590,350);
  }


if (mouseIsPressed == true) { 
  stroke('white');
  fill('grey');
  circle(1000,1000,200);
} else {
  stroke('yellow');
  fill('brown');
  circle(1000,1000,200);
  }

  if (mouseIsPressed == true) {
    stroke('red')
    fill('yellow');
    circle(1000,300,100);
  } else {
    stroke('green')
    fill('blue');
    circle(1000,300,100);
  }

  if (mouseIsPressed == true) { 
    stroke('brown')
    fill('#E9967A');
    circle(1050,200,50);
  } else {
    stroke('white')
    fill('grey');
    circle(1050,200,50);
    }


  if (mouseIsPressed == true) {
    stroke('green')
    fill('blue');
    line(mouseX, mouseY, pmouseX, pmouseY);
    circle(1950,200,220);

  } else {
    stroke('brown')
    fill('#E9967A');
    circle(1950,200,220);
    }

}