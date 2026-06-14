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