
var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var x = 300;
var dx = 5;
var rad = 50;

function animate() {
    requestAnimationFrame(animate);
    
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.arc(x, 300, rad, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.fill();

    if (x + rad > canvas.width || x - rad < 0) {
        dx = -dx;
    }
    x += dx;
}

animate();









