const container = document.getElementById('sliderContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
 
nextBtn.addEventListener('click', () => {
  const firstSlide = container.querySelector('.slide');
  container.style.transition = "transform 0.4s ease-in-out";
  const moveWidth = firstSlide.offsetWidth + 20;
  container.style.transform = `translateX(-${moveWidth}px)`;
  setTimeout(() => {
    container.style.transition = "none";
    container.appendChild(firstSlide);
    container.style.transform = "translateX(0px)";
  }, 400);
});
 
prevBtn.addEventListener('click', () => {
  const slides = container.querySelectorAll('.slide');
  const lastSlide = slides[slides.length - 1];
  container.style.transition = "none";
  container.insertBefore(lastSlide, container.firstChild);
  const moveWidth = lastSlide.offsetWidth + 20;
  container.style.transform = `translateX(-${moveWidth}px)`;
  setTimeout(() => {
    container.style.transition = "transform 0.4s ease-in-out";
    container.style.transform = "translateX(0px)";
  }, 10);
});
 
const horizontalScroll = document.getElementById("horizScroll");
const weekDays = ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];
let currDate = new Date();
 
for (let i = 0; i < 30; i++) {
  let nextDate = new Date(currDate);
  nextDate.setDate(currDate.getDate() + i);
 
  const dayName = weekDays[nextDate.getDay()];
  const dayNum = nextDate.getDate();
  const isWeekend = nextDate.getDay() === 0 || nextDate.getDay() === 6;
 
  const item = document.createElement('div');
  item.classList.add('scrollItem');
  item.dataset.day = nextDate.getDate();

  if (isWeekend) item.classList.add('weekend');
 
  item.innerHTML = `
    <span class="dayName">${i === 0 ? 'დღეს' : dayName}</span>
    <span class="dayNum">${dayNum}</span>
  `;
 
  item.addEventListener('click', () => {
    const isAlreadyActive = item.classList.contains('active');
    document.querySelectorAll('.scrollItem').forEach(el => el.classList.remove('active'));
    if (!isAlreadyActive) item.classList.add('active');
    filterMovies();
  });
 
  horizontalScroll.appendChild(item);
}
 
function toggleDropdown(button) {
  const currentDropdown = button.nextElementSibling;
 
  document.querySelectorAll('.dropdown-content').forEach(dropdown => {
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove('show');
      dropdown.previousElementSibling.classList.remove('active');
    }
  });
 
  currentDropdown.classList.toggle('show');
  button.classList.toggle('active');
}
 
document.addEventListener('mousedown', function(event) {
  if (event.target.closest('.filter-dropdown')) return;
 
  document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
});
 

function getChecked(selector) {
  return Array.from(document.querySelectorAll(selector + ':checked')).map(el => el.value.trim());
}
 
function filterMovies() {
  const genres  = getChecked('.genre-filter');
  const langs   = getChecked('.lang-filter');
  const times   = getChecked('.time-filter');
  const screens = getChecked('.screen-filter');
 
  const activeDay = document.querySelector('.scrollItem.active');
  const day = activeDay ? parseInt(activeDay.dataset.day) : null;
 
  document.querySelectorAll('.card[data-genre]').forEach(card => {
    const cardGenres  = card.dataset.genre  ? card.dataset.genre.split(',').map(s => s.trim())        : [];
    const cardLangs   = card.dataset.lang   ? card.dataset.lang.split(',').map(s => s.trim())         : [];
    const cardTimes   = card.dataset.time   ? card.dataset.time.split(',').map(s => s.trim())         : [];
    const cardScreens = card.dataset.screen ? card.dataset.screen.split(',').map(s => s.trim()).filter(Boolean) : [];
    const cardDays    = card.dataset.days   ? card.dataset.days.split(',').map(s => parseInt(s.trim())) : [];
 
    let show = true;
 
    if (genres.length  && !genres.some(g  => cardGenres.includes(g)))   show = false;
    if (langs.length   && !langs.some(l   => cardLangs.includes(l)))    show = false;
    if (times.length   && !times.some(t   => cardTimes.includes(t)))    show = false;
    if (screens.length && !screens.some(s => cardScreens.includes(s))) show = false;
    if (day !== null && cardDays.length && !cardDays.includes(day)) show = false;
 
    const wrapper = card.closest('a') || card;
    wrapper.style.display = show ? '' : 'none';
  });

  document.querySelectorAll('.row1, .row2, .row3, .row4').forEach(row => {
    const anyVisible = Array.from(row.querySelectorAll('a')).some(a => a.style.display !== 'none');
    row.style.display = anyVisible ? '' : 'none';
  });
}
 

document.querySelectorAll('.checkbox-label').forEach(label => {
  label.addEventListener('click', () => {
    setTimeout(filterMovies, 0);
  });
});
 
const toggleBtn = document.getElementById("toggleBtn");
const textBlock = document.getElementById("textBlock");
const btnText = document.querySelector(".btnTxt");
 
toggleBtn.addEventListener('click', () => {
  textBlock.classList.toggle('open');
  toggleBtn.classList.toggle('expanded');
  btnText.textContent = textBlock.classList.contains('open') ? 'დამალვა' : 'ვრცლად';
});


