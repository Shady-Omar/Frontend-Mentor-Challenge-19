"use strict";
let id = document.querySelector(".id");
let advice = document.querySelector(".advice");
let btn = document.querySelector(".btn");
function quote() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => data.slip)
        .then((data) => {
        id.textContent = data.id;
        advice.textContent = data.advice;
    })
        .catch((error) => {
        alert(`Error ${error}`);
    });
}
btn.addEventListener("click", () => {
    quote();
});
window.onload = quote;
//# sourceMappingURL=index.js.map