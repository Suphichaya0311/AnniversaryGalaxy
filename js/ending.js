// =========================
// CONSTELLATION ENDING
// =========================

const constellationEnding =
document.getElementById("constellationEnding");

const canvas =
document.getElementById("constellationCanvas");

const ctx = canvas.getContext("2d");

// =========================

function resizeCanvas(){

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

// =========================
// HEART CONSTELLATION
// =========================

const stars=[

{x:.50,y:.18},
{x:.42,y:.14},
{x:.34,y:.18},
{x:.28,y:.28},
{x:.30,y:.40},
{x:.40,y:.50},
{x:.50,y:.62},
{x:.60,y:.50},
{x:.70,y:.40},
{x:.72,y:.28},
{x:.66,y:.18},
{x:.58,y:.14}

];

// =========================

function drawConstellation(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.lineWidth=2;

ctx.strokeStyle="rgba(180,180,255,.8)";

ctx.shadowBlur=15;

ctx.shadowColor="white";

// เส้น

ctx.beginPath();

ctx.moveTo(
stars[0].x*canvas.width,
stars[0].y*canvas.height
);

for(let i=1;i<stars.length;i++){

ctx.lineTo(
stars[i].x*canvas.width,
stars[i].y*canvas.height
);

}

ctx.closePath();

ctx.stroke();

// ดาว

stars.forEach(star=>{

ctx.beginPath();

ctx.arc(
star.x*canvas.width,
star.y*canvas.height,
4,
0,
Math.PI*2
);

ctx.fillStyle="white";

ctx.fill();

});

}

// =========================
// SHOW ENDING
// =========================

function playEnding(){

constellationEnding.style.display="flex";

drawConstellation();

document.querySelector(".endingMessage").style.opacity="1";

heartSky();

}

// =========================
// HEART SKY
// =========================

function heartSky(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=
(16+Math.random()*24)+"px";

heart.style.pointerEvents="none";

heart.style.transition="7s linear";

heart.style.zIndex="99999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translateY(-120vh)
translateX(${Math.random()*120-60}px)
rotate(${Math.random()*720}deg)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},7000);

},350);

}

// =========================
// BUTTON
// =========================

const restartGalaxy =
document.getElementById("restartGalaxy");

restartGalaxy.onclick=()=>{

location.reload();

};

// =========================

window.playEnding=playEnding;

// =========================
// END
// =========================
