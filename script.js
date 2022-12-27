window.onload = function () {
  console.log("hello");
  let seconds = 0;
  let centiseconds = 0;
  let interval;
  document.addEventListener("click", startTest);

  function startTest(){
    document.getElementById("Prompt").innerHTML ="Click anywhere on the screen when the screen turns white.";
    document.getElementById("Seconds").innerHTML = "0";
    document.getElementById("Centiseconds").innerHTML = "00";
    seconds = 0;
    centiseconds = 0;
    setTimeout(startTimer, Math.floor(Math.random() * 5 + 1) * 1000)
  }

  function startTimer() {
    document.removeEventListener("click", startTest);
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    interval = setInterval(setTimer, 10);
    document.addEventListener("click", stopTest);
  }

  function stopTest() {
    document.removeEventListener("click", stopTest);
    clearInterval(interval);
    document.getElementById("Prompt").innerHTML ="Click anywhere on the screen to start."
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.addEventListener("click", startTest);
  }

  function setTimer() {
    centiseconds++;
    if (centiseconds > 99) {
      seconds++;
      centiseconds = 0;
    }
    if (centiseconds < 10) {
      document.getElementById("Centiseconds").innerHTML = "0" + centiseconds;
    } else {
      document.getElementById("Centiseconds").innerHTML = centiseconds;
    }
    document.getElementById("Seconds").innerHTML = seconds;
  }
};
