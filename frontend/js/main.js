

  fetch('http://127.0.0.1:8000/film/')
    .then(response => response.json())
    .then(json => {
        json.forEach((item)=>{
            console.log(item.name)
        })
    })




