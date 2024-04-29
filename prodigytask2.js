let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimeDisplay, 10);
  document.getElementById("startBtn").disabled = true;
  document.getElementById("pauseBtn").disabled = false;
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  document.getElementById("startBtn").disabled = false;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  document.getElementById("display").textContent = "00:00:00";
  elapsedTime = 0;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("lapTimes").innerHTML = "";
}

function updateTimeDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  const centiseconds = Math.floor((milliseconds % 1000) / 10).toString().padStart(2, "0");
  return `${minutes}:${seconds}:${centiseconds}`;
}

function recordLap() {
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  document.getElementById("lapTimes").appendChild(lapItem);
}
