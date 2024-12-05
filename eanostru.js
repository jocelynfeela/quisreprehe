const element = document.getElementById('animatedElement');
let opacity = 0;
let increasing = true;

function animateOpacity() {
  if (increasing) {
    opacity += 0.1;
  } else {
    opacity -= 0.05;
  }

  element.style.opacity = opacity;

  if (opacity >= 1) {
    increasing = false;
  } else if (opacity <= 0) {
    increasing = true;
  }

  if (opacity > 0.5) {
    setTimeout(animateOpacity, 100); // slower speed for second half
  } else {
    setTimeout(animateOpacity, 50); // faster speed for first half
  }
}

animateOpacity();
