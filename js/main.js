// ปุ่ม Enter
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        document.getElementById("memory").scrollIntoView({
            behavior: "smooth"
        });

        const music = document.getElementById("bgMusic");

        if (music) {
            music.play();
        }
    });
}

// Popup ดาว
const stars = document.querySelectorAll(".star");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

stars.forEach(star => {
    star.onclick = () => {
        popup.style.display = "flex";
    }
});

if(closePopup){
    closePopup.onclick=()=>{
        popup.style.display="none";
    }
}

// ตุ๊กตา
const bear=document.getElementById("bear");
const bearPopup=document.getElementById("bearPopup");
const closeBear=document.getElementById("closeBear");

if(bear){
    bear.onclick=()=>{
        bearPopup.style.display="flex";
    }
}

if(closeBear){
    closeBear.onclick=()=>{
        bearPopup.style.display="none";
    }
}

// จดหมาย
const openLetter=document.getElementById("openLetter");
const letterPopup=document.getElementById("letterPopup");
const closeLetter=document.getElementById("closeLetter");

if(openLetter){
    openLetter.onclick=()=>{
        letterPopup.style.display="flex";
    }
}

if(closeLetter){
    closeLetter.onclick=()=>{
        letterPopup.style.display="none";
    }
}
