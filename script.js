document.getElementById("playButton").addEventListener("click", function() {
    var audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById("playButton").innerText = "Pause";
    } else {
        audioPlayer.pause();
        document.getElementById("playButton").innerText = "Play";
    }
});
