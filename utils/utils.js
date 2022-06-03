async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
const data = await getData("./obj.json");

const mockAPI = { data }

//render the article cards with API
const renderCards = () => {
    let dataArr = mockAPI.data.posts

    //using count to render photos, usually would get from API 
    let count = 1
    dataArr.forEach((item) => {
        let container = document.querySelector(".card-container")
        let card = document.createElement('div')
        card.classList.add('card')
        let cardPhoto = document.createElement('div')
        cardPhoto.classList.add('card-photo')
        cardPhoto.innerHTML = `<img src=./assets/${count}.jpeg>`
        let cardArticle = document.createElement('div')
        cardArticle.classList.add('card-article')
        let h3Title = document.createElement('h3')
        h3Title.classList.add('title-link')
        h3Title.setAttribute("id", `${count}`);
        h3Title.innerHTML = `${item.title}`
        let pSummary = document.createElement('p')
        pSummary.innerHTML = `${item.summary}`

        container.appendChild(card)
        card.appendChild(cardPhoto)
        card.appendChild(cardArticle)
        cardArticle.appendChild(h3Title)
        cardArticle.appendChild(pSummary)

        count++
    })

}

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

// when article title is clicked, render each article and display under nav
const renderArticle = document.body.addEventListener('click', function (event) {
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



export { mockAPI, renderCards, navEventListeners, linksEventListeners, renderArticle }
