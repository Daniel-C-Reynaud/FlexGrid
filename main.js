const button = document.querySelector(".fa-bars")
const navBarMobile = document.querySelector(".mobile")

button.addEventListener("click", () => {
   navBarMobile.classList.toggle("show")
})