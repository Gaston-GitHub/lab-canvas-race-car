
const canvas = document.querySelector('#game-board canvas');
const ctx = canvas.getContext('2d');

const roadImg = new Image();
roadImg.src = 'images/road.png';

const imgCar = new Image();
imgCar.src = 'images/car.png';

const imgBack = {
  roadImg: roadImg,
  y: 0,
  draw: function() {
    this.y++;
    if (this.y > canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.roadImg, 0, this.y, canvas.width, canvas.height);
    ctx.drawImage(this.roadImg, 0, this.y - canvas.height, canvas.width, canvas.height);
  }
};

class Car {
  constructor() {
    this.x = 150, 
    this.y = 550;
  }
  left() {
    this.x -= 10;
  }
  right() {
    this.x += 10;
  }
}

function draw(blueCar) {
  ctx.drawImage(imgCar, blueCar.x, blueCar.y, 70, 100);
}

const blueCar = new Car();

const obstacles = {
  x: Math.round(Math.random() * (canvas.width - 150 )),
  x1: Math.round(Math.random() * (canvas.width - 150 )),
  x2: Math.round(Math.random() * (canvas.width - 150 )),
  x3: Math.round(Math.random() * (canvas.width - 150 )),
  x4: Math.round(Math.random() * (canvas.width - 150 )),
  x5: Math.round(Math.random() * (canvas.width - 150 )),
  y: 0,

  draw: function() {
    this.y++;
    if (this.y > canvas.height + 1000) {
      this.y = 0;
    }

    ctx.fillRect(this.x, this.y, 150, 30);
    ctx.fillStyle = "red";

    ctx.fillRect(this.x1, this.y - 300, 150, 30);
    ctx.fillStyle = "green";

    ctx.fillRect(this.x2, this.y - 500, 150, 30);
    ctx.fillStyle = "yellow";

    ctx.fillRect(this.x3, this.y - 700, 150, 30);
    ctx.fillStyle = "white";

    ctx.fillRect(this.x4, this.y - 950, 150, 30);
    ctx.fillStyle = "brown";

    ctx.fillRect(this.x5, this.y - 1200, 150, 30);
    ctx.fillStyle = "blue";
  }
};

document.addEventListener('keydown', (key) => {
            
  if (key.code === 'ArrowLeft') {
    console.log('Arrow Left')
      blueCar.left();
  }
  if (key.code === 'ArrowRight') {
    console.log('Arrow Right')
      blueCar.right();
  } 

})




window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };

  function startGame() {
    function update() {
      if (blueCar.x > canvas.width - 150 || blueCar.x < 50) {
        blueCar.x *= -1;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      imgBack.draw();
      draw(blueCar);
      obstacles.draw();
      
      requestAnimationFrame(update);
      
    }
    requestAnimationFrame(update);
  }
};