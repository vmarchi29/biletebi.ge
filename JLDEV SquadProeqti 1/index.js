let cards = document.querySelectorAll(".card");
let btns = document.querySelectorAll(".btns");
let btneffect = document.querySelector(".btnbackgroundeffect");
let banner = document.querySelector(".banner");
let popways = document.querySelectorAll(".popway");
let seeall = document.querySelector(".seeall");
let hideaall = document.querySelector(".hideall");
let questns = document.querySelectorAll(".questns");
banner.classList.add("buscover");
hideaall.classList.add("hidden");




popways.forEach(popway => {
    if (popway.value === "hidden") {
        popway.classList.add("hidden");
    }
});

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("hovered")
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered")
    });
});

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btneffect.classList.remove("center");
        if (btn.value === "1") {
            btneffect.classList.remove("center");
            btneffect.classList.remove("right");
            
            banner.classList.add("buscover")
            banner.classList.remove("traincover")
            banner.classList.remove("anycover")
        }
        if (btn.value === "2") {
            btneffect.classList.add("center");
            btneffect.classList.remove("right");

            banner.classList.remove("buscover")
            banner.classList.add("traincover")
            banner.classList.remove("anycover")
        }
        if (btn.value === "3") {
            btneffect.classList.remove("center");
            btneffect.classList.add("right");

            banner.classList.remove("buscover")
            banner.classList.remove("traincover")
            banner.classList.add("anycover")
        }
    });
});






function showall() {
    popways.forEach(popway => {
        if (popway.value === "hidden") {
            popway.classList.remove("hidden");
            seeall.classList.add("hidden");
            hideaall.classList.remove("hidden");
        }
    });
}
function hideall() {
    popways.forEach(popway => {
        if (popway.value === "hidden") {
            popway.classList.add("hidden");
            seeall.classList.remove("hidden");
            seeall.classList.remove("hidden");
            hideaall.classList.add("hidden");
        }
    });
}



questns.forEach(questn => {
    questn.addEventListener("click", () => {
        if(questn.classList.contains("open")){
            questn.classList.remove("open")
        }else {
            questn.classList.add("open")
        }
    });
});




