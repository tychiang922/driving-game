var $car1 = document.querySelector('.car-1');
var car1Data = {
  rotate: 0,
  direction: 'right',
  start: false,
  position: {
    top: 0,
    left: 0
  }
};
var maxRotate = 90;
var carMove;

window.addEventListener('keyup', function rotateAction(event) {
  if (event.key === 'ArrowRight') {
    car1Data.rotate += maxRotate;
    if (car1Data.rotate === 360) {
      car1Data.rotate = 0;
    }
    $car1.style.transform = 'rotate(' + car1Data.rotate.toString() + 'deg)';
  }
  if (event.key === 'ArrowLeft') {
    car1Data.rotate -= maxRotate;
    if (car1Data.rotate === 0) {
      car1Data.rotate = 360;
    }
    $car1.style.transform = 'rotate(' + car1Data.rotate.toString() + 'deg)';
  }
  switch (car1Data.rotate) {
    case 0:
      car1Data.direction = 'right';
      break;
    case 90:
      car1Data.direction = 'down';
      break;
    case 180:
      car1Data.direction = 'left';
      break;
    case 270:
      car1Data.direction = 'up';
      break;
  }
});

window.addEventListener('keydown', function startCar(event) {
  if (event.key === ' ') {
    if (!car1Data.start) {
      car1Data.start = true;
      carMove = setInterval(function carStart() {
        $car1.style.left = car1Data.position.left.toString() + 'px';
        car1Data.position.left += 2;
      }, 16);
    } else {
      car1Data.start = false;
      clearInterval(carMove);
      carMove = null;
    }
  }
});
