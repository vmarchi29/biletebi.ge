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
const modal = document.getElementById("ticketModal");
const openModalButtons = document.querySelectorAll(".saleBtn");
const closeModalBtn = document.querySelector(".close-modal");

if (modal && closeModalBtn) {
    openModalButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; 
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    });


    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}