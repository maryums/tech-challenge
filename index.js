import { mockAPI, renderCards } from './utils/utils.js'

// window.addEventListener('scroll', function () {
//     const nav = document.querySelector('nav');
//     nav.classList.toggle("sticky", window.scrollY > 0);
// })

console.log(mockAPI)

document.body.addEventListener('click', function (event) {
    console.log(event.target.id)
    let index = (event.target.id) - 1

    if (event.target.className === 'title-link') {

        let cardContainer = document.querySelector(".card-container")
        let header = document.querySelector("header")
        let container = document.querySelector(".container")
        container.removeChild(cardContainer)
        container.removeChild(header)

        let dataArr = mockAPI.data.posts

        console.log(dataArr[index])
        let articleContainer = document.createElement("div")
        articleContainer.classList.add("article-container")

        let articleImage = document.createElement("div")
        articleImage.classList.add("article-image")
        articleImage.innerHTML = `<img src="./assets/${event.target.id}.jpeg">`

        let articleTitle = document.createElement("div")
        articleTitle.classList.add("article-title")
        articleTitle.innerHTML = `<h3> ${dataArr[index].title} </h3>`

        let articleSummary = document.createElement("div")
        articleSummary.classList.add("article-summary")
        articleSummary.innerHTML = `<p> ${dataArr[index].article} </p>`

        let articleDate = document.createElement("p")
        articleDate.classList.add("article-date")
        articleDate.innerHTML = "June 2, 2022"
        let articleLinksUl = document.querySelector("#article-ul")
        let articleLinks = document.querySelector(".article-links")
        let articleLinksLi = document.createElement("li")
        articleLinksLi.innerHTML = `${dataArr[index].title}`

        articleLinks.style.display = "block";
        articleLinks.insertAdjacentElement("afterend", articleContainer)
        articleContainer.appendChild(articleTitle)
        articleContainer.appendChild(articleDate)
        articleContainer.appendChild(articleImage)
        articleContainer.appendChild(articleSummary)
        articleLinksUl.appendChild(articleLinksLi)
        window.scrollTo(0, 0)


    };
});

const burgerMenu = document.querySelector("#nav-icon1")
const mobileNav = document.querySelector(".mobile-nav")
const links = document.querySelectorAll(".mobile-links")

burgerMenu.addEventListener("click", function () {
    mobileNav.classList.toggle("active")
    burgerMenu.classList.toggle("open")
})

links.forEach(item => {
    item.addEventListener("click", () => {
        burgerMenu.classList.toggle("open")
        mobileNav.classList.toggle("active")
    })
})

renderCards()
