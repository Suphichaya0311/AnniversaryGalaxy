
// ==============================
// POPUP SYSTEM
// ==============================

const popups=document.querySelectorAll(".popup");

function openPopup(id){

const popup=document.getElementById(id);

if(!popup) return;

popup.classList.add("active");

}

function closePopup(id){

const popup=document.getElementById(id);

if(!popup) return;

popup.classList.remove("active");

}

// ==============================
// MENU
// ==============================

document.getElementById("timerMenu").onclick=()=>{

openPopup("timerPopup");

};

document.getElementById("letterMenu").onclick=()=>{

openPopup("letterPopup");

document.querySelector(".letterBox").classList.add("open");

};

document.getElementById("puzzleMenu").onclick=()=>{

openPopup("puzzlePopup");

};

document.getElementById("memoryMenu").onclick=()=>{

openPopup("memoryPopup");

};

document.getElementById("wishMenu").onclick=()=>{

openPopup("wishPopup");

};

document.getElementById("storyMenu").onclick=()=>{

openPopup("storyPopup");

};

document.getElementById("musicMenu").onclick=()=>{

openPopup("musicPopup");

};

// ==============================
// CLOSE
// ==============================

document.querySelectorAll(".close").forEach(btn=>{

btn.onclick=()=>{

const id=btn.dataset.close;

closePopup(id);

};

});

// ==============================
// CLICK OUTSIDE
// ==============================

popups.forEach(popup=>{

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("active");

}

});

});

// ==============================
// ESC
// ==============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popups.forEach(p=>{

p.classList.remove("active");

});

}

});

// ==============================
// STORY BOOK
// ==============================

const pages=document.querySelectorAll(".page");

let currentPage=0;

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

}

const next=document.getElementById("nextPage");

const prev=document.getElementById("prevPage");

if(next){

next.onclick=()=>{

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

}

};

}

if(prev){

prev.onclick=()=>{

if(currentPage>0){

currentPage--;

showPage(currentPage);

}

};

}

// ==============================
// LETTER
// ==============================

const letterText=document.getElementById("letterText");

const message=`Happy Anniversary ❤️

Thank you for being my universe.

Every memory with you became a little star in my sky.

I hope we will create many more memories together.

I love you forever.`;

let typing=false;

function typeLetter(){

if(typing) return;

typing=true;

letterText.innerHTML="";

let i=0;

const timer=setInterval(()=>{

letterText.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},35);

}

const letterMenu=document.getElementById("letterMenu");

if(letterMenu){

letterMenu.addEventListener("click",()=>{

setTimeout(typeLetter,500);

});

}

// ==============================
// IMAGE PREVIEW
// ==============================

const popupImage=document.getElementById("popupImage");

document.querySelectorAll(".memoryStar").forEach(star=>{

star.onclick=(e)=>{

openPopup("imagePopup");

popupImage.src=star.dataset.img;

document.getElementById("popupText").innerHTML="One of our beautiful memories ❤️";

if(typeof unlockMemory==="function"){

unlockMemory();

}

burstHeart(e.clientX,e.clientY);

};

});

// ==============================
// END
// ==============================
