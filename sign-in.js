const eyeBtn = document.getElementById("eyeBtn");
const passInput = document.getElementById("passInput");

eyeBtn.addEventListener("click", () => {
    if(passInput.type === "password") {
        passInput.type = "text";
    } else {
        passInput.type = "password";
    }
});
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
    const phone = document.getElementById("phoneInput").value;
    const pass = passInput.value;

    if(!phone || !pass) {
        alert("გთხოვთ შეავსოთ ყველა ველი");
        return;
    }
    alert("შესვლა წარმატებულია!");
});
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        submitBtn.click();
    }
});