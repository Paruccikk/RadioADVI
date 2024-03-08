var audio = document.getElementById('meuPlayer');
var playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = 'Play';
  }
});
