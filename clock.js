let fulldate = document.getElementById('fulldate');
let time = document.getElementById('time');

function updateTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dt = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let shortTime = hours + ":" + minutes + ":" + seconds;
    let shortDate = dt + "/" + month + "/" + year;
    fulldate.innerHTML = shortDate;
    time.innerHTML = shortTime;
}

setInterval(updateTime, 1000);