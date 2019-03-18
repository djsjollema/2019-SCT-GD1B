class Circle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  draw(){
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "aliceblue";
    context.lineWidth = "4";
    context.arc(this.x,this.y,10,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}


const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];

for (var i = 0; i < 100; i++) {
  myBall = new Circle(grn(canvas.width),grn(canvas.height));
  myBall.v_x = grn(10);
  myBall.v_y = grn(10);
  balls.push(myBall);
}

let myCircle = new Circle(200,300);

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  for(let i = 0; i<balls.length; i++){
    balls[i].x += balls[i].v_x;
    balls[i].y += balls[i].v_y;
    if(balls[i].x > canvas.width || balls[i].x < 0){
      balls[i].v_x = -balls[i].v_x;
    }
    if(balls[i].y > canvas.height || balls[i].y < 0){
      balls[i].v_y = -balls[i].v_y;
    }
    balls[i].draw(context);
  }
}

animate();

function grn(max){
  return Math.floor(Math.random()*max);
}
