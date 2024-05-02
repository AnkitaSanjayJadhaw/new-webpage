document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("mainVideo");
    var overlay = document.querySelector(".video-overlay");

    // Pause the video when overlay is clicked
    overlay.addEventListener("click", function () {
        if (!video.paused) {
            video.pause();
        } else {
            video.play();
        }
    });
});

