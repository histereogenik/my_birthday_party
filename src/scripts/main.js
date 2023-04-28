AOS.init();

const partyDate = new Date("Jun 14, 2023 00:00:00");
const eventTimeStamp = partyDate.getTime();

const timeCountdown = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const distanceTillTheParty = eventTimeStamp - nowTimeStamp;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMS = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysTillTheParty = Math.floor(distanceTillTheParty / daysInMs);
    const hoursTillTheParty = Math.floor((distanceTillTheParty % daysInMs) / hoursInMS);
    const minutesTillTheParty = Math.floor((distanceTillTheParty % hoursInMS) / minutesInMs);
    const secondsTillTheParty = Math.floor((distanceTillTheParty % minutesInMs) / 1000);

    document.getElementById('days').innerHTML = `${daysTillTheParty}`;
    document.getElementById('hours').innerHTML = `${hoursTillTheParty}`;
    document.getElementById('minutes').innerHTML = `${minutesTillTheParty}`;
    document.getElementById('seconds').innerHTML = `${secondsTillTheParty}`;

    if (distanceTillTheParty < 0) {
        clearInterval(timeCountdown);
        document.getElementById('days').innerHTML = "you";
        document.getElementById('hours').innerHTML = "are";
        document.getElementById('minutes').innerHTML = "too";
        document.getElementById('seconds').innerHTML = "late";
    }
}, 1000)