


  window.onload = () =>{
    let a = document.querySelector(".btnLogin");
    let b = document.querySelector(".btnRegister");
    a.onclick = () => {
      window.location.assign('./login.html')
    }
    b.onclick = () => {
      window.location.assign('./register.html')
    }
  }

  fetch('http://127.0.0.1:8000/film/')
    .then(response => response.json())
    .then(json => {
        json.forEach((item)=>{
            console.log(item.name)
        })
    })




