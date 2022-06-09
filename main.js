var $car1 = document.querySelector('.car-1');
var car1CurrentRotate = 0;
var maxRotate = 90;
window.addEventListener('keyup', function rotateAction(event) {
  if (event.key === 'ArrowRight') {
    car1CurrentRotate += maxRotate;
    if (car1CurrentRotate === 360) {
      car1CurrentRotate = 0;
    }
    $car1.style.transform = 'rotate(' + car1CurrentRotate.toString() + 'deg)';
  }
  if (event.key === 'ArrowLeft') {
    car1CurrentRotate -= maxRotate;
    if (car1CurrentRotate === 0) {
      car1CurrentRotate = 360;
    }
    $car1.style.transform = 'rotate(' + car1CurrentRotate.toString() + 'deg)';
  }
});
