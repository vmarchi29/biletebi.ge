const fromField = document.querySelector(".tkt_from");
const toField = document.querySelector(".tkt_to");
const dateField = document.querySelector(".tkt_date");

window.addEventListener("DOMContentLoaded", () => {

    const from = localStorage.getItem("from");
    const to = localStorage.getItem("to");
    const date = localStorage.getItem("date");

    fromField.value = from || "";
    toField.value = to || "";
    dateField.value = date || "";
});


const citiesInputs = document.querySelectorAll(".tkt_cities");
const dateInputs = document.querySelectorAll(".tkt_dateontkt");
window.addEventListener("DOMContentLoaded", () => {

    const from = localStorage.getItem("from");
    const to = localStorage.getItem("to");
    const date = localStorage.getItem("date");

    citiesInputs.forEach(input => {
        input.value = `${from} - ${to}`;
    });

    dateInputs.forEach(input => {
        input.value = date;
    });

});


