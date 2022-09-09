let id:any = document.querySelector(".id");
let advice:any = document.querySelector(".advice");
let btn:any = document.querySelector(".btn");

function quote() {
  fetch("https://api.adviceslip.com/advice", {cache: 'no-cache'})
  .then(response => response.json())
  .then((data) => data.slip)
  .then((data) => {
    id.textContent = data.id;
    advice.textContent =  data.advice;
  })
  .catch((error) => {
    alert(`Error ${error}`);
  });
}

btn.addEventListener("click", () => {
  quote();
});

window.onload = quote;