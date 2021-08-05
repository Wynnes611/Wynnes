var audio = document.querySelector("audio");
var playBtn = document.querySelector(".playBtn");
var control = document.querySelector("#control");
var container = document.querySelector(".container");
var pauseBtn = document.querySelector(".pauseBtn");
var plate = document.querySelector(".plate");
var input = document.querySelector("input");
playBtn.onclick = function (event) {
  audio.play();
  plate.classList.remove("paused");
  plate.classList.add("playing");
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  container.style.top = "-80px";
  plate.style.animation = "roll 10s linear infinite";
  if (!audio.paused) {
    pauseBtn.onclick = function () {
      audio.pause();
      container.style.top = "0px";
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
      plate.style.animationPlayState = "paused";
      plate.classList.remove("playing");
      plate.classList.add("paused");
    };
  }
};

// document.querySelector(".fa-play").onclick = function () {
//   audio.play();
// };

// document.querySelector(".fa-pause").onclick = function () {
//   audio.pause();
// };
// audio.onplay = function () {
//   container.style.top = "138px";
//   plate.style.animation = "roll 10s linear infinite";
//   plate.classList.remove("paused");
// };
// audio.onpause = function () {
//   plate.classList.remove("playing");
//   container.style.top = "220px";
//       plate.classList.add("paused");
//       plate.style.animationPlayState = "paused";
// };

var tuoing = false;
audio.onended = function () {
  console.log("播放完成");
};

input.onchange = function (event) {
  var v = event.target.value;
  audio.currentTime = (v / 100) * audio.duration;
};
input.oninput = function (event) {
  var v = event.target.value;
  document.querySelector(".x").style.width = v + "%";
  document.querySelector(".dot").style.left = v + "%";
  tuoing = true;
};
audio.ontimeupdate = function () {
  if (!tuoing) {
    var v = (audio.currentTime / audio.duration) * 100;
    input.value = v;
    document.querySelector(".x").style.width = v + "%";
    document.querySelector(".dot").style.left = v + "%";
  }
};

var musicData = [
  {
    src: "audio/谢安琪 - 其实寂寞 [mqms2].mp3",
    artist: "谢安琪",
    songName: "其实寂寞",
    artistPic: "images/xieanqi.jpg",
  },
  {
    src: "audio/Hypnotised-Coldplay-ringtone.mp3",
    artist: "Coldplay-ringtone",
    songName: "Hypnotised",
    artistPic: "images/Coldplay.jpg",
  },
  {
    src: "audio/徐梦圆 - 月出 (Ins) [mqms2].mp3",
    artist: "徐梦圆",
    songName: "月出 (Ins)",
    artistPic: "images/yuechu.jpg",
  },
  {
    src: "audio/梁博 - 日落大道 [mqms2].mp3",
    artist: "梁博",
    songName: "日落大道",
    artistPic: "images/liangbo.jpg",
  },
];

var preSong = document.querySelector(".preSong");
var nextSong = document.querySelector(".nextSong");
var songName = document.querySelector(".detail .songTitle");
var artist = document.querySelector(".detail .singer");
var bg = document.querySelector("#bg");

songName.innerHTML = musicData[0].songName;
artist.innerHTML = musicData[0].artist;
bg.style.background =
  " url(" + musicData[0].artistPic + ") no-repeat center/cover";
plate.style.background = " url(" + musicData[0].artistPic + ") center/cover";
var i = 0;
nextSong.onclick = function () {
  if (i == 4) {
    i = 0;
  }
  if (i >= 0 && i < 4) {
    console.log("next_____i:", i);
    songName.innerHTML = musicData[i].songName;
    artist.innerHTML = musicData[i].artist;
    bg.style.background =
      " url(" + musicData[i].artistPic + ")  no-repeat center/cover";
    plate.style.background =
      " url(" + musicData[i].artistPic + ") center/cover";
    audio.src = musicData[i].src;
    i++;
  }
};
preSong.onclick = function () {
  if(i==0){i = 3;}
  if (i >= 0 && i < 4) {
    console.log("i:", i);
    songName.innerHTML = musicData[i].songName;
    artist.innerHTML = musicData[i].artist;
    bg.style.background =
      " url(" + musicData[i].artistPic + ")  no-repeat center/cover";
    plate.style.background =
      " url(" + musicData[i].artistPic + ") center/cover";
    audio.src = musicData[i].src;
    i--;
  } 
};
