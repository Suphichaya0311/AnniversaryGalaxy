// =========================
// LOVE TIMER
// =========================

// วันที่เริ่มคบ
// 20 ธันวาคม 2023

const loveDate = new Date(2023,12,20,0,0,0);

// =========================

const year=document.getElementById("year");
const day=document.getElementById("day");
const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

// =========================

function updateLoveTimer(){

const now=new Date();

let diff=now-loveDate;

const totalSeconds=Math.floor(diff/1000);

const totalMinutes=Math.floor(totalSeconds/60);

const totalHours=Math.floor(totalMinutes/60);

const totalDays=Math.floor(totalHours/24);

const years=Math.floor(totalDays/365);

const days=totalDays%365;

const hours=totalHours%24;

const minutes=totalMinutes%60;

const seconds=totalSeconds%60;

if(year) year.textContent=years;

if(day) day.textContent=days;

if(hour) hour.textContent=hours;

if(minute) minute.textContent=minutes;

if(second) second.textContent=seconds;

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);

// =========================
// GLOW EFFECT
// =========================

const boxes=document.querySelectorAll(".timeBox");

setInterval(()=>{

boxes.forEach((box,index)=>{

setTimeout(()=>{

box.style.transform="scale(1.08)";

box.style.boxShadow="0 0 20px #9f86ff";

setTimeout(()=>{

box.style.transform="scale(1)";

box.style.boxShadow="0 0 8px rgba(255,255,255,.2)";

},250);

},index*100);

});

},5000);

// =========================
// END
// =========================
