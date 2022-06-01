const fetchData = () => {
    fetch('./obj.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.posts)
            let dataArr = data.posts
            let output = ''
            dataArr.forEach(item => {
                output += `
                    <ul>
                    <li>title: ${item.title}</li>
                    <li>summary: ${item.summary}</li>
                    </ul>
      `
            })
            document.querySelector('.results').innerHTML = output


        })
        .catch(error => {
            console.log(`Error Fetching data : ${error}`)
        });
}
