
// ==============================
// LOVE TIMER
// ==============================

// เปลี่ยนวันที่คบตรงนี้
// ปี, เดือน(0=ม.ค.), วัน, ชั่วโมง, นาที

const loveDate = new Date(2023,12,20,21,0,0);

// ==============================

const yearBox=document.getElementById("year");
const dayBox=document.getElementById("day");
const hourBox=document.getElementById("hour");
const minuteBox=document.getElementById("minute");
const secondBox=document.getElementById("second");

// ==============================

function updateLoveTimer(){

const now=new Date();

let diff=now-loveDate;

const totalSeconds=Math.floor(diff/1000);

const seconds=totalSeconds%60;

const totalMinutes=Math.floor(totalSeconds/60);

const minutes=totalMinutes%60;

const totalHours=Math.floor(totalMinutes/60);

const hours=totalHours%24;

const days=Math.floor(totalHours/24);

const years=Math.floor(days/365);

const remainDays=days%365;

// ==============================

if(yearBox){

yearBox.innerHTML=years;

}

if(dayBox){

dayBox.innerHTML=remainDays;

}

if(hourBox){

hourBox.innerHTML=hours;

}

if(minuteBox){

minuteBox.innerHTML=minutes;

}

if(secondBox){

secondBox.innerHTML=seconds;

}

}

// ==============================

updateLoveTimer();

setInterval(updateLoveTimer,1000);

// ==============================
// CARD EFFECT
// ==============================

const timerCards=document.querySelectorAll("#loveTimer div");

timerCards.forEach((card,index)=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000+(index*250),

iterations:Infinity

});

});

// ==============================
// NUMBER GLOW
// ==============================

setInterval(()=>{

timerCards.forEach(card=>{

card.style.boxShadow="0 0 25px rgba(130,110,255,.6)";

setTimeout(()=>{

card.style.boxShadow="";

},400);

});

},5000);

// ==============================
// TITLE
// ==============================

const timerTitle=document.querySelector("#timerPopup h2");

if(timerTitle){

timerTitle.animate([

{

letterSpacing:"0px"

},

{

letterSpacing:"3px"

},

{

letterSpacing:"0px"

}

],{

duration:3000,

iterations:Infinity

});

}

// ==============================
// END
// ==============================
