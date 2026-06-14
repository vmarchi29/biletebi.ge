const calendarBtn = document.getElementById("calendarBtn");
const dropdownCal = document.getElementById("dropdownCal");

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

const horizontalScroll = document.getElementById("horizScroll");
const weekDays = ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

let currDate = new Date();

for(let i = 0; i < 30; i++){
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + i);

    const dayName = weekDays[nextDate.getDay()];
    const dayNum = nextDate.getDate();
    const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;

    const item = document.createElement('div');
    item.classList.add('scrollItem');
    if(i === 0)item.classList.add('active');
    if(isWeekend) item.classList.add('weekend');

    item.innerHTML = `
    <span class="dayName">${i === 0 ? 'დღეს' : dayName}</span>
    <span class="dayNum">${dayNum}</span>
    `;

    item.addEventListener('click', () => {
        const isAlreadyActive = item.classList.contains('active');

        document.querySelectorAll('.scrollItem').forEach(el => el.classList.remove('active'));

        if(!isAlreadyActive){
            item.classList.add('active');
        }
    });

    horizontalScroll.appendChild(item);
}


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
        const dayDiv = document.createElement('dv');
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


generateMonth('mayGrid', 2026, 4, 4, 31);

generateMonth('juneGrid', 2026, 5, 0, 30)


const trigger = document.getElementById("dropdownTrigger");
const menu = document.getElementById("dropMenu");
const seltext = document.querySelector('.selText');
const items = document.querySelectorAll('.dropdownItem');

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


// document.getElementById("card36").addEventListener("click", () => {
//   window.location.href = "museumcard.html?id=card1";
// });

// document.getElementById("card37").addEventListener("click", () => {
//   window.location.href = "museumcard.html?id=card2";
// });









document.querySelectorAll('.maiin1').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = `museumcard.html?id=${card.id}`;
    });
});































const toggleBtn = document.getElementById("toggleBtn");
const textBlock = document.getElementById("textBlock");
const btnText = document.querySelector(".btnTxt");

toggleBtn.addEventListener('click', () => {
    textBlock.classList.toggle('open');

    toggleBtn.classList.toggle('expanded');

    if(textBlock.classList.contains('open')){
        btnText.textContent ='დამალვა';
    }else{
        btnText.textContent = 'ვრცლად';
    }
});




const params = new URLSearchParams(window.location.search);
const cardId = params.get("id");



document.querySelectorAll('.maiin1').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = `museumcard.html?id=${card.id}`;
    });
});