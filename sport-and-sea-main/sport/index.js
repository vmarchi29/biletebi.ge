{
    const toggleBtnn = document.getElementById("toggleBtnn");
const textBlock = document.getElementById("textBlockk");
const btnTextt = document.querySelector(".btnTxtt");

if (toggleBtnn && textBlock) {
    toggleBtnn.addEventListener('click', () => {
        textBlock.classList.toggle('open');
        toggleBtnn.classList.toggle('expanded');

        if (btnTextt) {
            if (textBlock.classList.contains('open')) {
                btnTextt.textContent = 'დამალვა';
            } else {
                btnTextt.textContent = 'ვრცლად';
            }
        }
    });
}

const btn = document.getElementById("sho"); 
const h2 = document.getElementById("h2");
const ricketsContainer2 = document.querySelector(".rickets-container2");

let toggle = false;

if (btn) {
    btn.addEventListener("click", () => {
        if (!toggle && ricketsContainer2) {
           ricketsContainer2.classList.remove("hidden");
           if (h2) h2.classList.remove("expandable-text");
           btn.style.display = "none";
        }
    });
}

const arrow = document.querySelector(".arrow");
const remove = document.getElementById("remove");

if (ricketsContainer2) {
    ricketsContainer2.classList.add("hidden");
}

if (remove) {
    remove.addEventListener("click", () => {
        if (!toggle && ricketsContainer2) {
           ricketsContainer2.classList.add("hidden");
           if (h2) h2.classList.add("expandable-text");
           if (btn) btn.style.display = "block";
        }
    });
}

const hiddenP = document.querySelectorAll(".hiddenP");
const btnText = document.getElementById("btnText");
const text = document.getElementById("text");
const arrrow = document.getElementById("arrrow");
const toggleBtn = document.getElementById("toggleBtn");

if (toggleBtn) {
    let toggglee = true;

    if (hiddenP.length > 0) {
        hiddenP.forEach(l => l.classList.add("hidden-p"));
    }
    if (text) text.classList.add("texts");
    if (arrrow) arrrow.classList.remove("aroww-transform");
    if (btnText) btnText.innerHTML = "ვრცლად";

    toggleBtn.addEventListener("click", () => {
        if (hiddenP.length > 0) {
            hiddenP.forEach(l => l.classList.toggle("hidden-p"));
        }
        if (text) text.classList.toggle("texts");
        if (arrrow) arrrow.classList.toggle("aroww-transform");
        if (btnText) {
            btnText.innerHTML = toggglee ? "დამალვა" : "ვრცლად";
        }
        togglee = !toggglee;
    });
}




function byTicket(type) {
    let termsContainer = document.createElement("div");
    let terms = document.createElement("div");
    
    let h4 = document.createElement("h4");
    h4.classList.add("terms-h4");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    let p7 = document.createElement("p");
    let p8 = document.createElement("p");

    h4.textContent = "წესები და პირობები";
    p1.textContent = "*გთხოვთ გაითვალისწინოთ შესაბამისი ჩაცმულობა";
    p2.textContent = "გაკვეთილისთვის:";
    p3.textContent = "სპორტული ტანსაცმელი";
    p4.textContent = "მზის სპორტული სათვალე";
    p5.textContent = "სპორტული ხელთათმანი";
    p6.textContent = "*აუცილებელია შეძენის შემდეგ წინასწარ დაუკავშირდეთ";
    p7.textContent = "და შეათანხმოთ გაკვეთილის დრო ინსტრუქტორთან.";
    p8.textContent = "საკონტაქტო ნომერი: +995511155442";

    let termsHeader = document.createElement("div");
    termsHeader.classList.add("terms-Header");
    let closetermsContainer = document.createElement("button");
    closetermsContainer.textContent = "X";

    termsHeader.appendChild(h4);
    termsHeader.appendChild(closetermsContainer);

    let pContainer = document.createElement("div");
    pContainer.classList.add("p-container");
    pContainer.appendChild(p1);
    pContainer.appendChild(p2);
    pContainer.appendChild(p3);
    pContainer.appendChild(p4);
    pContainer.appendChild(p5);
    pContainer.appendChild(p6);
    pContainer.appendChild(p7);
    pContainer.appendChild(p8);

    let termsBtn = document.createElement("button");
    termsBtn.textContent = "გაგრძელება"; 

    termsBtn.addEventListener("click", () => {
       termsContainer.classList.remove("active");
       setTimeout(() => {
            termsContainer.remove();
            if (typeof nexStep === "function") {
                nexStep(type);
            }
       }, 500); 
    });

    let termsBtnDiv = document.createElement("div");
    termsBtnDiv.classList.add("termsBtn-Div");
    termsBtnDiv.appendChild(termsBtn);

    termsContainer.classList.add("terms-container");
    terms.classList.add("terms");
    terms.appendChild(termsHeader);
    terms.appendChild(pContainer);
    terms.appendChild(termsBtnDiv);
    termsContainer.appendChild(terms);
    
    document.body.appendChild(termsContainer);

    setTimeout(() => termsContainer.classList.add("active"), 10);
    
    closetermsContainer.onclick = () => {
        termsContainer.classList.remove("active");
        setTimeout(() => termsContainer.remove(), 500);
    };
}

const sportBtn = document.getElementById("buySport"); 
if (sportBtn) {
    sportBtn.addEventListener("click", () => byTicket("sport"));
}

const eventBtn = document.getElementById("buyEvent");
if (eventBtn) {
    eventBtn.addEventListener("click", () => byTicket("event"));
}

function nexStep(type){
     const byTicetsContainer = document.querySelector(".by-ticets-container");
     byTicetsContainer.classList.remove("hidde-function");
     byTicetsContainer.classList.add("active-byTicets")
     
     let lessenOneBtn = document.getElementById("lessenOneBtn");
     let lessenTwoBtn = document.getElementById("lessenTwoBtn");
     const produqt = document.getElementById("produqt");
     const price = document.getElementById("price")
     
     let priceOne = 0
     let priceTwo = 0
     let oneLessen = ""
     let twoLessen = ""
     let oneTicketTitle = ""
     let fiveTicketTitle = ""

     if(type === 'laser'){
         priceOne = 190
         priceTwo = 800
         oneLessen = "ხუთი გაკვეთილი*"
         twoLessen = "ერთი საცდელი გაკვეთილი*"
         oneTicketTitle = "1 გაკვეთილი"
         fiveTicketTitle = "5 გაკვეთილი"
     }
     if(type === 'Yacht'){
         priceOne = 125
         priceTwo = 500
         oneLessen = "ოთხი გაკვეთილი*"
         twoLessen = "ერთი საცდელი გაკვეთილი*"
         oneTicketTitle = "1 გაკვეთილი"
         fiveTicketTitle = "4 გაკვეთილი"
     }
     
     lessenTwoBtn.addEventListener("click", () =>{
         lessenOneBtn.classList.remove("active-Btn")
         lessenTwoBtn.classList.add("active-Btn")
         produqt.innerHTML = oneLessen
         price.innerHTML = priceTwo
     })

     lessenOneBtn.addEventListener("click", () =>{
         lessenOneBtn.classList.add("active-Btn")
         lessenTwoBtn.classList.remove("active-Btn")
         produqt.innerHTML = twoLessen
         price.innerHTML = priceOne
     })

     const byBtn = document.querySelector(".byBtn")
     const minus = document.getElementById("minus")
     const pluc = document.getElementById("plus");
     let countDiv = document.querySelector(".byBtnDiv")
     const continueBtn = byBtn.querySelector("button");

     countDiv.innerHTML = ""; 
     
     let counth3 = document.createElement("h3")
     let ticetText = document.createElement("p")
     
     countDiv.appendChild(counth3)
     countDiv.appendChild(ticetText)
     byBtn.insertBefore(countDiv, continueBtn);

     let count = 0
     let numberCount = 0
     countDiv.style.display = "none";
     continueBtn.style.width = "";
     counth3.textContent = "";
     ticetText.textContent = "";

     const yourProducts = document.querySelector(".your-products");
     yourProducts.innerHTML = "";

     pluc.addEventListener("click", () =>{
         let currentPrice = Number(price.innerHTML);

         if(currentPrice === priceOne){
             count += priceOne;

             let yourProductsChilddDiv = document.createElement("div");
             yourProductsChilddDiv.classList.add("sport-one-lesson");
             let priceH5 = document.createElement("h5");
             let priceP = document.createElement("p");
             let priceh4 = document.createElement("h4");

             priceH5.innerHTML = oneTicketTitle;
             priceP.innerHTML = twoLessen;
             priceh4.innerHTML = priceOne + "₾";

             yourProductsChilddDiv.appendChild(priceH5);
             yourProductsChilddDiv.appendChild(priceP);
             yourProductsChilddDiv.appendChild(priceh4);
             yourProducts.appendChild(yourProductsChilddDiv);
         }
         else if(currentPrice === priceTwo){
             count += priceTwo;

             let yourProductsChilddDiv = document.createElement("div");
             yourProductsChilddDiv.classList.add("sport-five-lessons");
             let priceH5 = document.createElement("h5");
             let priceP = document.createElement("p");
             let priceh4 = document.createElement("h4");

             priceH5.innerHTML = fiveTicketTitle;
             priceP.innerHTML = oneLessen;
             priceh4.innerHTML = priceTwo + "₾";

             yourProductsChilddDiv.appendChild(priceH5);
             yourProductsChilddDiv.appendChild(priceP);
             yourProductsChilddDiv.appendChild(priceh4);
             yourProducts.appendChild(yourProductsChilddDiv);
         }
         numberCount++
         
         ticetText.textContent = `${numberCount} ბილეთი`
         if (count > 0) {
             counth3.textContent = count + "₾";
             countDiv.style.display = "block";
             continueBtn.style.width = "200px"
         }
     })



     minus.addEventListener("click", () =>{
         let currentPrice = Number(price.innerHTML);

         if(currentPrice === priceOne && count > 0){
             count -= priceOne
             numberCount--

             let products = yourProducts.querySelectorAll(".sport-one-lesson");
             if(products.length > 0) {
                 products[products.length - 1].remove();
             }
         }
         else if(currentPrice === priceTwo && count > 0){
             count -= priceTwo
             numberCount--

             let products = yourProducts.querySelectorAll(".sport-five-lessons");
             if(products.length > 0) {
                 products[products.length - 1].remove();
             }
         }
        
         if(count > 0){
             counth3.textContent = count + "₾"
             ticetText.textContent = `${numberCount} ბილეთი`
         }
         
         if (count <= 0) {
             count = 0;
             numberCount = 0;
             countDiv.style.display = "none";
             continueBtn.style.width = "";
             yourProducts.innerHTML = "";
         }
     })
      countDiv.addEventListener("click", () => {
    const yourProducts = document.querySelector(".your-products");
    yourProducts.style.transition = "transform 0.4s ease";
    yourProducts.style.transform = "translateY(0)";
   });
}

function closeBtn(type){{
    const byTicetsContainer = document.querySelector(".by-ticets-container");
     byTicetsContainer.classList.add("hidde-function");
     byTicetsContainer.classList.remove("active-byTicets")
}}

     
     




const calendarBtn = document.getElementById("calendarBtn");
const dropdownCal = document.getElementById("dropdownCal");

if (calendarBtn && dropdownCal) {
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
}

const horizontalScroll = document.getElementById("horizScroll");
const weekDays = ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

let currDate = new Date();

if (horizontalScroll) {
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
}


function generateMonth(gridId, year, monthInd, startEmptyDays, totalDays){
    const grid = document.getElementById(gridId);
    
    if (!grid) return;

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

generateMonth('juneGrid', 2026, 5, 0, 30);


const trigger = document.getElementById("dropdownTrigger");
const menu = document.getElementById("dropMenu");
const seltext = document.querySelector('.selText');
const items = document.querySelectorAll('.dropdownItem');

if (trigger && menu) {
    trigger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (seltext) seltext.innerText = item.innerText;
            menu.classList.remove('show');
        });
    });

    document.addEventListener('click', (e) => {
        if(!trigger.contains(e.target) && !menu.contains(e.target)){
            menu.classList.remove('show');
        }
    });
}

}