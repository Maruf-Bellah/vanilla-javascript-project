(function () {
  function detailClock() {
    const date = new Date();
    const houre = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    const session = houre > 12 ? "pm" : "am";

    const formateTwelveHoure = houre > 12 ? houre - 12 : houre;
    const formateHoure =
      formateTwelveHoure < 10 ? "0" + formateTwelveHoure : formateTwelveHoure;
    const formateMinuites = minutes < 10 ? "0" + minutes : minutes;
    const formateSecond = second < 10 ? "0" + second : second;

    document.getElementById("houre").innerText = formateHoure;
    document.getElementById("minute").innerText = formateMinuites;
    document.getElementById("second").innerText = formateSecond;
    document.getElementById("session").innerText = session;

    setTimeout(detailClock, 1000);
  }
  detailClock();
})();
