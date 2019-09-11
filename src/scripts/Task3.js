import moment from 'moment';

function updateTime () {
    document.getElementById("datetime").innerText = moment().format("Do MMMM YYYY HH:mm:ss");
}

setInterval(updateTime, 1000);

