
const trigger1 = document.getElementById("fly_dropdownTrigger1");
const menu1 = document.getElementById("fly_dropMenu1");
const seltext1 = document.querySelector(".fly_selText1");
const items1 = document.querySelectorAll(".fly_dropdownItem1");

trigger1.addEventListener("click", () => {
    menu1.classList.toggle("show");
});

items1.forEach(item => {

    item.addEventListener("click", () => {

        const languageText =
            item.querySelector("span").innerText;

        items1.forEach(el =>
            el.classList.remove("active")
        );

        item.classList.add("active");

        menu1.classList.remove("show");
    });

});

document.addEventListener("click", e => {

    if(
        !trigger1.contains(e.target) &&
        !menu1.contains(e.target)
    ){
        menu1.classList.remove("show");
    }

});



const trigger2 = document.getElementById("fly_dropdownTrigger2");
const menu2 = document.getElementById("fly_dropMenu2");
const seltext2 = document.querySelector(".fly_selText2");
const items2 = document.querySelectorAll(".fly_dropdownItem2");

trigger2.addEventListener("click", () => {
    menu2.classList.toggle("show");
});
items2.forEach(item => {

    item.addEventListener("click", () => {

        const languageText =
            item.querySelector("span").innerText;

        items2.forEach(el =>
            el.classList.remove("active")
        );

        item.classList.add("active");

        menu2.classList.remove("show");
    });

});

document.addEventListener("click", e => {

    if(
        !trigger2.contains(e.target) &&
        !menu2.contains(e.target)
    ){
        menu2.classList.remove("show");
    }

});


const place1 = document.querySelector(".fly_place1");
const input1 = document.querySelector(".fly_input1");
const dropdown = document.querySelector(".fly_qveynebi");
const conts = document.querySelectorAll(".fly_one")
const place2 = document.querySelector(".fly_place2");
const input2 = document.querySelector(".fly_input2");
const dropdown1 = document.querySelector(".fly_qveynebi1");
const conts1 = document.querySelectorAll(".fly_two")

place1.addEventListener("click", (e) => {
    e.stopPropagation();

    closeAll();

    place1.classList.add("active");
    dropdown.classList.add("active");
    input1.classList.add("active");
});
conts.forEach(cont => {
    cont.addEventListener("click", (e) =>{
        const city = cont.querySelector(".fly_qalaqi").textContent.trim();
        input1.value = city

        dropdown.classList.remove("active");
        place1.classList.remove("active");
    })
})
function closeAll() {
    dropdown.classList.remove("active");
    dropdown1.classList.remove("active1");

    place1.classList.remove("active");
    place2.classList.remove("active1");
}
place2.addEventListener("click", (e) => {
    e.stopPropagation();

    closeAll();

    place2.classList.add("active1");
    dropdown1.classList.add("active1");
    input2.classList.add("active1");
});
conts1.forEach(cont1 => {
    cont1.addEventListener("click", (e) =>{
        const city1 = cont1.querySelector(".fly_qalaqi1").textContent.trim();
        input2.value = city1

        dropdown1.classList.remove("active1")
        place2.classList.remove("active1");
    })
});





const pics = document.querySelectorAll(".fly_scrollimg");
const goprevv = document.querySelector(".prev");
const gonextt = document.querySelector(".next")


count = 0;

pics.forEach((img, index)=>{
    img.style.left = `${index * 100}%`;
});

const slideimgs = ()=>{
    pics.forEach((img)=>{
        img.style.transform = `translateX(-${count * 100}%)`;

    })
};


const goprev = () =>{
    count--;
    if(count<0){
        count=pics.length - 1;
    }
    slideimgs();
}
const gonext = () =>{
    count++;
    if(count>=pics.length){
        count=0;
    }
    slideimgs();
}

goprevv.addEventListener("click", goprev);
gonextt.addEventListener("click", gonext);

slideimgs();



const btn = document.querySelector(".read-more-btn");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
    content.classList.toggle("active");
    btn.classList.toggle("active");

    btn.querySelector("span").textContent =
        content.classList.contains("active")
            ? "დამალე"
            : "ვრცლად";
});
















const flyTarigi = document.querySelector(".fly_imgcalendar");
const flyCalendar = document.querySelector(".saertashoriso_dropdownCal");

flyTarigi.addEventListener("click", () => {
    flyCalendar.classList.toggle("show");
});

document.addEventListener("click", (e) => {

    if(
        flyCalendar.classList.contains("show") &&
        !flyTarigi.contains(e.target) &&
        !flyCalendar.contains(e.target)
    ){
        flyCalendar.classList.remove("show");
    }

});



function generateMonth(gridId, year, monthInd, startEmptyDays, totalDays){
    const grid = document.getElementById(gridId);

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();

    for(let i = 0; i < startEmptyDays; i++){
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        grid.appendChild(emptyDiv);
    }


    for(let day = 1; day <= totalDays; day++){
        const dayDiv = document.createElement('div');
        dayDiv.innerText = day;
dayDiv.addEventListener("click", () => {

    const dateText = `${day} / ${monthInd + 1}`;

    document.querySelectorAll(".dep")
        .forEach(el => el.classList.remove("dep"));

    dayDiv.classList.add("dep");

    departureDate = dateText;

    document.querySelector(".fly_gafrena").textContent =
        `გაფრენა: ${dateText}`;

    flyCalendar.classList.remove("show");
});
        const currCalDate = new Date(year, monthInd, day);

        const todAtMid = new Date(todayYear, todayMonth, todayDate);


        if(currCalDate < todAtMid){
            dayDiv.style.color = '#ccc';
            dayDiv.style.pointerEvents = 'none';
        }

        grid.appendChild(dayDiv);
    }
}


generateMonth('saertashoriso_mayGrid', 2026, 4, 4, 31);

generateMonth('saertashoriso_juneGrid', 2026, 5, 0, 30)




const departureText = document.querySelector(".fly_gafrena");
let departureDate = null;
let mode = "departure";



const searchBtn = document.querySelector(".fly_dzebna");
const fromInput = document.querySelector(".fly_input1");
const toInput = document.querySelector(".fly_input2");
const dateBtn = document.querySelector(".fly_gafrena"); 

searchBtn.addEventListener("click", () => {

    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const date = dateBtn.textContent.replace("გაფრენა:", "").trim();


    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("date", date);
    window.location.href = "/tickets/tkt.html"; 
});




