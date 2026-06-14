{
const langBox = document.getElementById("langBox");
const selectedLang = document.getElementById("selectedLang");
const options = document.querySelectorAll(".lang-dropdown div");

langBox.addEventListener("click", () => {
    langBox.classList.toggle("active");
});

options.forEach(option => {
    option.addEventListener("click", (e) => {
        const lang = e.currentTarget.dataset.lang;
        
        if (lang === "en") {
            window.location.href = "index-en.html";
        } else if (lang === "ka") {
            window.location.href = "index.html";
        }
        
        langBox.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!langBox.contains(e.target)) {
        langBox.classList.remove("active");
        
    }
});

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const categorie = document.querySelector(".categorie");

right.addEventListener("click", () => {
    categorie.scrollLeft += 250;
    left.style.display = "block";
});

left.addEventListener("click", () => {
    categorie.scrollLeft -= 250;
    if (categorie.scrollLeft <= 250) {
        left.style.display = "none";
    }
});

const track = document.querySelector(".track");
const imgs = document.querySelectorAll(".track img");
const sliderRight = document.querySelector(".maincontainerarrow.rightt");
const sliderLeft = document.querySelector(".maincontainerarrow.leftt");
let current = 0;

const goTo = (n) => {
    current = (n + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${current * 75}%)`;
}

sliderRight.addEventListener("click", () => goTo(current + 1));
sliderLeft.addEventListener("click", () => goTo(current - 1));

const rightstory = document.querySelector(".rightstory");
const leftstory = document.querySelector(".leftstory");
const story = document.querySelector(".story");

rightstory.addEventListener("click", () => {
    story.scrollLeft += 200;
    leftstory.style.display = "block";
    rightstory.style.display="none";
});

leftstory.addEventListener("click", () => {
    story.scrollLeft -= 200;
    leftstory.style.display = "none";
    rightstory.style.display="block"
});



const rightpopular = document.querySelector(".rightpopular");
const leftpopular = document.querySelector(".leftpopular");
const popular = document.querySelector(".popular");

rightpopular.addEventListener("click", () => {
    popular.scrollLeft += 450;
    leftpopular.style.display = "block";
    if (popular.scrollLeft >= 1200) {
        rightpopular.style.display = "none";
    }
});

leftpopular.addEventListener("click", () => {
    popular.scrollLeft -= 450;
    if (popular.scrollLeft <= 450) {
        leftpopular.style.display = "none";
        rightpopular.style.display = "block";
    }
});

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
let currDate = new Date();

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
    document.querySelectorAll('.purpleul li').forEach(li => {
        if(li.dataset.day === day && li.dataset.month === month){
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}

const todayDay = String(currDate.getDate());
const todayMonth = monthNames[currDate.getMonth()];
filterCards(todayDay, todayMonth);

function generateMonth(gridId, year, monthInd, startEmptyDays, totalDays){
    const grid = document.getElementById(gridId);
    const today = new Date(2026,4,23);
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

document.querySelectorAll('.rw-date-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.rw-date-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});



const calendarBtn3 = document.getElementById("calendarBtn3");
const dropdownCal3 = document.getElementById("dropdownCal3");
const horizontalScroll3 = document.getElementById("horizScroll3");

calendarBtn3.addEventListener('click', () => {
    dropdownCal3.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if(dropdownCal3.classList.contains('show')){
        if(!calendarBtn3.contains(e.target) && !dropdownCal3.contains(e.target)){
            dropdownCal3.classList.remove('show');
        }
    }
});

let currDate3 = new Date(2026, 4, 23);

for(let i = 0; i < 30; i++){
    let nextDate = new Date(currDate3);
    nextDate.setDate(currDate3.getDate() + i);

    const dayName = weekDays[nextDate.getDay()];
    const dayNum = nextDate.getDate();
    const monthNum = monthNames[nextDate.getMonth()];
    const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;

    const item = document.createElement('div');
    item.classList.add('scrollItem3');
    if(i === 0) item.classList.add('active');
    if(isWeekend) item.classList.add('weekend');

    item.dataset.day = dayNum;
    item.dataset.month = monthNum;

    item.innerHTML = `
        <span class="dayName">${i === 0 ? 'დღეს' : dayName}</span>
        <span class="dayNum">${dayNum}</span>
    `;

    item.addEventListener('click', () => {
document.querySelectorAll('#horizScroll3 .scrollItem3').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        filterCards3(String(dayNum), monthNum);
    });

    horizontalScroll3.appendChild(item);
}

const filterCards3 = (day, month) => {
    document.querySelectorAll('.darkul li').forEach(li => {
        if(li.dataset.day === day && li.dataset.month === month){
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}

const todayDay3 = String(currDate3.getDate());
const todayMonth3 = monthNames[currDate3.getMonth()];
filterCards3(todayDay3, todayMonth3);

function generateMonth3(gridId, year, monthInd, startEmptyDays, totalDays){
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
                filterCards3(String(day), month);
                dropdownCal3.classList.remove('show');
            });
        }

        grid.appendChild(dayDiv);
    }
}

generateMonth3('mayGrid3', 2026, 4, 4, 31);
generateMonth3('juneGrid3', 2026, 5, 0, 30);


const items = document.querySelectorAll(".story li");

let stories = [];
let storyIndex = 0;
let imageIndex = 0;
let timer;


const viewer = document.createElement("div");
viewer.className = "storyViewer";

viewer.innerHTML = `
    <div class="progressBar"></div>
    <span class="close">×</span>
    <img id="storyImg">
    <div class="nav" id="prev"></div>
    <div class="nav" id="next"></div>
`;

document.body.appendChild(viewer);

const img = document.getElementById("storyImg");
const closeBtn = viewer.querySelector(".close");
const progressBar = viewer.querySelector(".progressBar");

const nextZone = document.getElementById("next");
const prevZone = document.getElementById("prev");

const data = [
    ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],
     ["./476e6d83-a62f-40c0-84e2-fbcaf3e17d64.jpg", "./0a9ecd37-08e7-4ce0-b0ec-3daca812c9e1.jpg", "./a68744eb-0ea5-4c72-a37e-3f506fd422d7.jpg"],
    ["./5940a0f0-8aa7-4125-94e4-6cb4b3b811c1.jpg", "./0dbda2d5-dcb0-47fd-a761-db831839e00d.jpg","./18e30f8c-85f7-406e-89a4-79dcc229f8d0.jpg"],
    ["./07b0e459-ab2e-4e44-a90f-a2bcd7d359cf.jpg","./02b2aac1-8044-457a-beaa-ccf983c0a194.jpg","./72d93174-b0d2-4ca8-8831-46016b9509c8.jpg"],

];

items.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        stories = data[i]; 
        storyIndex = i;
        imageIndex = 0;

        openStory();
    });
});

function openStory() {
    viewer.style.display = "flex";
    buildProgress();
    showImage();
    startAuto();
}

function showImage() {
    img.src = stories[imageIndex];
    updateProgress();
}

function buildProgress() {
    progressBar.innerHTML = "";

    stories.forEach(() => {
        const bar = document.createElement("div");
        bar.innerHTML = "<span></span>";
        progressBar.appendChild(bar);
    });
}

function updateProgress() {
    const bars = progressBar.querySelectorAll("span");

    bars.forEach((b, i) => {
        if (i < imageIndex) {
            b.style.width = "100%";
        } else if (i === imageIndex) {
            b.style.width = "100%";
            b.style.transition = "width 3s linear";
        } else {
            b.style.width = "0%";
        }
    });
}

function next() {
    if (imageIndex < stories.length - 1) {
        imageIndex++;
        showImage();
        restartAuto();
    } else {
        closeStory();
    }
}

function prev() {
    if (imageIndex > 0) {
        imageIndex--;
        showImage();
        restartAuto();
    }
}

function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => {
        next();
    }, 3000);
}

function restartAuto() {
    clearInterval(timer);
    startAuto();
}

let startX = 0;

viewer.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

viewer.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
});

nextZone.addEventListener("click", next);
prevZone.addEventListener("click", prev);

closeBtn.addEventListener("click", closeStory);

function closeStory() {
    viewer.style.display = "none";
    clearInterval(timer);
}

}

let chatBtn = document.getElementById("chatBtn");
let chatBox = document.getElementById("chatBox");
let inp = document.getElementById("inp");
let messages = document.getElementById("messages");

chatBtn.onclick = function(){
    if(chatBox.style.display === "flex"){
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "flex";
    }
}

let data = [
  { keywords: ["კინო", "ფილმ", "სეანს"], answer: "კინოს ბილეთები იხილეთ აქ: tkt.ge/cinema" },

  { keywords: ["კონცერტ", "მუსიკ", "შოუ", "გამოსვლ"], answer: "კონცერტების ბილეთები იხილეთ აქ: tkt.ge/concerts" },

  { keywords: ["თეატრ", "სპექტაკლ", "პიეს"], answer: "თეატრის ბილეთები იხილეთ აქ: tkt.ge/theatre" },

  { keywords: ["სპორტ", "მატჩ", "თამაშ", "ფეხბურთ", "კალათბურთ", "ჭიდაობ"], answer: "სპორტული ღონისძიებების ბილეთები: tkt.ge/sport" },

  { keywords: ["რკინიგზ", "მატარებ", "ვაგონ", "სადგურ"], answer: "რკინიგზის ბილეთები იხილეთ აქ: tkt.ge/railway" },

  { keywords: ["ავტობუს", "მარშრუტ", "ტრანსპორტ", "მგზავრობ"], answer: "სატრანსპორტო ბილეთები იხილეთ აქ: tkt.ge/transport" },

  { keywords: ["თვითმფრინ", "ფრენ", "ავიაბილ", "აეროპორტ"], answer: "თვითმფრინავის ბილეთები იხილეთ აქ: tkt.ge/flights" },

  
  { keywords: ["ფესტივალ", "festival"], answer: "ფესტივალების ბილეთები იხილეთ აქ: tkt.ge/festivals" },

  { keywords: ["გასართობ", "ატრაქციონ", "პარკ", "ზოოპარკ"], answer: "გასართობი ღონისძიებების ბილეთები: tkt.ge/entertainment" },

  { keywords: ["ბილეთ", "ticket"], answer: "ყველა ბილეთი შეგიძლიათ ნახოთ აქ : tkt.ge" },

  { keywords: ["ფას", "ღირებულებ", "რამდენ ღირ"], answer: "ფასები დამოკიდებულია ღონისძიებაზე. იხილეთ: tkt.ge" },

  { keywords: ["დახმარებ", "help", "მეშველ", "პრობლემ"], answer: "დახმარებისთვის დაგვიკავშირდით: support@tkt.ge" },

  { keywords: ["კონტაქტ", "ნომერ", "ტელეფონ", "დარეკ"], answer: "კონტაქტი: support@tkt.ge | tkt.ge/contact" },

  { keywords: ["გამარჯობ", "hell", "hi", "სალამ","პრივეტ","privet","ზდ","დილამშვიდ","საღამომშვ"], answer: "გამარჯობა! 👋 რით შეგვიძლია დაგეხმაროთ?" },

  { keywords: ["როგორ ხარ", "როგორ ბრძანდებ", "what's up", "wassup"], answer: "კარგად ვარ, მადლობა! 😊 როგორ შემიძლია დაგეხმარო?" },

  { keywords: ["მადლობ", "გმადლობ", "thanks", "thank you"], answer:"🙏 სხვა კითხვა ხომ არ გაქვს?" },

  { keywords: ["კარგად", "bye", "ნახვამდის", "შეხვედრამდე"], answer: "კარგად! ნახვამდის! 👋 საჭიროების შემთხვევაში მოგვწერეთ." },

  { keywords: ["დიახ", "კი", "yes"], answer: "კარგი! რით შემიძლია დაგეხმარო? 😊" },
  { keywords: ["არა", "no", "არ მინდ"], answer: "კარგი, სხვა კითხვის შემთხვევაში მოგვწერეთ! 😊" },
];

document.getElementById("send").onclick = function(){
    let msg = inp.value.toLowerCase();
    if(!msg) return;

    messages.innerHTML += `<p>🧑 ${inp.value}</p>`;
    messages.scrollTop = messages.scrollHeight;
    inp.value = "";

    setTimeout(function(){
        let answered = false;
        for(let i = 0; i < data.length; i++){
            for(let j = 0; j < data[i].keywords.length; j++){
                if(msg.includes(data[i].keywords[j])){
                    messages.innerHTML += `<p>🤖 ${data[i].answer}</p>`;
                    answered = true;
                    break;
                }
            }
            if(answered) break;
        }

        if(!answered){
            messages.innerHTML += `<p>🤖 ვერ გავიგე, სხვანაირად სცადეთ.</p>`;
        }

        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}
messages.scrollTop = messages.scrollHeight;
document.getElementById("clearBtn").onclick = function(){
    messages.innerHTML = "";
    messages.innerHTML += `<p>🤖 ჩატი გასუფთავდა! როგორ შემიძლია დაგეხმარო?</p>`;
}















const searchImg = document.querySelector(".search-box img");
const searchInput = document.querySelector(".search-box input");

searchImg.addEventListener("click", () => {
    if(searchInput.style.display === "block") {
        searchInput.style.display = "none";
        searchInput.value = "";
        // ყველა ჩვენება დაბრუნება
        const items = document.querySelectorAll(".popular li, .purpleul li, .darkul li, .story li");
        items.forEach(item => item.style.display = "");
    } else {
        searchInput.style.display = "block";
        searchInput.focus();
    }
});

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    const items = document.querySelectorAll(".popular li, .purpleul li, .darkul li, .story li");
    
    if(query === "") {
        items.forEach(item => item.style.display = "");
        return;
    }

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "" : "none";
    });
});