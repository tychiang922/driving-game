var $car1 = document.querySelector('.car-1');
var car1Data = {
  rotate: 0,
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
    if (car1Data.rotate === 0) {
      car1Data.rotate = 360;
    }
    car1Data.rotate -= maxRotate;
    $car1.style.transform = 'rotate(' + car1Data.rotate.toString() + 'deg)';
  }
});

window.addEventListener('keydown', function startCar(event) {
  if (event.key === ' ') {
    if (!car1Data.start) {
      car1Data.start = true;
      carMove = setInterval(function carStart() {
        switch (car1Data.rotate) {
          case 0:
            $car1.style.left = car1Data.position.left.toString() + 'px';
            car1Data.position.left += 2;
            break;
          case 90:
            $car1.style.top = car1Data.position.top.toString() + 'px';
            car1Data.position.top += 2;
            break;
          case 180:
            $car1.style.left = car1Data.position.left.toString() + 'px';
            car1Data.position.left -= 2;
            break;
          case 270:
            $car1.style.top = car1Data.position.top.toString() + 'px';
            car1Data.position.top -= 2;
            break;
        }
      }, 16);
    } else {
      car1Data.start = false;
      clearInterval(carMove);
      carMove = null;
    }
  }
});
