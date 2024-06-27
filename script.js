let score = 0; // Declare and initialize score
let cross = true;
const jumpSound = new Audio('jump.wav');
const gameOverSound = new Audio('gameover.wav');

document.onkeydown = function (e) {
    console.log("Key is : " + e.key)
    if (e.key === "ArrowUp") {
        scooby = document.querySelector('.scooby');
        scooby.classList.add('animatescooby');
        jumpSound.play();
        setTimeout(() => {
            scooby.classList.remove('animatescooby')
        }, 700);

    } else if (e.key === "ArrowRight") {
        scooby = document.querySelector('.scooby');
        scoobyx = parseInt(window.getComputedStyle(scooby, null).getPropertyValue('left'));
        scooby.style.left = scoobyx + 112 + 'px';

    }
    else if (e.key === "ArrowLeft") {
        scooby = document.querySelector('.scooby');
        scoobyx = parseInt(window.getComputedStyle(scooby, null).getPropertyValue('left'));
        scooby.style.left = scoobyx - 112 + 'px';

    }

}
setInterval(() => {
    scooby = document.querySelector('.scooby');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(scooby, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(scooby, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 93 && offsetY < 52) {
        gameOverSound.play();
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstaclean');

    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setImmediate(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

        }, 500)

    }
}, 100);

function updateScore(score) {
    scoreC.innerHTML = "Your Score: " + score
}

