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
    context.arc(this.x,this.y,50,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myCircle = new Circle(200,300);

let v_x = 10;


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  myCircle.x += v_x;
  myCircle.draw();
  if(myCircle.x >= canvas.width){
    v_x = -v_x;
  }
  if(myCircle.x <= 0){
    v_x = - v_x;
  }
}

animate();
