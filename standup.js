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
const monthNames = ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'];
let currDate = new Date(2026, 4, 23);

for(let i = 0; i < 30; i++){
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + i);

    const dayName = weekDays[nextDate.getDay()];
    const dayNum = nextDate.getDate();
    const monthNum = monthNames[nextDate.getMonth()];
    const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;

    const item = document.createElement('div');
    item.classList.add('scrollItem');
    if(i === 0) item.classList.add('active');
    if(isWeekend) item.classList.add('weekend');

    item.dataset.day = dayNum;
    item.dataset.month = monthNum;

    item.innerHTML = `
        <span class="dayName">${i === 0 ? 'დღეს' : dayName}</span>
        <span class="dayNum">${dayNum}</span>
    `;

    item.addEventListener('click', () => {
        document.querySelectorAll('.scrollItem').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        filterCards(String(dayNum), monthNum);
    });

    horizontalScroll.appendChild(item);
}

const filterCards = (day, month) => {
    const items = document.querySelectorAll('.purpleul li');
    let found = false;

    items.forEach(li => {
        if(li.dataset.day === day && li.dataset.month === month){
            li.style.display = 'block';
            found = true;
        } else {
            li.style.display = 'none';
        }
    });

    let empty = document.querySelector('.emptyMsg');
    if(!found){
        if(!empty){
            empty = document.createElement('p');
            empty.className = 'emptyMsg';   
            empty.innerHTML = `<img src="./icons8-literature.gif" alt="" style="width:80px; height:80px;"> <h3>ამ კატეგორიაში აქტიური ღონისძიებები არ არის</h3>`;
            document.querySelector('.purpleul').after(empty);
        }
        empty.style.display = 'block';
    } else {
        if(empty) empty.style.display = 'none';
    }
}

document.querySelectorAll('.purpleul li').forEach(li => li.style.display = 'block');


function generateMonth(gridId, year, monthInd, startEmptyDays, totalDays){
    const grid = document.getElementById(gridId);
    const today = new Date(2026, 4, 23);
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
        } else {
            dayDiv.addEventListener('click', () => {
                const month = monthInd === 4 ? 'მაი' : 'ივნ';
                filterCards(String(day), month);
                dropdownCal.classList.remove('show');
            });
        }

        grid.appendChild(dayDiv);
    }
}

generateMonth('mayGrid', 2026, 4, 4, 31);
generateMonth('juneGrid', 2026, 5, 0, 30);

const trigger = document.getElementById("dropdownTrigger");
const menu = document.getElementById("dropMenu");
const seltext = document.querySelector('.selText');
const dropItems = document.querySelectorAll('.dropdownItem');

if(trigger){ // ✅ მხოლოდ თუ არსებობს
    trigger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    dropItems.forEach(item => {
        item.addEventListener('click', () => {
            seltext.innerText = item.innerText;
            menu.classList.remove('show');

            const val = item.dataset.value;
            const ul = document.querySelector('.purpleul');
            const lis = [...ul.querySelectorAll('li')];

            if(val === 'price-asc' || val === 'price-desc'){
                lis.forEach(li => li.style.display = 'block');
                lis.sort((a, b) => {
                    const getPrice = el => parseInt(el.querySelectorAll('.nameevent h3')[1]?.innerText) || 0;
                    return val === 'price-asc' ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
                });
                lis.forEach(li => ul.appendChild(li));
            } else if(val === 'upcoming'){
               document.querySelectorAll('.purpleul li').forEach(li => li.style.display = 'block');
    seltext.innerText = 'მოახლოებული';
            }
        });
    });

    document.addEventListener('click', (e) => {
        if(!trigger.contains(e.target) && !menu.contains(e.target)){
            menu.classList.remove('show');
        }
    });
}