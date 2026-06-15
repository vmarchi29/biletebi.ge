const toggleBtn = document.getElementById("toggleBtn");
const collapsible = document.querySelector(".collapsible");

collapsible.style.display = "none";

toggleBtn.addEventListener("click", () => {
    if(collapsible.style.display === "none"){
        collapsible.style.display = "block";
        toggleBtn.textContent = "დამალვა ∧";
    } else {
        collapsible.style.display = "none";
        toggleBtn.textContent = "ვრცლად ∨";
    }
});