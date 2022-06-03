const burgerMenu = document.querySelector("#nav-icon1")
const mobileNav = document.querySelector(".mobile-nav")
const links = document.querySelectorAll(".mobile-links")

//open and close nav menu
const navEventListeners = burgerMenu.addEventListener("click", function () {
    mobileNav.classList.toggle("active")
    burgerMenu.classList.toggle("open")
})

//when nav menu links are clicked, close menu andn toggle burger
const linksEventListeners = links.forEach(item => {
    item.addEventListener("click", () => {
        burgerMenu.classList.toggle("open")
        mobileNav.classList.toggle("active")
    })
})

export { navEventListeners, linksEventListeners }