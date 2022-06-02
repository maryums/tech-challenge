window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 0);
})

document.body.addEventListener('click', function (event) {
    if (event.target.className === 'title-link') {
        let cardContainer = document.querySelector(".card-container")
        let container = document.querySelector(".container")
        container.removeChild(cardContainer)

    };
});

const burgerMenu = document.querySelector("#nav-icon1")
const mobileNav = document.querySelector(".mobile-nav")
const links = document.querySelectorAll(".mobile-links")
const article = document.querySelectorAll(".summary")


burgerMenu.addEventListener("click", function () {
    mobileNav.classList.toggle("active")
    burgerMenu.classList.toggle("open")
})

for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.addEventListener("click", () => {
        burgerMenu.classList.toggle("open")
        mobileNav.classList.toggle("active")
    })
}

for (let i = 0; i < article.length; i++) {
    let article = article[i]
    article.addEventListener("click", () => {
        console.log("clicked")
    })
}


const fetchData = () => {
    fetch("./obj.json")
        .then((response) => response.json())
        .then((data) => {

            let dataArr = data.posts
            //using count to render photos, usually would get from API 
            let count = 1

            dataArr.forEach((item) => {
                let container = document.querySelector(".card-container")
                let card = document.createElement('div')
                card.classList.add('card')
                let cardPhoto = document.createElement('div')
                cardPhoto.classList.add('card-photo')
                cardPhoto.innerHTML = `<img src=./assets/${count}.png>`
                let cardArticle = document.createElement('div')
                cardArticle.classList.add('card-article')
                let h3Title = document.createElement('h3')
                h3Title.classList.add('title-link')
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

        })
        .catch((error) => {
            console.log(error)
        })
}
fetchData()
