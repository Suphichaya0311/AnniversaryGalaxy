// =========================
// INTRO
// =========================

const intro=document.getElementById("intro");
const zoomScene=document.getElementById("zoomScene");
const galaxyScene=document.getElementById("galaxyScene");

const heartButton=document.getElementById("heartButton");

const bgMusic=document.getElementById("bgMusic");

// =========================
// START
// =========================

heartButton.addEventListener("click",startGalaxy);

function startGalaxy(){

// เล่นเพลง
bgMusic.volume=0.45;

bgMusic.play().catch(()=>{});

// ซ่อน Intro
intro.classList.add("fadeOut");

// แสดงฉาก Zoom
setTimeout(()=>{

intro.style.display="none";

zoomScene.style.display="flex";

createWarpStars();

},900);

// Zoom เข้า Galaxy
setTimeout(()=>{

zoomScene.classList.add("fadeOut");

},4200);

// เข้า Galaxy
setTimeout(()=>{

zoomScene.style.display="none";

galaxyScene.style.display="block";

galaxyScene.classList.add("fadeIn");

},5000);

}

// =========================
// WARP STAR
// =========================

function createWarpStars(){

const container=document.querySelector(".warpStars");

container.innerHTML="";

for(let i=0;i<260;i++){

const star=document.createElement("div");

star.className="warpStar";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*2+"s";

star.style.animationDuration=
(1+Math.random()*2)+"s";

container.appendChild(star);

}

}

// =========================
// LOADING
// =========================

window.addEventListener("load",()=>{

const loading=document.getElementById("loadingScreen");

setTimeout(()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},800);

},1000);

});

// =========================
// HEART EFFECT
// =========================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=(45+Math.random()*10)+"%";

heart.style.top="62%";

heart.style.color="#ff5ca8";

heart.style.pointerEvents="none";

heart.style.fontSize=
(12+Math.random()*16)+"px";

heart.style.opacity=".9";

heart.style.transition="2.5s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translate(
${Math.random()*120-60}px,
-${180+Math.random()*120}px
)
scale(${1+Math.random()})`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},2600);

},900);

// =========================
// END
// =========================
