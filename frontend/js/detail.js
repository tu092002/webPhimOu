
const HOST = "http://127.0.0.1:5500/"
const SERVER = "http://localhost:8000"

document.addEventListener("DOMContentLoaded", async function () {
  let eachFilmContainer = document.querySelector(".eachFilm-container");
  
  let id = localStorage.getItem("id");
  let eachFilmData = await getEachFilmData(id);
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
  renderEachFilmList(eachFilmContainer, eachFilmData);
});

// ------------------- Chuan bi cho chi tiet film
async function getEachFilmData(id) {
  let url = `${SERVER}/film/`;

  if (id) url += `?id=${id}`;
  console.log(url);

  let data = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  console.log(data)
  return data;
}

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

// ------------------- Chuan bi cho chi tiet film
function renderEachFilmList(container, data) {
  let html = "";
  html += `
    <div class="row">
    <div class="col-6 movie-image">
      ${data[0].srcFilm}
    </div>
    <div class="col-6 movie-detail">
      <h1 class="movie-title">
        <span class="title-1" itemprop="name">${data[0].name}</span>
      </h1>
      <div
        class="slimScrollDiv"
        style="
          position: relative;
          overflow: hidden;
          width: auto;
          height: 277px;
        "
      >
        <div
          class="movie-meta-info"
          style="overflow: hidden; width: auto; height: 277px"
        >
          <dl class="movie-dl">
            <dt class="movie-dt">Tr???ng th??i:</dt>
            <dd class="movie-dd status">FHD Vietsub + Thuy???t minh</dd>
            <br />
            <dt class="movie-dt">?????o di???n:</dt>
            <dd class="movie-dd dd-cat">
              <a
                class="director"
                href="#"
                title="Kim Hong-sun"
                >Kim Hong-sun</a
              >,
            </dd>
            <br />
            <dt class="movie-dt">Qu???c gia:</dt>
            <dd class="movie-dd dd-cat">
              <a
                href="#"
                title="H??n Qu???c"
                >${data[0].category}</a
              >,
            </dd>
            <br />
            <dt class="movie-dt">N??m s???n xu???t:</dt>
            <dd class="movie-dd">
              <a href="https://hiphimmoi.net/release/2022/" rel="tag"
                >2022</a
              >
            </dd>
            <br />
            <dt class="movie-dt">Th???i l?????ng:</dt>
            <dd class="movie-dd">122 Ph??t</dd>
            <br />
            <dt class="movie-dt">Ch???t l?????ng:</dt>
            <dd class="movie-dd">B???n ?????p</dd>
            <br />
            <dt class="movie-dt">????? ph??n gi???i:</dt>
            <dd class="movie-dd">Full HD</dd>
            <br />
            <dt class="movie-dt">Ng??n ng???:</dt>
            <dd class="movie-dd">Ph??? ????? vi???t</dd>
            <br />
            <dt class="movie-dt">Th??? lo???i:</dt>
          
        </div>
        <div
          class="slimScrollBar ui-draggable"
          style="
            background: rgb(85, 85, 85);
            width: 7px;
            position: absolute;
            top: 0px;
            opacity: 0.4;
            display: block;
            border-radius: 7px;
            z-index: 99;
            right: 1px;
            height: 259.22px;
          "
        ></div>
        <div
          class="slimScrollRail"
          style="
            width: 7px;
            height: 100%;
            position: absolute;
            top: 0px;
            display: block;
            border-radius: 7px;
            background: rgb(51, 51, 51);
            opacity: 0.2;
            z-index: 90;
            right: 1px;
          "
        ></div>
      </div>
      <div class="box-rating">
        <input id="hint_current" type="hidden" value="" />
        <input id="score_current" type="hidden" value="6" />
        <p>????nh gi?? phim <span class="num-rating">(4 l?????t)</span></p>
        <div
          id="star"
          data-score="6"
          style="cursor: pointer; width: 200px"
        >
          <img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="1"
            title="D??? t???"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="2"
            title="D???"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="3"
            title="Kh??ng hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="4"
            title="Kh??ng hay l???m"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="5"
            title="B??nh th?????ng"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="6"
            title="Xem ???????c"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="7"
            title="C?? v??? hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="8"
            title="Hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="9"
            title="R???t hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="10"
            title="Tuy???t hay"
          /><input type="hidden" name="score" value="6" />
        </div>
        <span id="hint" style="font-size: 12px"></span>
        <span
          class="hidden"
          itemprop="aggregateRating"
          itemscope=""
          itemtype="https://schema.org/AggregateRating"
        >
          <span itemprop="ratingValue">5</span
          ><meta itemprop="ratingcount" content="4" />
          <meta itemprop="bestRating" content="10" />
          <meta itemprop="worstRating" content="1" />
          <span class="hidden" itemprop="reviewCount">4</span>
        </span>
      </div>



      <div class="docThem">
          <button
            class="btn btn-primary"
            data-bs-toggle="collapse"
            data-bs-target="#demo"
          >
            N???I DUNG PHIM
          </button>
          <div id="demo" class="collapse">
           ${data[0].description}
          </div>
        </div>
    </div>
  </div>
      `;
  container.innerHTML = html ? html : "<h2>Kh??ng c?? phim ph?? h???p</h2>";
}
