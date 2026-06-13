{
const slider = document.querySelector(".saertashoriso_slider");
const next = document.querySelector(".saertashoriso_next");
const prev = document.querySelector(".saertashoriso_prev");

const firstClone = slider.children[0].cloneNode(true);
const lastClone = slider.children[slider.children.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.prepend(lastClone);

const slides = document.querySelectorAll(".saertashoriso_one");

let count = 1;
const size = 1100.33;

slider.style.transform = `translateX(-${count * size}px)`;

next.addEventListener("click", () => {
    count++;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${count * size}px)`;
});

prev.addEventListener("click", () => {
    count--;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${count * size}px)`;
});

slider.addEventListener("transitionend", () => {

    if (slides[count].src === firstClone.src) {
        slider.style.transition = "none";
        count = 1;
        slider.style.transform = `translateX(-${count * size}px)`;
    }

    if (slides[count].src === lastClone.src) {
        slider.style.transition = "none";
        count = slides.length - 2;
        slider.style.transform = `translateX(-${count * size}px)`;
    }

});





const calendarBtn = document.getElementById("saertashoriso_calendarBtn");
const dropdownCal = document.getElementById("saertashoriso_dropdownCal");

calendarBtn.addEventListener('click', () => {
    dropdownCal.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if(dropdownCal.classList.contains('show')){
        if(!calendarBtn.contains(e.target) && !dropdownCal.contains(e.target)){
            dropdownCal.classList.remove('show');
        }
    }
});

const horizontalScroll = document.getElementById("saertashoriso_horizScroll");
const weekDays = ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

let currDate = new Date();

for(let i = 0; i < 30; i++){
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + i);

    const dayName = weekDays[nextDate.getDay()];
    const dayNum = nextDate.getDate();
    const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;

    const item = document.createElement('div');
    item.classList.add('saertashoriso_scrollItem');
    if(i === 0)item.classList.add('active');
    if(isWeekend) item.classList.add('weekend');

    item.innerHTML = `
    <span class="saertashoriso_dayName">${i === 0 ? 'დღეს' : dayName}</span>
    <span class="saertashoriso_dayNum">${dayNum}</span>
    `;

    item.addEventListener('click', () => {
        const isAlreadyActive = item.classList.contains('active');

        document.querySelectorAll('.saertashoriso_scrollItem').forEach(el => el.classList.remove('active'));

        if(!isAlreadyActive){
            item.classList.add('active');
        }
    });

    horizontalScroll.appendChild(item);
}
// const horizontalScroll = document.getElementById("horizScroll");

const scrollLeftBtn = document.querySelector(".saertashoriso_left");
const scrollRightBtn = document.querySelector(".saertashoriso_right");

const scrollAmount = 500;

scrollLeftBtn.addEventListener("click", () => {
    horizontalScroll.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

scrollRightBtn.addEventListener("click", () => {
    horizontalScroll.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
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


const trigger = document.getElementById("saertashoriso_dropdownTrigger");
const menu = document.getElementById("saertashoriso_dropMenu");
const seltext = document.querySelector('.saertashoriso_selText');
const items = document.querySelectorAll('.saertashoriso_dropdownItem');

trigger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

items.forEach(item => {
    item.addEventListener('click', () => {
        seltext.innerText = item.innerText;
        menu.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if(!trigger.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove('show');
    }
})



const trigger1 = document.getElementById("saertashoriso_dropdownTrigger1");
const menu1 = document.getElementById("saertashoriso_dropMenu1");
const seltext1 = document.querySelector('.saertashoriso_selText1');
const items1 = document.querySelectorAll('.saertashoriso_dropdownItem1');

trigger1.addEventListener('click', () => {
    menu1.classList.toggle('show');
});

items1.forEach(item => {
    item.addEventListener('click', () => {
        seltext1.innerText = item.innerText;
        menu1.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if(!trigger1.contains(e.target) && !menu1.contains(e.target)){
        menu1.classList.remove('show');
    }
})



const bileti1 = document.querySelector(".saertashoriso_first1");
const bileti2 = document.querySelector(".saertashoriso_second");
const one = document.querySelector(".saertashoriso_azerbaijani");
const two = document.querySelector(".saertashoriso_somxeti");

one.addEventListener("click", () => {
    bileti2.style.display = "";
    bileti1.style.display = "none";
})
two.addEventListener("click", () =>{
    bileti1.style.display = "";
    bileti2.style.display = "none"
})


const klebadobit = document.querySelector(".saertashoriso_klebadobit");
const zrdadobit = document.querySelector(".saertashoriso_zrdadobit");
const biletebicont = document.querySelector(".saertashoriso_two_bileti");

klebadobit.addEventListener("click", () => {

    const biletebi = Array.from(
        document.querySelectorAll(".saertashoriso_first")
    );

    biletebi.sort((a, b) => {

        const price1 = Number(
            a.querySelector(".saertashoriso_text4").innerText
        );

        const price2 = Number(
            b.querySelector(".saertashoriso_text4").innerText
        );

        return price2 - price1;
    });

    biletebi.forEach(bileti => {
        biletebicont.appendChild(bileti);
    });

});

zrdadobit.addEventListener("click", () => {

    const biletebi = Array.from(
        document.querySelectorAll(".saertashoriso_first")
    );

    biletebi.sort((a, b) => {

        const price1 = Number(
            a.querySelector(".saertashoriso_text4").innerText
        );

        const price2 = Number(
            b.querySelector(".saertashoriso_text4").innerText
        );

        return price1 - price2;
    });

    biletebi.forEach(bileti => {
        biletebicont.appendChild(bileti);
    });

});

}