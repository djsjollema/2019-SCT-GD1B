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

let myCircle = new Circle(getRandomNumber(1000),getRandomNumber(500));
myCircle.draw();

let otherCircle = new Circle(getRandomNumber(1000),getRandomNumber(500))
otherCircle.draw();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
