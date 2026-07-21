// =========================
// MEMORY GALAXY
// =========================

const memoryImages=[

"images/gallery/memory01.jpg",
"images/gallery/memory02.jpg",
"images/gallery/memory03.jpg",
"images/gallery/memory04.jpg",
"images/gallery/memory05.jpg",
"images/gallery/memory06.jpg",
"images/gallery/memory07.jpg",
"images/gallery/memory08.jpg",
"images/gallery/memory09.jpg",
"images/gallery/memory10.jpg",
"images/gallery/memory11.jpg",
"images/gallery/memory12.jpg",
"images/gallery/memory13.jpg",
"images/gallery/memory14.jpg",
"images/gallery/memory15.jpg",
"images/gallery/memory16.jpg",
"images/gallery/memory17.jpg",
"images/gallery/memory18.jpg",
"images/gallery/memory19.jpg",
"images/gallery/memory20.jpg"

];

const memoryCaption=document.getElementById("memoryCaption");
const memoryImage=document.getElementById("memoryImage");

let currentMemory=0;

// =========================
// OPEN MEMORY
// =========================

function showMemory(index){

currentMemory=index;

memoryImage.src=memoryImages[index];

memoryCaption.innerHTML=
"Memory "+(index+1)+" ❤️";

memoryImage.classList.remove("fadeIn");

void memoryImage.offsetWidth;

memoryImage.classList.add("fadeIn");

}

// =========================

showMemory(0);

// =========================
// CLICK IMAGE
// =========================

memoryImage.onclick=()=>{

currentMemory++;

if(currentMemory>=memoryImages.length){

currentMemory=0;

}

showMemory(currentMemory);

};

// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown",(e)=>{

if(document.getElementById("memoryPopup").style.display!="flex") return;

if(e.key=="ArrowRight"){

currentMemory++;

if(currentMemory>=memoryImages.length){

currentMemory=0;

}

showMemory(currentMemory);

}

if(e.key=="ArrowLeft"){

currentMemory--;

if(currentMemory<0){

currentMemory=memoryImages.length-1;

}

showMemory(currentMemory);

}

});

// =========================
// AUTO SLIDE
// =========================

setInterval(()=>{

if(document.getElementById("memoryPopup").style.display=="flex"){

currentMemory++;

if(currentMemory>=memoryImages.length){

currentMemory=0;

}

showMemory(currentMemory);

}

},5000);

// =========================
// COMPLETE MEMORY
// =========================

let viewed=new Set();

memoryImage.addEventListener("load",()=>{

viewed.add(currentMemory);

if(viewed.size==20){

if(window.playEnding){

setTimeout(()=>{

playEnding();

},1200);

}

}

});

// =========================
// END
// =========================
