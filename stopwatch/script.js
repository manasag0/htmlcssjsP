const timerEl = document.getElementById('timer')
const startEl = document.getElementById('start')
const stopEl = document.getElementById('stop')
const resetEl = document.getElementById('reset')
const timehistoryEl = document.getElementById('time-list')

let startTiming = 0;
let elapsedTime =0;
let timeInterval;// start time function

// pusing to array stopped timings 

let history = [];

function timeUpdate() {
    timehistoryEl.innerHTML = "";
    history.forEach((time, index) => {
      let liEl = document.createElement('li');
      liEl.innerText = `Stop at ${index + 1}: ${formatTime(time)}`;
      timehistoryEl.appendChild(liEl);
    });
  }

//logic for starting timing with milli seconds
function formatTime(elapsedTime){
 const milliSeconds = Math.floor((elapsedTime%1000)/10);
 const seconds = Math.floor((elapsedTime % (1000 * 60))/100);
 const minutes = Math.floor((elapsedTime%(1000*60*60))/(1000*60));
 const hours = Math.floor(elapsedTime/(1000*60*60))
 return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
  );
}




function startTimer(){
    startTiming = Date.now() - elapsedTime;

 timeInterval = setInterval(()=>{
    elapsedTime = Date.now()-startTiming;
    timerEl.textContent=formatTime(elapsedTime)
    ;
 },10)
 startEl.disabled = true;
 stopEl.disabled = false;
}

function resetStopwatch() {
// Clear the array of stopped times
    displayStoppedTimes(); // Update the displayed list of stopped times
timerEl.innerText ='00:00:00.000'// Clear the display
  }
//stop time function
function stopTimer(){
    clearInterval(timeInterval)
    history.pushState(elapsedTime);
    timeUpdate()
    startEl.disabled = false;
    stopEl.disabled = true;

}
// reset time function
function resetTimer(){
    clearInterval(timeInterval);

    elapsedTime = 0;
    timerEl.textContent = "00:00:00"

    startEl.disabled = false;
    stopEl.disabled = true;
}
//appending to buttons

startEl.addEventListener('click',startTimer);
stopEl.addEventListener('click',stopTimer);
resetEl.addEventListener('click',resetTimer);