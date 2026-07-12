
// ==============================
// PUZZLE GAME
// ==============================

const puzzleArea=document.getElementById("puzzleArea");
const heartEnding=document.getElementById("heartEnding");
const finishText=document.getElementById("finishText");

const puzzleImage="images/gallery/memory20.jpg";

let pieces=[];
let correct=0;

// ==============================
// CREATE PUZZLE
// ==============================

function createPuzzle(){

pieces=[];

correct=0;

puzzleArea.innerHTML="";

for(let i=0;i<20;i++){

pieces.push(i);

}

pieces.sort(()=>Math.random()-0.5);

pieces.forEach((number,index)=>{

const piece=document.createElement("div");

piece.className="piece";

piece.draggable=true;

piece.dataset.correct=number;

piece.dataset.current=index;

piece.style.backgroundImage=`url(${puzzleImage})`;

const x=(number%4)*120;
const y=Math.floor(number/4)*120;

piece.style.backgroundPosition=`-${x}px -${y}px`;

piece.addEventListener("dragstart",dragStart);
piece.addEventListener("dragover",dragOver);
piece.addEventListener("drop",dropPiece);

puzzleArea.appendChild(piece);

});

}

createPuzzle();

// ==============================
// DRAG
// ==============================

let selected=null;

function dragStart(){

selected=this;

}

function dragOver(e){

e.preventDefault();

}

function dropPiece(){

if(selected==this)return;

const temp=this.style.backgroundPosition;

const tempCorrect=this.dataset.correct;

this.style.backgroundPosition=selected.style.backgroundPosition;

this.dataset.correct=selected.dataset.correct;

selected.style.backgroundPosition=temp;

selected.dataset.correct=tempCorrect;

checkPuzzle();

}

// ==============================
// CHECK
// ==============================

function checkPuzzle(){

correct=0;

const all=document.querySelectorAll(".piece");

all.forEach((piece,index)=>{

if(Number(piece.dataset.correct)===index){

correct++;

piece.classList.add("successGlow");

}else{

piece.classList.remove("successGlow");

}

});

if(correct===20){

finishPuzzle();

}

}

// ==============================
// FINISH
// ==============================

function finishPuzzle(){

heartEnding.style.display="block";

finishText.style.display="block";

burstHeart(

window.innerWidth/2,

window.innerHeight/2

);

setTimeout(()=>{

openPopup("imagePopup");

document.getElementById("popupImage").src=puzzleImage;

document.getElementById("popupText").innerHTML=

"❤️ We completed another memory together ❤️";

},1200);

}

// ==============================
// RANDOM SHINE
// ==============================

setInterval(()=>{

const all=document.querySelectorAll(".piece");

const random=Math.floor(Math.random()*all.length);

if(all[random]){

all[random].animate([

{opacity:.7},

{opacity:1},

{opacity:.7}

],{

duration:700

});

}

},900);

// ==============================
// END
// ==============================
