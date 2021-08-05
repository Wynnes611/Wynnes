var live = 50;
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var points = [];
var colors=["249,205,173","254,67,101","252,157,154","200,200,169","131,175,155"];
var colors2=["182,194,154","138,151,123","244,208,0","229,131,8","220,87,18"];
window.addEventListener("mousemove", function (event) {
  for (var i = 0; i < 5; i++) {
    points.push({
      sx: event.x,
      sy: event.y,
      size: Math.random() * 10,
      vx: 0.5 - Math.random(),
      vy: 0.5 - Math.random(),
      life: live,
      color: colors[parseInt(Math.random()*colors.length)],
    });
  }
});
window.addEventListener("click", function (event) {
  for (var i = 0; i < 10; i++) {
    points.push({
      sx: event.x,
      sy: event.y,
      size: Math.random() * 40,
      vx: 0.5 - Math.random(),
      vy: 0.5 - Math.random(),
      life: live,
      color: colors2[parseInt(Math.random()*colors2.length)],
    });
  }
});

function drawPoints() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < points.length; i++) {
    point = points[i];
    context.beginPath();
    context.arc(point.sx, point.sy, point.size, Math.PI * 2, false);
    context.fillStyle = "rgba("+point.color+","+point.life/live+")";
    context.fill();
    point.life--;
    if (point.life <= 0) {
      points.splice(i, 1);
    }
    point.sx += point.vx * 5;
    point.sy += point.vy * 5;
  }
}

setInterval(drawPoints, 20);
