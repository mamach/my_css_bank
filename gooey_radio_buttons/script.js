var radios = document.querySelectorAll('.radio');
var labels = document.querySelectorAll('.label');
var ball = document.querySelector('.ball');
var prevRadio, prevLabel;

radios.forEach((radio, index) => {
  radio.addEventListener('click', function(e) {
    if (prevRadio) prevRadio.classList.toggle('active');
    if (prevLabel) prevLabel.classList.toggle('active');
    radio.classList.toggle('active');
    prevRadio = radio;
    labels[index].classList.toggle('active');
    prevLabel = labels[index];
    ball.className = `ball pos${index}`;
  });
});
