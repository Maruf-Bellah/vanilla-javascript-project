function myFunction() {
  const date = new Date();
  const houre = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const miliSecond = date.getMilliseconds();

  document.getElementById("houre").innerHTML = houre;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("milisecond").innerHTML = miliSecond;
}

let timer = null;


function startButton() {
  timer = setInterval(() => {
    myFunction();
  }, 10);
}


function stopButton() {
  clearTimeout(timer);
}
