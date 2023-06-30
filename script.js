let paddle1 = document.getElementById("paddle1");
let paddle2 = document.getElementById("paddle2");
let ball = document.getElementById("ball");
let height = document.body.clientHeight;
let width = document.body.clientWidth;
let xspeed = 20, yspeed = 15;

// initial styles
paddle2.style.top = height - 200 + 'px'
ball.style.left = width / 2 + 'px';
ball.style.top = height / 2 + 'px';

// paddle movements
document.body.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            paddle1.style.top = Math.max(0, parseFloat(paddle1.style.top) - 60) + 'px';
            break;
        case "s":
            paddle1.style.top = Math.min(height - 200, parseFloat(paddle1.style.top) + 60) + 'px';
            break;
        case "ArrowUp":
            paddle2.style.top = Math.max(0, parseFloat(paddle2.style.top) - 60) + 'px';
            break;
        case "ArrowDown":
            paddle2.style.top = Math.min(height - 200, parseFloat(paddle2.style.top) + 60) + 'px';
            break;
    }
});

let direction = 1;


// Ball movement
setInterval(() => {
    let x = parseFloat(ball.style.left), y = parseFloat(ball.style.top);
    x += xspeed;
    y += yspeed;
    ball.style.left = x + 'px'
    ball.style.top = y + 'px';
    if(y < 0 || y >= height - 100) yspeed *= -1;
    else if(x < -100 || x >= width) {
        ball.style.left = width / 2 + 'px';
        ball.style.top = height / 2 + 'px';
    }
    if(x <= 25 && y >= parseFloat(paddle1.style.top) && y <= parseFloat(paddle1.style.top) + 200)   xspeed *= -1;
    if(x >= width - 100 && y >= parseFloat(paddle2.style.top) && y <= parseFloat(paddle2.style.top) + 200)    xspeed *= -1;
}, 200);