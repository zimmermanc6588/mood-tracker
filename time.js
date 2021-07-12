// use getDate getMonth and getYear (months are 0-11)
// make date show up in window
// make sure the date can update itself evryday

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDate();
    let n = today.getMonth();
    let y = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = y + "/" + (n + 1) + "/" + d + " " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

startTime();

