
const HOST = "http://127.0.0.1:5500/"
const SERVER = "http://localhost:8000"

// window.addEventListener("scroll", function () {
//   var topBtn = document.getElementById("topBtn");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     topBtn.style.display = "block";
//   } else {
//     topBtn.style.display = "none";
//   }
//   // nhấn nút go to top
//   var topBtn = document.getElementById("topBtn");
//   if (topBtn != null) {
//     topBtn.addEventListener("click", function () {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//     });

//   }

// });

document.addEventListener("DOMContentLoaded", async function () {
  let searchFilmBtn = document.querySelector(".searchFilmBtn");
  let filmContainer = document.querySelector(".film-container");
  let filmData = await getFilmData();
  // searchFilmBtn.onclick = async () => {
  //   let kw = document.querySelector(".inputKeywordFilm").value;

  //   filmData = await getFilmData(kw);

  //   renderFilmList(filmContainer, filmData);
  // };
  renderFilmList(filmContainer, filmData);
  let eachFilmBtn = document.querySelectorAll(".eachFilmBtn");
  eachFilmBtn.forEach((e) => {
    e.onclick = async () => {
      let id = e.getAttribute("data-id");
      localStorage.setItem("id", id);
      window.location = "detailFilm.html";
    };
  });
});

//  Test api cinema
//  let findFilm = document.querySelector(".findFilm");
//  let findFilmContainer = document.querySelector(".findFilmContainer");
//  let findFilmData = await getFindFilm();

//  findFilm.forEach((e) =>{
//   e.onclick = async () =>{
//     let id = e.getAttribute("data-id");
//     findFilmData = await getFindFilm(id);
//     renderNameFilmList(findFilmContainer,findFilmData);
//   }
//  })

// ------------------- Chuan bi cho chi tiet film

async function getFilmData(kw) {
  let url = `${SERVER}/film/`;

  if (kw) url += `?kw=${kw}`;

  let data = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())
    .then((data) => {
      // console.log(data)
      return data
    });

  return data;
}

// ------------------- Chuan bi cho chi tiet film

//  Test api cinema
// async function getFindFilm(id) {
//   let url = "http://localhost:8080/film/cinema";

//   if (id) url += `?id=${id}`;
//   console.log(url);

//   let data = await fetch(url, {
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());

//   return data;
// }
// function Redirect() {
//   window.location.href = "detailPhim.html";
// }

// let eachFilmBtn = document.querySelectorAll(".eachFilmBtn");
// eachFilmBtn.addEventListener("click", function () {
//   window.location.href = "detailPhim.html";
// });

function renderFilmList(container, data) {
  let html = "";
  console.log(data)
  data.forEach((item) => {
    html += `
          <div class="col-md-4">
              <div class="img-hover-home">
                <img
                  src="${item.thumbnail}"
                  data-src="${item.thumbnail}"
                  class="lazy loaded w-100 hover-overlay img-home"
                  data-was-processed="true"
                />
                <div class="middle-home">
                  <button class="button-middle-home eachFilmBtn" data-id="${item.id}">XEM PHIM</button>
                </div>
              </div>
            <div>
              <h4 class="text-uppercase fs-6">
              ${item.name}
              </h4>
            </div>
          </div>
    `;
  });
  console.log(container)

  container.innerHTML = html ? html : "<h2>Không có phim phù hợp</h2>";
}

// ------------------- Chuan bi cho chi tiet film


