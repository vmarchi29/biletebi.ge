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