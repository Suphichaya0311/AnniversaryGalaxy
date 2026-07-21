// =========================
// POPUP SYSTEM
// =========================

const popups = document.querySelectorAll(".popup");

// =========================
// OPEN
// =========================

function openPopup(id){

const popup=document.getElementById(id);

if(!popup) return;

popup.style.display="flex";

popup.classList.add("fadeIn");

}

// =========================
// CLOSE
// =========================

function closePopup(popup){

popup.style.display="none";

popup.classList.remove("fadeIn");

}

// =========================
// CLOSE BUTTON
// =========================

document.querySelectorAll(".close").forEach(btn=>{

btn.addEventListener("click",()=>{

closePopup(btn.closest(".popup"));

});

});

// =========================
// CLICK OUTSIDE
// =========================

window.addEventListener("click",(e)=>{

popups.forEach(popup=>{

if(e.target===popup){

closePopup(popup);

}

});

});

// =========================
// ESC
// =========================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popups.forEach(popup=>{

closePopup(popup);

});

}

});

// =========================
// MENU BUTTON
// =========================

document.getElementById("timerBtn").onclick=()=>openPopup("timerPopup");

document.getElementById("letterBtn").onclick=()=>openPopup("letterPopup");

document.getElementById("memoryBtn").onclick=()=>openPopup("memoryPopup");

document.getElementById("storyBtn").onclick=()=>openPopup("storyPopup");

document.getElementById("puzzleBtn").onclick=()=>openPopup("puzzlePopup");

document.getElementById("wishBtn").onclick=()=>openPopup("wishPopup");

// =========================
// STORY BOOK
// =========================

const pages=document.querySelectorAll(".page");

let page=0;

function showPage(){

pages.forEach(p=>p.classList.remove("active"));

pages[page].classList.add("active");

}

if(document.getElementById("nextPage")){

document.getElementById("nextPage").onclick=()=>{

page++;

if(page>=pages.length){

page=0;

}

showPage();

};

}

if(document.getElementById("prevPage")){

document.getElementById("prevPage").onclick=()=>{

page--;

if(page<0){

page=pages.length-1;

}

showPage();

};

}

showPage();

// =========================
// WISH STAR
// =========================

const wish=document.getElementById("wishButton");

if(wish){

wish.onclick=()=>{

wish.innerHTML="⭐ Your wish has reached the stars ⭐";

wish.disabled=true;

setTimeout(()=>{

wish.innerHTML="✨ Make A Wish ✨";

wish.disabled=false;

},3000);

};

}

// =========================
// END
// =========================
