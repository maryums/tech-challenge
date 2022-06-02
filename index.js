const burgerMenu = document.querySelector("#burger")
const mobileNav = document.querySelector(".mobile-nav")
const links = document.querySelectorAll(".mobile-links")
console.log(links)

burgerMenu.addEventListener("click", function () {
    mobileNav.classList.toggle("active")
    burgerMenu.classList.toggle("active")
})

for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.addEventListener("click", () => {
        burgerMenu.classList.toggle("active")
        mobileNav.classList.toggle("active")
    })
}

const fetchData = () => {
    fetch("./obj.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.posts)
            let dataArr = data.posts
            let output = ""
            let count = 1
            dataArr.forEach((item) => {
                output += `
                <div class="card">
                <div class="card-photo">
                    <img src=./assets/${count}.png>
                </div>
    
                <div class="card-article">
                    <h3> ${item.title} </h3>
                    <p> ${item.summary} </p>
                </div>
            </div>
      `
                count++
            })
            document.querySelector(".card-container").innerHTML = output
        })
        .catch((error) => {
            console.log(`Error Fetching data : ${error}`)
            document.querySelector(".card-container").innerHTML = ""
        })
}
fetchData()
