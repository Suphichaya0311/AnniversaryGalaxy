
// ==============================
// ENDING
// Constellation Of Us
// ==============================

const ending=document.getElementById("constellationEnding");
const canvas=document.getElementById("constellationCanvas");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// ==============================

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

// ==============================
// HEART CONSTELLATION
// ==============================

const stars=[

{x:.50,y:.22},

{x:.43,y:.17},
{x:.37,y:.17},
{x:.31,y:.21},
{x:.28,y:.30},
{x:.31,y:.39},
{x:.38,y:.46},
{x:.50,y:.58},

{x:.62,y:.46},
{x:.69,y:.39},
{x:.72,y:.30},
{x:.69,y:.21},
{x:.63,y:.17},
{x:.57,y:.17},

{x:.50,y:.30},

{x:.44,y:.28},
{x:.56,y:.28},

{x:.41,y:.36},
{x:.59,y:.36},

{x:.50,y:.47}

];

// ==============================

const lines=[

[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],

[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,0],

[14,15],[14,16],[15,17],[16,18],[17,19],[18,19]

];

// ==============================

function drawStar(x,y){

ctx.beginPath();

ctx.arc(x,y,4,0,Math.PI*2);

ctx.fillStyle="white";

ctx.shadowBlur=25;

ctx.shadowColor="white";

ctx.fill();

}

// ==============================

function drawLine(a,b){

ctx.beginPath();

ctx.moveTo(

stars[a].x*canvas.width,

stars[a].y*canvas.height

);

ctx.lineTo(

stars[b].x*canvas.width,

stars[b].y*canvas.height

);

ctx.strokeStyle="rgba(180,180,255,.85)";

ctx.lineWidth=2;

ctx.stroke();

}

// ==============================

function playEnding(){

ending.style.display="flex";

ctx.clearRect(0,0,canvas.width,canvas.height);

let i=0;

const timer=setInterval(()=>{

if(i<stars.length){

drawStar(

stars[i].x*canvas.width,

stars[i].y*canvas.height

);

}

if(i<lines.length){

drawLine(

lines[i][0],

lines[i][1]

);

}

i++;

if(i>stars.length){

clearInterval(timer);

showEndingText();

}

},350);

}

// ==============================

function showEndingText(){

document.querySelector(".endingMessage").style.opacity="1";

createEndingHearts();

}

// ==============================

function createEndingHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.color="#ff7ebc";

heart.style.fontSize=(16+Math.random()*22)+"px";

heart.style.pointerEvents="none";

heart.style.transition="7s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=

`translateY(-110vh)
translateX(${Math.random()*120-60}px)
rotate(360deg)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},7000);

},350);

}

// ==============================

const restart=document.getElementById("restartGalaxy");

if(restart){

restart.onclick=()=>{

location.reload();

};

}

// ==============================

window.playEnding=playEnding;

// ==============================
// END
// ==============================
