const taunts = [
    "Come on",
    "Click me",
    "Give Up",
    "Haha",
    "Loser",
    "Slowpoke"
];

function getHighScore()
{
    const highscore = window.localStorage.getItem("highscore");
    if (highscore === null)
    {
        return 0;
    }
    else
    {
        return highscore;
    }
}

function setHighScore(score)
{
    window.localStorage.setItem("highscore", score);
}

function moveButton(button)
{
    const windowHeight = window.innerHeight - 150;
    const windowWidth = window.innerWidth - 450;

    let randomHeight = Math.floor(Math.random() * windowHeight) + 74;
    let randomWidth = Math.floor(Math.random() * windowWidth) + 224;

    button.style.top = `${randomHeight}px`;
    button.style.left = `${randomWidth}px`;
}

function loadMainMenu()
{
    const menu = document.querySelector("#menu");
    const endgame = document.querySelector("#endgame");
    const game = document.querySelector("#game");

    menu.style.display = "block";
    endgame.style.display = "none";
    game.style.display = "none";

    const highScoreDisplay = document.querySelector("#menu-high-score");

    let highscore = getHighScore();

    highScoreDisplay.innerHTML = `High Score: ${highscore}`;
}

function loadGame()
{
    const menu = document.querySelector("#menu");
    const endgame = document.querySelector("#endgame");
    const game = document.querySelector("#game");

    menu.style.display = "none";
    endgame.style.display = "none";
    game.style.display = "block";
    
    let clicks = 0;
    let timeLeft = 60;

    const button = document.querySelector("#button");
    const clickCounter = document.querySelector("#score");
    const timer = document.querySelector("#timer");

    button.onmouseover = () => {
        moveButton(button);

        let randomChoice = Math.floor(Math.random() * 100) % taunts.length;
        button.innerHTML = taunts[randomChoice];
    };

    button.onclick = () => {
        moveButton(button);

        let randomChoice = Math.floor(Math.random() * 100) % taunts.length;
        button.innerHTML = taunts[randomChoice];

        clicks++;
        clickCounter.innerHTML = `Clicks: ${clicks}`;
    };

    let interval = setInterval(() => {
        timeLeft--;
        timer.innerHTML = `Time Left: ${timeLeft}`;

        if (timeLeft <= 0)
        {
            window.clearInterval(interval);
            window.setTimeout(loadEndgame(clicks), 3000);
        }
    }, 1000);
}

function loadEndgame(score)
{
    const menu = document.querySelector("#menu");
    const endgame = document.querySelector("#endgame");
    const game = document.querySelector("#game");

    menu.style.display = "none";
    endgame.style.display = "block";
    game.style.display = "none";

    const scoreDisplay = document.querySelector("#end-score");
    const highScoreDisplay = document.querySelector("#end-high-score");

    scoreDisplay.innerHTML = `Your Score: ${score}`;

    let highscore;
    
    if (score > getHighScore())
    {
        highscore = score;
        setHighScore(score);
        document.querySelector("#new-high-score").innerHTML = "New High Score!";
    }
    else 
    {
        highscore = getHighScore();
    }

    highScoreDisplay.innerHTML = `High Score: ${highscore}`;
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".play").forEach(button => button.onclick = () => loadGame());

    loadMainMenu();

});