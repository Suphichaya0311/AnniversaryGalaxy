
// ===============================
// MUSIC SYSTEM
// ===============================

const music=document.getElementById("bgMusic");

const musicToggle=document.getElementById("musicToggle");

const musicFloating=document.getElementById("musicFloating");

let isPlaying=false;

// ===============================
// START MUSIC
// ===============================

function startMusic(){

music.volume=0.45;

music.loop=true;

music.play().then(()=>{

isPlaying=true;

updateMusicIcon();

}).catch(()=>{});

}

// ===============================
// PAUSE
// ===============================

function pauseMusic(){

music.pause();

isPlaying=false;

updateMusicIcon();

}

// ===============================
// PLAY
// ===============================

function playMusicAgain(){

music.play();

isPlaying=true;

updateMusicIcon();

}

// ===============================
// ICON
// ===============================

function updateMusicIcon(){

if(isPlaying){

musicFloating.innerHTML="🔊";

if(musicToggle){

musicToggle.innerHTML="Pause Music";

}

}

else{

musicFloating.innerHTML="🔇";

if(musicToggle){

musicToggle.innerHTML="Play Music";

}

}

}

// ===============================
// FLOAT BUTTON
// ===============================

musicFloating.addEventListener("click",()=>{

if(isPlaying){

pauseMusic();

}

else{

playMusicAgain();

}

});

// ===============================
// POPUP BUTTON
// ===============================

if(musicToggle){

musicToggle.addEventListener("click",()=>{

if(isPlaying){

pauseMusic();

}

else{

playMusicAgain();

}

});

}

// ===============================
// AUTO PLAY
// ===============================

window.addEventListener("click",()=>{

if(!isPlaying){

startMusic();

}

},{once:true});

// ===============================
// FADE IN
// ===============================

function fadeInMusic(){

music.volume=0;

music.play();

isPlaying=true;

updateMusicIcon();

let volume=0;

const fade=setInterval(()=>{

volume+=0.02;

music.volume=volume;

if(volume>=0.45){

music.volume=0.45;

clearInterval(fade);

}

},120);

}

// ===============================
// FADE OUT
// ===============================

function fadeOutMusic(){

let volume=music.volume;

const fade=setInterval(()=>{

volume-=0.02;

music.volume=volume;

if(volume<=0){

music.pause();

music.volume=0.45;

isPlaying=false;

updateMusicIcon();

clearInterval(fade);

}

},120);

}

// ===============================
// END
// ===============================
