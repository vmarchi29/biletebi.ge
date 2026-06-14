let choseregtbil = document.querySelector(".choseregtbil");
let notchosenregtbil = document.querySelector(".notchosenregtbil");
let choseregtbilh1 = document.querySelector(".choseregtbilh1");
let btns = document.querySelectorAll(".btns");
let btneffect = document.querySelector(".btnbackgroundeffect");
let fromplaces = document.querySelectorAll(".from");
let toplaces = document.querySelectorAll(".to");
let biletbi = document.querySelectorAll(".biletbi");
let questns = document.querySelectorAll(".questns");
notchosenregtbil.classList.add("showchoseregtbil");
btneffect.classList.add("right");

if (window.innerWidth <= 425) {
    btneffect.classList.add("rightsmall");
    btneffect.classList.remove("right");
}
let dgesxvalposition = 2;


function showchoseregtbil() {
    notchosenregtbil.classList.remove("showchoseregtbil");
};
function changeregtb() {
    if(notchosenregtbil.textContent === "თბილისი - რეგიონი"){
        notchosenregtbil.textContent = "რეგიონი - თბილისი"
        choseregtbilh1.textContent = "თბილისი - რეგიონი"
        btneffect.classList.add("right");
        fromplaces.forEach((fromplace, index) => {
            const toplace = toplaces[index];
            [fromplace.textContent, toplace.textContent] = [
                toplace.textContent,
                fromplace.textContent
            ];
        });
        dgesxvalposition = 2
        console.log(dgesxvalposition)
    }else {
        notchosenregtbil.textContent = "თბილისი - რეგიონი"
        choseregtbilh1.textContent = "რეგიონი - თბილისი"
        btneffect.classList.add("right");
        fromplaces.forEach((fromplace, index) => {
            const toplace = toplaces[index];
            [fromplace.textContent, toplace.textContent] = [
                toplace.textContent,
                fromplace.textContent
            ];
        });
        dgesxvalposition = 2
        console.log(dgesxvalposition)
    }
    notchosenregtbil.classList.add("showchoseregtbil");
};



document.addEventListener("mousedown", (e) => {
    if (e.target === notchosenregtbil) return;
    notchosenregtbil.classList.add("showchoseregtbil")
});

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.value === "1") {
            btneffect.classList.remove("right");
            dgesxvalposition = 1
        }
        if (btn.value === "2") {
            btneffect.classList.add("right");
            dgesxvalposition = 2
        }
    });
});

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (window.innerWidth > 425) return;

        if (btn.value === "1") {
            btneffect.classList.remove("rightsmall");
            dgesxvalposition = 1
        }
        if (btn.value === "2") {
            btneffect.classList.add("rightsmall");
            dgesxvalposition = 2
        }
    });
});




questns.forEach(questn => {
    questn.addEventListener("click", () => {
        if(questn.classList.contains("open")){
            questn.classList.remove("open")
        }else {
            questn.classList.add("open")
        }
    });
});
