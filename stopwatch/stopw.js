const display = document.getElementById('display');

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;


function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(update, 10);  // fixed name
        isRunning = true;
    }
}


function stop(){
    if(isRunning){
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}


function reset(){
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    timerInterval = null;
    isRunning = false;

    display.textContent = "00:00:00:00";
}


function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2,'0');
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,'0');
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000).toString().padStart(2,'0');
    const milliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2,'0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}