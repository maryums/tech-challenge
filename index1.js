const fetchData = () => {
    fetch('./obj.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.posts)
            let dataArr = data.posts
            let output = ''
            dataArr.forEach(item => {
                output += `
                <div class="card">
                <div class="card-photo">
                    <img src="./assets/02.png">
                </div>
    
                <div class="card-article">
                    <h3> ${item.title} </h3>
                    <p> ${item.summary} </p>
                </div>
            </div>
      `
            })
            document.querySelector('.card-container').innerHTML = output


        })
        .catch(error => {
            console.log(`Error Fetching data : ${error}`)
        });
}
