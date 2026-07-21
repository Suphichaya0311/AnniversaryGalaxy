// =========================
// MUSIC
// =========================

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = true;

// =========================
// AUTO PLAY
// =========================

window.addEventListener("load",()=>{

bgMusic.volume = 0.45;

bgMusic.play().catch(()=>{

musicPlaying = false;

});

});

// =========================
// BUTTON
// =========================

musicButton.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play();

musicPlaying = true;

musicButton.style.transform="scale(1.1) rotate(0deg)";
musicButton.style.opacity="1";

}else{

bgMusic.pause();

musicPlaying = false;

musicButton.style.transform="scale(.9)";
musicButton.style.opacity=".6";

}

});

// =========================
// ROTATE ICON
// =========================

setInterval(()=>{

if(musicPlaying){

musicButton.style.transform += " rotate(10deg)";

}

},200);

// =========================
// SAVE STATUS
// =========================

window.addEventListener("beforeunload",()=>{

localStorage.setItem("musicTime",bgMusic.currentTime);

});

window.addEventListener("load",()=>{

const time = localStorage.getItem("musicTime");

if(time){

bgMusic.currentTime = Number(time);

}

});

// =========================
// END
// =========================
