
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

  if (id) url += `${id}`;
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
      <div class="movie-l-img">
        <img
          src="${data.thumbnail}"
        />
        <div class="docThem">
          <button
            class="btn btn-primary"
            data-bs-toggle="collapse"
            data-bs-target="#demo"
          >
            NỘI DUNG PHIM
          </button>
          <div id="demo" class="collapse">
           ${data.description}
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 movie-detail">
      <h1 class="movie-title">
        <span class="title-1" itemprop="name">${data.name}</span>
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
            <dt class="movie-dt">Trạng thái:</dt>
            <dd class="movie-dd status">FHD Vietsub + Thuyết minh</dd>
            <br />
            <dt class="movie-dt">Đạo diễn:</dt>
            <dd class="movie-dd dd-cat">
              <a
                class="director"
                href="https://hiphimmoi.net/director/kim-hong-sun"
                title="Kim Hong-sun"
                >Kim Hong-sun</a
              >,
            </dd>
            <br />
            <dt class="movie-dt">Quốc gia:</dt>
            <dd class="movie-dd dd-cat">
              <a
                href="https://hiphimmoi.net/country/han-quoc"
                title="Hàn Quốc"
                >Hàn Quốc</a
              >,
            </dd>
            <br />
            <dt class="movie-dt">Năm sản xuất:</dt>
            <dd class="movie-dd">
              <a href="https://hiphimmoi.net/release/2022/" rel="tag"
                >2022</a
              >
            </dd>
            <br />
            <dt class="movie-dt">Thời lượng:</dt>
            <dd class="movie-dd">122 Phút</dd>
            <br />
            <dt class="movie-dt">Chất lượng:</dt>
            <dd class="movie-dd">Bản đẹp</dd>
            <br />
            <dt class="movie-dt">Độ phân giải:</dt>
            <dd class="movie-dd">Full HD</dd>
            <br />
            <dt class="movie-dt">Ngôn ngữ:</dt>
            <dd class="movie-dd">Phụ đề việt</dd>
            <br />
            <dt class="movie-dt">Thể loại:</dt>
          
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
        <p>Đánh giá phim <span class="num-rating">(4 lượt)</span></p>
        <div
          id="star"
          data-score="6"
          style="cursor: pointer; width: 200px"
        >
          <img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="1"
            title="Dở tệ"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="2"
            title="Dở"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="3"
            title="Không hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="4"
            title="Không hay lắm"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="5"
            title="Bình thường"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-on.png"
            alt="6"
            title="Xem được"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="7"
            title="Có vẻ hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="8"
            title="Hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="9"
            title="Rất hay"
          />&nbsp;<img
            src="https://hiphimmoi.net/media/img/star-off.png"
            alt="10"
            title="Tuyệt hay"
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
    </div>
  </div>
      `;
  container.innerHTML = html ? html : "<h2>Không có phim phù hợp</h2>";
}
