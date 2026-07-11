// ===========================
// Enter Button + Music
// ===========================

const enterBtn = document.getElementById("enterBtn");
const bgMusic = document.getElementById("bgMusic");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {

        document.getElementById("memory").scrollIntoView({
            behavior: "smooth"
        });

        if (bgMusic) {
            bgMusic.play().catch(() => {});
        }

    });
}

// ===========================
// Letter Popup
// ===========================

const openLetter = document.getElementById("openLetter");
const letterPopup = document.getElementById("letterPopup");
const closeLetter = document.getElementById("closeLetter");

if (openLetter) {
    openLetter.onclick = () => {
        letterPopup.style.display = "flex";
    };
}

if (closeLetter) {
    closeLetter.onclick = () => {
        letterPopup.style.display = "none";
    };
}

// ===========================
// Image Popup
// ===========================

const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closeImage = document.getElementById("closeImage");

// Gallery

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.onclick = () => {

        popup.style.display = "flex";
        popupImage.src = img.src;

    };

});

// Memory Galaxy

document.querySelectorAll(".star").forEach(star => {

    star.onclick = () => {

        popup.style.display = "flex";
        popupImage.src = star.dataset.img;

    };

});

if (closeImage) {

    closeImage.onclick = () => {

        popup.style.display = "none";

    };

}

// ===========================
// Character Click
// ===========================

document.querySelectorAll(".character-img").forEach(img => {

    img.onclick = () => {

        popup.style.display = "flex";
        popupImage.src = img.src;

    };

});

// ===========================
// Close Popup
// ===========================

window.onclick = function(e){

    if(e.target===popup){

        popup.style.display="none";

    }

    if(e.target===letterPopup){

        letterPopup.style.display="none";

    }

}

// ===========================
// Floating Stars
// ===========================

setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top="-30px";
    star.style.fontSize=(Math.random()*12+8)+"px";
    star.style.opacity=Math.random();
    star.style.pointerEvents="none";
    star.style.transition="4s linear";
    star.style.zIndex="1";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.top="110vh";

    },50);

    setTimeout(()=>{

        star.remove();

    },4500);

},700);

// ===========================
// Smooth Appear
// ===========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(60px)";
sec.style.transition="1s";

observer.observe(sec);

});
