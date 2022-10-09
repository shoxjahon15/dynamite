let time = 3;
const countDownEl = document.getElementById("countdown");
let box = document.querySelector(".box");

var img = new Image();
img.src = "http://bezrulya.ru/images/catalog/12000/12697.jpg";
img.width = 100;
img.height = 100;
img.name = "spant";


setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  if (time < -1) {
    box.innerHTML = 'BOOM!!!';



    document.querySelector('.container').style.display = 'none'


  }
}