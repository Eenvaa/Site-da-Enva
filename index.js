var autoplayInterval = 8000;
var autoplayTimer = null;
var autoplay = true;
var newIndex = 1;
const slide1 = document.getElementById('slide1');
slide1.n = 1;
const slide2 = document.getElementById('slide2');
slide2.n = 2;
const slide3 = document.getElementById('slide3');
slide3.n = 3;
const slide4 = document.getElementById('slide4');
slide4.n = 4;
const slide5 = document.getElementById('slide5');
slide5.n = 5;

if (autoplay) {
     autoplayTimer = setInterval(function() {
     newIndex++;
     navigateSlider();
   }, autoplayInterval);
}

function mudarindex(radioa_atual) {
    newIndex=radioa_atual.n;
}


function navigateSlider() { 
  if (newIndex == 1) {
    slide1.checked = true;
  } else if (newIndex == 2) {
    slide2.checked = true;
  } else if (newIndex == 3) {
    slide3.checked = true;
  } else if (newIndex == 4) {
    slide4.checked = true;
  } else if (newIndex == 5) {
    slide5.checked = true;
    newIndex = 0;
  }
}