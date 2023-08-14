function displayClock(){
    const date = new Date();
    const houre = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const session = houre > 10 ? 'pm' : 'am';

    const formateTwelve = houre > 12 ? houre -12 : houre;

    const formateHoure = houre < 10 ? '0' + formateTwelve : formateTwelve;
    const formateMinute = minute < 10 ? '0' + minute : minute;
    const formateSecond = second < 10 ? '0' + second : second;

    document.getElementById('houre').innerHTML = formateHoure;
    document.getElementById('minute').innerHTML = formateMinute;
    document.getElementById('second').innerHTML = formateSecond;
    document.getElementById('session').innerHTML = session;

    setTimeout(displayClock, 1000)

}
displayClock()