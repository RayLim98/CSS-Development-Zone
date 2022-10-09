const titleElements = document.querySelectorAll(".title")

titleElements.forEach(element => {
  element.addEventListener("click", onClick)
})

function onClick(event) {
  const element = event.target;
  element.classList.add('title2')
}
