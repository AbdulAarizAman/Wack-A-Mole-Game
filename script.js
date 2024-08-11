// script.js
let score = 0;
let activeHole = null;
let gameInterval = null;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const scoreDisplay = document.getElementById('score');
const holes = document.querySelectorAll('.hole');

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole === activeHole) {
            score++;
            scoreDisplay.textContent = score;
            deactivateHole();
        }
    });
});

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameInterval = setInterval(() => {
        deactivateHole();
        activateRandomHole();
    }, 1000);
}

function stopGame() {
    clearInterval(gameInterval);
    deactivateHole();
    gameInterval = null;
}

function activateRandomHole() {
    const randomIndex = Math.floor(Math.random() * holes.length);
    activeHole = holes[randomIndex];
    activeHole.classList.add('active');
    const mole = document.createElement('div');
    mole.classList.add('mole');
    activeHole.appendChild(mole);
}

function deactivateHole() {
    if (activeHole) {
        activeHole.classList.remove('active');
        activeHole.innerHTML = '';
        activeHole = null;
    }
}
