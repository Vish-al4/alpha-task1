// script.js
const audioPlayer = document.getElementById('audio-player');
const currentSong = document.getElementById('current-song');

const songs = [
  { name: "Song 1", src: "song1.mp3" },
  { name: "Song 2", src: "song2.mp3" },
  { name: "Song 3", src: "song3.mp3" }
];

let currentIndex = 0;

function loadSong(index) {
  audioPlayer.src = songs[index].src;
  currentSong.textContent = `Now Playing: ${songs[index].name}`;
}

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audioPlayer.play();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audioPlayer.play();
}

// Load the first song initially
loadSong(currentIndex);
