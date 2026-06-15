let questns = document.querySelectorAll(".questns");


questns.forEach(questn => {
    questn.addEventListener("click", () => {
        if(questn.classList.contains("open")){
            questn.classList.remove("open")
        }else {
            questn.classList.add("open")
        }
    });
});
