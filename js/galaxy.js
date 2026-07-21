// =========================
// GALAXY
// =========================

const starsContainer = document.getElementById("starsContainer");
const shootingStars = document.getElementById("shootingStars");

// =========================
// CREATE STARS
// =========================

function createStars(){

starsContainer.innerHTML="";

for(let i=0;i<300;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=
(2+Math.random()*4)+"s";

star.style.opacity=.3+Math.random();

starsContainer.appendChild(star);

}

}

createStars();

// =========================
// SHOOTING STAR
// =========================

function createShootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.left=(-10+Math.random()*20)+"%";

star.style.top=Math.random()*35+"%";

star.style.animationDuration=
(2+Math.random())+"s";

shootingStars.appendChild(star);

setTimeout(()=>{

star.remove();

},3500);

}

setInterval(createShootingStar,2200);

// =========================
// MENU POPUP
// =========================

const timerBtn=document.getElementById("timerBtn");
const letterBtn=document.getElementById("letterBtn");
const memoryBtn=document.getElementById("memoryBtn");
const storyBtn=document.getElementById("storyBtn");
const puzzleBtn=document.getElementById("puzzleBtn");
const wishBtn=document.getElementById("wishBtn");

const timerPopup=document.getElementById("timerPopup");
const letterPopup=document.getElementById("letterPopup");
const memoryPopup=document.getElementById("memoryPopup");
const storyPopup=document.getElementById("storyPopup");
const puzzlePopup=document.getElementById("puzzlePopup");
const wishPopup=document.getElementById("wishPopup");

timerBtn.onclick=()=>timerPopup.style.display="flex";

letterBtn.onclick=()=>letterPopup.style.display="flex";

memoryBtn.onclick=()=>memoryPopup.style.display="flex";

storyBtn.onclick=()=>storyPopup.style.display="flex";

puzzleBtn.onclick=()=>puzzlePopup.style.display="flex";

wishBtn.onclick=()=>wishPopup.style.display="flex";

// =========================
// CLOSE POPUP
// =========================

document.querySelectorAll(".close").forEach(btn=>{

btn.onclick=function(){

this.parentElement.parentElement.style.display="none";

}

});

window.onclick=function(e){

document.querySelectorAll(".popup").forEach(pop=>{

if(e.target===pop){

pop.style.display="none";

}

});

};

// =========================
// ANIMALS
// =========================

document.querySelectorAll(".animal").forEach(animal=>{

animal.onclick=function(){

this.style.transform="scale(1.25)";

setTimeout(()=>{

this.style.transform="";

},300);

};

});

// =========================
// MUSIC BUTTON
// =========================

const musicButton=document.getElementById("musicButton");
const bgMusic=document.getElementById("bgMusic");

musicButton.onclick=function(){

if(bgMusic.paused){

bgMusic.play();

}else{

bgMusic.pause();

}

};

// =========================
// STORY BOOK
// =========================

const pages=document.querySelectorAll(".page");

let currentPage=0;

function showPage(){

pages.forEach(p=>p.classList.remove("active"));

pages[currentPage].classList.add("active");

}

document.getElementById("nextPage").onclick=()=>{

currentPage++;

if(currentPage>=pages.length){

currentPage=0;

}

showPage();

};

document.getElementById("prevPage").onclick=()=>{

currentPage--;

if(currentPage<0){

currentPage=pages.length-1;

}

showPage();

};

showPage();
