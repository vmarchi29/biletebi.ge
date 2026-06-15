const modalFanjara = document.getElementById("modal-fanjara");
const btnGacsnis = document.getElementById("btn-gacsnis");
const btnDaxurvis = document.getElementById("btn-daxurvis");
const treilerVideo = document.getElementById("treiler-video");
btnGacsnis.addEventListener("click", () => {
    modalFanjara.classList.add("gacsnili");
});

btnDaxurvis.addEventListener("click", () => {
    modalFanjara.classList.remove("gacsnili");
    
    const videoSrc = treilerVideo.src;
    treilerVideo.src = videoSrc;
});


const kalendariScroll = document.getElementById("kalendari-scroll");
const kvirisDgeebi = ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

let currDate = new Date();

for (let i = 0; i < 30; i++) {
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate() + i);

    const dgisSaxeli = kvirisDgeebi[nextDate.getDay()];
    const dgisRicxvi = nextDate.getDate();
    const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;

    const dgeBox = document.createElement('div');
    dgeBox.classList.add('dge-elementi');
    
    if (i === 0) dgeBox.classList.add('aqtiuri');
    if (isWeekend) dgeBox.classList.add('ueshme');

    dgeBox.innerHTML = `
        <span class="saxeli">${i === 0 ? 'დღეს' : dgisSaxeli}</span>
        <span class="ricxvi">${dgisRicxvi}</span>
    `;

    dgeBox.addEventListener('click', () => {
        document.querySelectorAll('.dge-elementi').forEach(el => el.classList.remove('aqtiuri'));
        dgeBox.classList.add('aqtiuri');
    });

    kalendariScroll.appendChild(dgeBox);
}