
// ===============================
// INTRO
// ===============================

const intro = document.getElementById("intro");
const zoomScene = document.getElementById("zoomScene");
const galaxyWorld = document.getElementById("galaxyWorld");

const heartButton = document.getElementById("heartButton");

const bgMusic = document.getElementById("bgMusic");

const loadingScreen = document.getElementById("loadingScreen");

const musicButton = document.getElementById("musicFloating");

// ===============================
// START
// ===============================

window.onload=()=>{

loadingScreen.style.display="none";

};

// ===============================
// HEART
// ===============================

heartButton.addEventListener("click",()=>{

heartButton.disabled=true;

playMusic();

intro.classList.add("introHide");

setTimeout(()=>{

intro.style.display="none";

zoomScene.style.display="flex";

zoomScene.classList.add("zoomStart");

},1800);

setTimeout(()=>{

zoomScene.style.display="none";

galaxyWorld.style.display="block";

galaxyWorld.classList.add("galaxyAppear");

},5600);

});

// ===============================
// MUSIC
// ===============================

function playMusic(){

bgMusic.volume=.45;

bgMusic.play().catch(()=>{});

}

// ===============================
// BUTTON
// ===============================

musicButton.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play();

musicButton.innerHTML="🔊";

}

else{

bgMusic.pause();

musicButton.innerHTML="🔇";

}

});

// ===============================
// ESC
// ===============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

document.querySelectorAll(".popup").forEach(p=>{

p.classList.remove("active");

});

}

});

// ===============================
// LOADING EFFECT
// ===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

loadingScreen.style.opacity="0";

setTimeout(()=>{

loadingScreen.style.display="none";

},1000);

},800);

});

// ===============================
// INTRO STAR
// ===============================

const introStars=document.querySelector(".intro-stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.style.position="absolute";

star.style.width=Math.random()*3+1+"px";

star.style.height=star.style.width;

star.style.background="white";

star.style.borderRadius="50%";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.opacity=Math.random();

star.style.animation=`twinkleStar ${2+Math.random()*4}s infinite`;

introStars.appendChild(star);

}

// ===============================
// HEART PULSE
// ===============================

setInterval(()=>{

heartButton.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.18)"

},

{

transform:"scale(1)"

}

],{

duration:900

});

},1800);

// ===============================
// TITLE FLOAT
// ===============================

document.querySelector(".intro-content").animate([

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

duration:4000,

iterations:Infinity

});

// ===============================
// END
// ===============================
