
// ==============================
// GALAXY WORLD
// ==============================

const starContainer=document.getElementById("starContainer");
const shootingStars=document.getElementById("shootingStars");
const heartParticles=document.getElementById("heartParticles");

// ==============================
// CREATE STARS
// ==============================

function createStars(){

for(let i=0;i<300;i++){

const star=document.createElement("div");

star.classList.add("star");

const r=Math.random();

if(r<0.6){

star.classList.add("small");

}

else if(r<0.9){

star.classList.add("medium");

}

else{

star.classList.add("big");

}

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

starContainer.appendChild(star);

}

}

createStars();

// ==============================
// SHOOTING STAR
// ==============================

function shootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.top=Math.random()*35+"%";

star.style.left=(80+Math.random()*20)+"%";

shootingStars.appendChild(star);

setTimeout(()=>{

star.remove();

},4000);

}

setInterval(()=>{

shootingStar();

},6000);

// ==============================
// HEART FLOAT
// ==============================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-30px";

heart.style.fontSize=(10+Math.random()*18)+"px";

heartParticles.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(()=>{

createHeart();

},1800);

// ==============================
// STAR DUST
// ==============================

function createDust(){

const dust=document.createElement("div");

dust.className="dust";

dust.style.left=Math.random()*100+"%";

dust.style.top=(80+Math.random()*20)+"%";

starContainer.appendChild(dust);

setTimeout(()=>{

dust.remove();

},12000);

}

setInterval(createDust,700);
// ==============================
// MOUSE PARALLAX
// ==============================

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

const glow=document.querySelector(".galaxyGlow");

if(glow){

glow.style.transform=`translate(${x}px,${y}px)`;

}

});

// ==============================
// STAR HOVER EFFECT
// ==============================

document.addEventListener("mousemove",(e)=>{

const stars=document.querySelectorAll(".star");

stars.forEach((star)=>{

const rect=star.getBoundingClientRect();

const dx=e.clientX-(rect.left+rect.width/2);

const dy=e.clientY-(rect.top+rect.height/2);

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<80){

star.style.transform="scale(2)";

star.style.boxShadow="0 0 15px white";

}

else{

star.style.transform="scale(1)";

star.style.boxShadow="none";

}

});

});

// ==============================
// RANDOM STAR BLINK
// ==============================

setInterval(()=>{

const stars=document.querySelectorAll(".star");

const random=stars[Math.floor(Math.random()*stars.length)];

if(!random) return;

random.animate([

{opacity:.3},

{opacity:1},

{opacity:.3}

],{

duration:1200

});

},350);

// ==============================
// CONSTELLATION
// ==============================

let memoryOpened=0;

function unlockMemory(){

memoryOpened++;

if(memoryOpened>=20){

showConstellation();

}

}

// ==============================
// ENDING
// ==============================

function showConstellation(){

const ending=document.getElementById("constellationEnding");

if(!ending) return;

ending.style.display="flex";

ending.classList.add("constellation");

}

// ==============================
// HEART BURST
// ==============================

function burstHeart(x,y){

for(let i=0;i<30;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.fontSize=(14+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.transition="2s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.left=(x+(Math.random()*300-150))+"px";

heart.style.top=(y+(Math.random()*300-150))+"px";

heart.style.opacity="0";

heart.style.transform=`scale(${1+Math.random()*2})`;

},50);

setTimeout(()=>{

heart.remove();

},2200);

}

}

// ==============================
// CLICK STAR
// ==============================

document.querySelectorAll(".memoryStar").forEach((star)=>{

star.addEventListener("click",(e)=>{

unlockMemory();

burstHeart(e.clientX,e.clientY);

});

});

// ==============================
// FLOAT MOON
// ==============================

const moon=document.querySelector(".moon");

if(moon){

moon.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0px)"

}

],{

duration:6000,

iterations:Infinity

});

}

// ==============================
// END
// ==============================
