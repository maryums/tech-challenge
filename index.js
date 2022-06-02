const burgerMenu = document.querySelector("#burger");
const navbarMenu = document.querySelector(".nav-items");
const mobileNav = document.querySelector('.mobile-nav')

console.log(mobileNav)

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
    mobileNav.classList.toggle("active")
    burgerMenu.classList.toggle("active");
});


const fetchData = () => {
    fetch('./obj.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.posts)
            let dataArr = data.posts
            let output = ''
            let count = 1
            dataArr.forEach(item => {
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
            document.querySelector('.card-container').innerHTML = output
        })
        .catch(error => {
            console.log(`Error Fetching data : ${error}`)
            document.querySelector('.card-container').innerHTML = ''
        });
}

fetchData()

