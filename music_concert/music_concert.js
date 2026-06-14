const calendarBtn = document.getElementById("calendarBtn");
const dropdownCal = document.getElementById("dropdownCal");
const horizontalScroll = document.getElementById("horizScroll");

const trigger = document.getElementById("dropdownTrigger");
const menu = document.getElementById("dropMenu");
const seltext = document.querySelector('.selText');
const items = document.querySelectorAll('.dropdownItem');

const toggleBtn = document.getElementById("toggleBtn");
const textBlock = document.getElementById("textBlock");
const btnText = document.querySelector(".btnTxt");

const GEORGIAN_MONTHS = {
    4: 'მაი', 
    5: 'ივნ'  
};
const weekDays = ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

let currDate = new Date();

calendarBtn.addEventListener('click', () => {
    dropdownCal.classList.toggle('show');
});

trigger.addEventListener('click', () => {
    menu.classList.toggle('show');
});


document.addEventListener('click', (e) => {
    if (dropdownCal.classList.contains('show')) {
        if (!calendarBtn.contains(e.target) && !dropdownCal.contains(e.target)) {
            dropdownCal.classList.remove('show');
        }
    }
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
    }
});

items.forEach(item => {
    item.addEventListener('click', () => {
        seltext.innerText = item.innerText;
        menu.classList.remove('show');
    });
});


function showEvents(day, monthName) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let show = false;

        const singleDay = card.querySelector('.day');
        const rangeDay = card.querySelector('.days');
        const month = card.querySelector('.month');

        if (!month) {
            card.parentElement.style.display = 'none';
            return;
        }

        const cardMonth = month.textContent.trim();

        if (singleDay) {
            const cardDay = parseInt(singleDay.textContent);
            if (cardDay === day && cardMonth.includes(monthName)) {
                show = true;
            }
        }

        if (rangeDay) {
            const parts = rangeDay.textContent.split('-');
            const start = parseInt(parts[0]);
            const end = parseInt(parts[1]);

            if (day >= start && day <= end && cardMonth.includes(monthName)) {
                show = true;
            }
        }

        card.parentElement.style.display = show ? 'block' : 'none';
    });
}


for (let i = 0; i < 30; i++) {
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + i);

    const dayName = weekDays[nextDate.getDay()];
    const dayNum = nextDate.getDate();
    const monthIndex = nextDate.getMonth();
    const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;

    const item = document.createElement('div');
    item.classList.add('scrollItem');
    if (i === 0) item.classList.add('active');
    if (isWeekend) item.classList.add('weekend');

    item.innerHTML = `
        <span class="dayName">${i === 0 ? 'დღეს' : dayName}</span>
        <span class="dayNum">${dayNum}</span>
    `;

    item.addEventListener('click', () => {

        document.querySelectorAll('.scrollItem').forEach(el => el.classList.remove('active'));
        item.classList.add('active');


        const monthName = GEORGIAN_MONTHS[monthIndex] || '';
        showEvents(dayNum, monthName);
    });

    horizontalScroll.appendChild(item);
}

function generateMonth(gridId, year, monthInd, startEmptyDays, totalDays) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();


    for (let i = 0; i < startEmptyDays; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        grid.appendChild(emptyDiv);
    }


    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerText = day;

        const currCalDate = new Date(year, monthInd, day);
        const todAtMid = new Date(todayYear, todayMonth, todayDate);


        if (currCalDate < todAtMid) {
            dayDiv.style.color = '#ccc';
            dayDiv.style.pointerEvents = 'none';
        } else {

            dayDiv.addEventListener('click', () => {

                document.querySelectorAll('.daysGrid div').forEach(el => el.classList.remove('activeDay'));

                dayDiv.classList.add('activeDay');

                const monthName = GEORGIAN_MONTHS[monthInd] || '';
                showEvents(day, monthName);
            });
        }

        grid.appendChild(dayDiv);
    }
}


generateMonth('mayGrid', 2026, 4, 4, 31);
generateMonth('juneGrid', 2026, 5, 0, 30);

toggleBtn.addEventListener('click', () => {
    textBlock.classList.toggle('open');
    toggleBtn.classList.toggle('expanded');

    if (textBlock.classList.contains('open')) {
        btnText.textContent = 'დამალვა';
    } else {
        btnText.textContent = 'ვრცლად';
    }
});


const container = document.getElementById("eventsContainer"); 

function getCardPrice(card) {

    let priceEl = card.querySelector('.bluep');
    
    if (priceEl) {
        const digits = priceEl.textContent.replace(/\s/g, '').match(/\d+/);
        if (digits) return parseInt(digits[0], 10);
    }

    const allText = card.textContent.replace(/\s/g, ''); 
    const allDigits = allText.match(/\d+/g); 

    if (allDigits && allDigits.length > 0) {
        if (allDigits.length === 1) return parseInt(allDigits[0], 10);
        
        return parseInt(allDigits[allDigits.length - 1], 10);
    }

    return 0; 
}


function getCardDate(card) {
    const singleDayEl = card.querySelector('.day');
    const rangeDayEl = card.querySelector('.days');
    
    if (singleDayEl) return parseInt(singleDayEl.textContent, 10) || 0;
    if (rangeDayEl) return parseInt(rangeDayEl.textContent.split('-')[0], 10) || 0;
    return 0;
}


function sortCards(criteria) {
    if (!container) return;


    const rows = Array.from(container.children);

    rows.sort((a, b) => {
        const cardA = a.querySelector('.card');
        const cardB = b.querySelector('.card');

        if (!cardA || !cardB) return 0;

        const priceA = getCardPrice(cardA);
        const priceB = getCardPrice(cardB);

        if (criteria === 'lowToHigh') {
            return priceA - priceB; 
        } 
        else if (criteria === 'highToLow') {
            return priceB - priceA; 
        } 
        else if (criteria === 'upcoming') {
            return getCardDate(cardA) - getCardDate(cardB); 
        }
        return 0;
    });

    rows.forEach(row => container.appendChild(row));
}

items.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.innerText.toLowerCase();
        
        if (text.includes('ზრდად') || text.includes('იაფი') || text.includes('low')) {
            sortCards('lowToHigh');
        } 
        else if (text.includes('კლებად') || text.includes('ძვირი') || text.includes('high')) {
            sortCards('highToLow');
        } 
        else if (text.includes('მოახლო') || text.includes('თარიღ') || text.includes('date')) {
            sortCards('upcoming');
        }
    });
});