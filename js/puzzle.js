// =========================
// MEMORY PUZZLE
// =========================

const puzzleArea = document.getElementById("puzzleArea");

const puzzleImage = "images/gallery/memory20.jpg";

let pieces = [];
let selectedPiece = null;

// =========================
// CREATE
// =========================

function createPuzzle(){

if(!puzzleArea) return;

puzzleArea.innerHTML="";

pieces=[];

for(let i=0;i<16;i++){

pieces.push(i);

}

pieces.sort(()=>Math.random()-0.5);

pieces.forEach((number,index)=>{

const piece=document.createElement("div");

piece.className="puzzlePiece";

piece.dataset.correct=number;

piece.dataset.index=index;

piece.style.backgroundImage=`url(${puzzleImage})`;

const x=(number%4)*25;
const y=Math.floor(number/4)*25;

piece.style.backgroundPosition=`${x}% ${y}%`;

piece.onclick=()=>selectPiece(piece);

puzzleArea.appendChild(piece);

});

}

createPuzzle();

// =========================
// SELECT
// =========================

function selectPiece(piece){

if(selectedPiece==null){

selectedPiece=piece;

piece.style.outline="3px solid #ffd86b";

return;

}

swapPiece(selectedPiece,piece);

selectedPiece.style.outline="none";

selectedPiece=null;

checkPuzzle();

}

// =========================
// SWAP
// =========================

function swapPiece(a,b){

const bg=a.style.backgroundPosition;
const correct=a.dataset.correct;

a.style.backgroundPosition=b.style.backgroundPosition;
a.dataset.correct=b.dataset.correct;

b.style.backgroundPosition=bg;
b.dataset.correct=correct;

}

// =========================
// CHECK
// =========================

function checkPuzzle(){

const all=document.querySelectorAll(".puzzlePiece");

let complete=true;

all.forEach((piece,index)=>{

if(Number(piece.dataset.correct)!==index){

complete=false;

}

});

if(complete){

finishPuzzle();

}

}

// =========================
// FINISH
// =========================

function finishPuzzle(){

document.getElementById("heartEnding").style.display="block";

document.getElementById("finishText").style.display="block";

document.querySelectorAll(".puzzlePiece").forEach(piece=>{

piece.classList.add("correct");

});

createHeartRain();

}

// =========================
// HEART EFFECT
// =========================

function createHeartRain(){

for(let i=0;i<60;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.transition="4s linear";

heart.style.zIndex="99999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

heart.style.opacity="0";

},30);

setTimeout(()=>{

heart.remove();

},4500);

},i*80);

}

}

// =========================
// RESET
// =========================

function resetPuzzle(){

document.getElementById("heartEnding").style.display="none";

document.getElementById("finishText").style.display="none";

createPuzzle();

}

// =========================
// END
// =========================
