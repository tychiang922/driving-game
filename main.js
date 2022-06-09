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
});

window.addEventListener('keydown', function startCar(event) {
  if (event.key === ' ') {
    if (car1Data.start === false) {
      car1Data.start = true;
      setInterval(function carStart() {
        $car1.style.left = car1Data.position.left.toString() + 'px';
        car1Data.position.left += 2;
      }, 16);
    }
  }
});
