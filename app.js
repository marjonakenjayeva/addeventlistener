
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let minus = document.getElementById("minus")
let number = document.getElementById("number")
let plus = document.getElementById("plus")
let rang = document.getElementById("rang")

function Send() {
  number.innerText = input.value
  input.value = ""
}
btn.addEventListener('click', Send)


plus.addEventListener("click", () => {
  let son = +number.innerText;
  son = son + 1;
  number.innerText = son;
})



minus.addEventListener("click", () => {
  let son = +number.innerText;
  son = son - 1;
  number.innerText = son;
})


function ChangeColor() {
  number.style.color = rang.value;
}
rang.addEventListener("input", ChangeColor)
