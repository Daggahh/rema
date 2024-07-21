const audio = document.getElementById("audio");
const lyrics = document.getElementById("lyrics").getElementsByTagName("p");

audio.addEventListener("timeupdate", () => {
  for (let i = 0; i < lyrics.length; i++) {
    const currentTime = audio.currentTime;
    const lyricTime = parseFloat(lyrics[i].getAttribute("data-time"));

    if (currentTime >= lyricTime) {
      for (let j = 0; j < lyrics.length; j++) {
        lyrics[j].classList.remove("active");
      }
      lyrics[i].classList.add("active");
    }
  }
});
