// Selecting elements
let musicsBox:HTMLDivElement = document.querySelector('.musics')!;
let audio:HTMLAudioElement = document.querySelector('#audio')!;

// Interfaces

type ILikes = {
  ip:string
}

interface IMusic{
  id:number,
  artist_name:string,
  song_name:string,
  song_url:string,
  title_image:string,
  likes:ILikes[]
}



let {src, duration, paused} = audio

// hook

type SetStateFunction<T> = (newValue: T) => void;
type StateTuple<T> = [T, SetStateFunction<T>];

function useState<T>(initialValue: T): StateTuple<T> {
  let stateValue: T = initialValue;

  function setState(newValue: T): void {
    stateValue = newValue;
  }

  return [stateValue, setState];
}

const [likesData,setLikesData] = useState<ILikes[]>([])

function MusicCard({id,artist_name,song_name,song_url,title_image}:IMusic, liked:boolean){
  return (`<div class="music ${paused ? '':'playing'}">
  <div class="part">
    <div class="index">
      <span>${id < 10 ?"0"+id+"." :id+"."}</span>
      <div class="isPlaying">
        <div style="--h:15%;--c:40%;--n:5%"></div>
        <div style="--h:50%; --c:65%; --n:35%"></div>
        <div style="--h:80%; --c:45%; --n:65%"></div>
        <div style="--h:75%;--c:80%; --n:50%"></div>
        <div style="--h:15%;--c:40%;--n:5%"></div>
      </div>
    </div>
    <button class="play-btn">
      <ion-icon name="play"></ion-icon>
    </button>
    <img src="${title_image}" alt="" />
    <div class="song_info">
      <div class="song_name">
        <span>${song_name}</span>
      </div>
      <div class="artist_name">
        <span>${artist_name}</span>
      </div>
    </div> 
  </div>
  <div class="part">
    <div class="like ${liked?'liked':""}">
      <div>
        <span class="heart"></span>
      </div>
      <span class="count">10</span>
    </div>
    <a href="${song_url}">
      <div class="download">
        <ion-icon name="cloud-download"></ion-icon>
        <span>download</span>
      </div>
    </a>
  </div>
</div>`)
}

try {
  fetch('http://localhost:8080/api/v1/musics')
  .then(res=>res.json())
  .then(data=>render(data))
} catch (err) {
  console.error(err)
}
function check(type:"likesNum"|"isLiked",id:number){
  try {
    fetch(`http://localhost:8080/api/v1/musics/${id}/likes`)
      .then(res=>res.json())
      .then(data=>setLikesData(data))
  } catch (error) {
    console.error(error)
  }
  if(type === "likesNum"){
    return likesData.length
  }else if(type==="isLiked"){
  
  }
}
function render(data:IMusic[]){
  console.log(data);
  
  musicsBox.innerHTML = data.map((item)=>MusicCard(item, !paused)).join("")
}
