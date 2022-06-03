async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
const data = await getData("./obj.json");

const mockAPI = { data }

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
        cardPhoto.innerHTML = `<img src=./assets/${count}.png>`
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

export { mockAPI, renderCards }
