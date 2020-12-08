setInterval(setTime, 1000)

const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

function setTime() {
    const date = new Date();
    const secondsRotationAngle = date.getSeconds() / 60;
    const minutesRotationAngle = (secondsRotationAngle + date.getMinutes()) / 60
    const hoursRotationAngle = (minutesRotationAngle + date.getHours()) / 12

    setRotation(second, secondsRotationAngle);
    setRotation(minute, minutesRotationAngle);
    setRotation(hour, hoursRotationAngle);
}

function setRotation(element, rotationAngle) {
    element.style.setProperty('--rotation', rotationAngle * 360)
}

setTime();