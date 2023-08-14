// window.onload = displayClock();


function displayClock(){
    var display = new Date().toLocaleTimeString();
    document.getElementById('demo').innerHTML = display;
    setTimeout(displayClock, 1000)
}
displayClock()