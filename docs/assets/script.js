let now = new Date();
let timer = new Date();

timer.setDate(timer.getDate() + 8);
timer.setHours(timer.getHours() + 23);
timer.setMinutes(timer.getMinutes() + 55);
timer.setSeconds(timer.getSeconds() + 41);

let diff, dias, horas, minutos, segundos;
let _dias = document.querySelector('#days');
let _horas = document.querySelector('#hours');
let _minutos = document.querySelector('#minutes');
let _segundos = document.querySelector('#seconds');

setInterval(() => {
    timer.setSeconds(timer.getSeconds() - 1);
    loadDiferenca();
    mudaTimer();
}, 1000);

function loadDiferenca() {
    diff = moment(timer, "DD/MM/YYYY HH:mm:ss").diff(moment(now, "DD/MM/YYYY HH:mm:ss"));
    dias = moment.duration(diff)._data.days.toString().padStart(2, '0');
    horas = moment.duration(diff)._data.hours.toString().padStart(2, '0');
    minutos = moment.duration(diff)._data.minutes.toString().padStart(2, '0');
    segundos = moment.duration(diff)._data.seconds.toString().padStart(2, '0');
}

function mudaTimer() {
    _dias.innerHTML = dias;
    _horas.innerHTML = horas;
    _minutos.innerHTML = minutos;
    _segundos.innerHTML = segundos;
}



