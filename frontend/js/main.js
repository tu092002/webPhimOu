
// code chung cho all trang web



window.addEventListener("scroll", function () {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
    // nhấn nút go to top
    var topBtn = document.getElementById("topBtn");
    if (topBtn != null) {
      topBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
  
    }
  
  });
  
// end code chung


window.onload = () => {
  let a = document.querySelector(".btnLogin");
  let b = document.querySelector(".btnRegister");
  a.onclick = () => {
    window.location.assign('./login.html')
  }
  b.onclick = () => {
    window.location.assign('./register.html')
  }

  // header fix khi scroll sticky
  const header = document.querySelector('header.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });




}




// fetch('http://127.0.0.1:8000/film/')
//   .then(response => response.json())
//   // .then(json => {
//   //   json.forEach((item) => {
//   //     console.log(item.name)
//   //   })
//   // })
//   .then(movies => {

//     const container = document.querySelector('.movie-cards');

//     movies.forEach((movie) => {
//       console.log(movie)

//       const card = document.createElement('div');
//       card.classList.add('card1');

//       const image = document.createElement('img');
//       image.src = movie.image;
//       image.alt = movie.name;
//       card.appendChild(image);

//       const title = document.createElement('h2');
//       title.textContent = movie.name;
//       card.appendChild(title);

//       const description = document.createElement('p');
//       description.textContent = movie.description;
//       card.appendChild(description);

//       container.appendChild(card);
//     });

//   })




