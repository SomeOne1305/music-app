// Selecting elements
var musicsBox = document.querySelector('.musics');
var audio = document.querySelector('#audio');
var src = audio.src, duration = audio.duration, paused = audio.paused;
function useState(initialValue) {
    var stateValue = initialValue;
    function setState(newValue) {
        stateValue = newValue;
    }
    return [stateValue, setState];
}
var _a = useState([]), likesData = _a[0], setLikesData = _a[1];
function MusicCard(_a, liked) {
    var id = _a.id, artist_name = _a.artist_name, song_name = _a.song_name, song_url = _a.song_url, title_image = _a.title_image;
    return ("<div class=\"music ".concat(paused ? '' : 'playing', "\">\n  <div class=\"part\">\n    <div class=\"index\">\n      <span>").concat(id < 10 ? "0" + id + "." : id + ".", "</span>\n      <div class=\"isPlaying\">\n        <div style=\"--h:15%;--c:40%;--n:5%\"></div>\n        <div style=\"--h:50%; --c:65%; --n:35%\"></div>\n        <div style=\"--h:80%; --c:45%; --n:65%\"></div>\n        <div style=\"--h:75%;--c:80%; --n:50%\"></div>\n        <div style=\"--h:15%;--c:40%;--n:5%\"></div>\n      </div>\n    </div>\n    <button class=\"play-btn\">\n      <ion-icon name=\"play\"></ion-icon>\n    </button>\n    <img src=\"").concat(title_image, "\" alt=\"\" />\n    <div class=\"song_info\">\n      <div class=\"song_name\">\n        <span>").concat(song_name, "</span>\n      </div>\n      <div class=\"artist_name\">\n        <span>").concat(artist_name, "</span>\n      </div>\n    </div> \n  </div>\n  <div class=\"part\">\n    <div class=\"like ").concat(liked ? 'liked' : "", "\">\n      <div>\n        <span class=\"heart\"></span>\n      </div>\n      <span class=\"count\">10</span>\n    </div>\n    <a href=\"").concat(song_url, "\">\n      <div class=\"download\">\n        <ion-icon name=\"cloud-download\"></ion-icon>\n        <span>download</span>\n      </div>\n    </a>\n  </div>\n</div>"));
}
try {
    fetch('http://localhost:8080/api/v1/musics')
        .then(function (res) { return res.json(); })
        .then(function (data) { return render(data); });
}
catch (err) {
    console.error(err);
}
function check(type, id) {
    try {
        fetch("http://localhost:8080/api/v1/musics/".concat(id, "/likes"))
            .then(function (res) { return res.json(); })
            .then(function (data) { return setLikesData(data); });
    }
    catch (error) {
        console.error(error);
    }
    if (type === "likesNum") {
        return likesData.length;
    }
    else if (type === "isLiked") {
    }
}
function render(data) {
    console.log(data);
    musicsBox.innerHTML = data.map(function (item) { return MusicCard(item, !paused); }).join("");
}
