

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



