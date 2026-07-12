
// ==============================
// MEMORY GALAXY
// ==============================

const memoryImages=[
"images/gallery/photo01.jpg",
"images/gallery/photo02.jpg",
"images/gallery/photo03.jpg",
"images/gallery/photo04.jpg",
"images/gallery/photo05.jpg",
"images/gallery/photo06.jpg",
"images/gallery/photo07.jpg",
"images/gallery/photo08.jpg",
"images/gallery/photo09.jpg",
"images/gallery/photo10.jpg",
"images/gallery/photo11.jpg",
"images/gallery/photo12.jpg",
"images/gallery/photo13.jpg",
"images/gallery/photo14.jpg",
"images/gallery/photo15.jpg",
"images/gallery/photo16.jpg",
"images/gallery/photo17.jpg",
"images/gallery/photo18.jpg",
"images/gallery/photo19.jpg",
"images/gallery/photo20.jpg"
];

// ==============================

const memoryText=[

"Our first memory ❤️",
"You always make me smile.",
"Every journey with you matters.",
"A beautiful day together.",
"I'll always remember this.",
"You are my happiness.",
"Another little memory.",
"Thank you for staying.",
"I love this moment.",
"Our little adventure.",
"My favorite smile.",
"The day I'll never forget.",
"Always beside you.",
"You are my safe place.",
"Forever starts here.",
"Our beautiful universe.",
"My precious person.",
"Every picture tells our story.",
"Almost there...",
"The last memory ❤️"

];

// ==============================

const stars=document.querySelectorAll(".memoryStar");

const preview=document.getElementById("memoryImage");

const caption=document.getElementById("memoryCaption");

let opened=[];

// ==============================

stars.forEach((star,index)=>{

star.dataset.index=index;

star.addEventListener("click",(e)=>{

preview.style.display="block";

preview.src=memoryImages[index];

caption.innerHTML=memoryText[index];

star.classList.add("opened");

burstHeart(e.clientX,e.clientY);

if(!opened.includes(index)){

opened.push(index);

unlockMemory();

}

});

});

// ==============================
// COMPLETE
// ==============================

function checkMemory(){

if(opened.length==20){

setTimeout(()=>{

showConstellation();

},1500);

}

}

setInterval(checkMemory,1000);

// ==============================
// IMAGE EFFECT
// ==============================

preview.animate([

{

transform:"scale(.95)",

opacity:.7

},

{

transform:"scale(1)",

opacity:1

}

],{

duration:900,

iterations:Infinity

});

// ==============================
// STAR GLOW
// ==============================

setInterval(()=>{

stars.forEach(star=>{

if(star.classList.contains("opened")){

star.style.color="#ffd86e";

star.style.filter="drop-shadow(0 0 15px gold)";

}

});

},500);

// ==============================
// RANDOM TWINKLE
// ==============================

setInterval(()=>{

const random=Math.floor(Math.random()*stars.length);

stars[random].animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.4)"

},

{

transform:"scale(1)"

}

],{

duration:1000

});

},1200);

// ==============================
// END
// ==============================
