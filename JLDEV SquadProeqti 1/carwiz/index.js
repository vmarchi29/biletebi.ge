let daxdiv = document.querySelector(".daxgaxbtndiv");
let daxbtn = document.querySelector(".daxgaxbtn");
let carwizplatform = document.querySelector(".carwizplatform");
daxbtn.textContent = "ვრცლად"



daxbtn.addEventListener("click", () => {
    carwizplatform.classList.toggle("btnvrclad")
    daxdiv.classList.toggle("btnvrclad")
    if(daxbtn.textContent === "ვრცლად"){
        daxbtn.textContent = "დამალვა"
    }else{
        daxbtn.textContent = "ვრცლად"
    }
});
