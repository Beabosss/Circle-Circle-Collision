function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", setup);

function collideCircleCircle(cx1, cy1, cx2, cy2, d1, d2){
  let r1 = d1/2
  let r2 = d2/2
  distance = Math.sqrt((cx1 - cx2) ** 2 + (cy1 - cy2) ** 2)
  if (distance <= r1 + r2){
    stroke('red')
    return true
    
  }
  else{
    stroke("black")
    return false

  }
}

function draw() {
  background(220);
  let cx1 = mouseX
  let cy1 = mouseY
  let cx2 = window.innerWidth/2
  let cy2 = window.innerHeight/2
  
  let d1 = 30
  let d2 = 50
  
  circle(cx2, cy2, d2)
  circle(cx1, cy1, d1)

  
  collideCircleCircle(cx1, cy1, cx2, cy2, d1, d2)
  
  
}