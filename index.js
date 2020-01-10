this.addEventListener("load", applyRandomImage);

function applyRandomImage() {
    var backgroundElement = document.getElementById("background-image");
    var images = [
        "/images/backgrounds/sj_1.png",
        "/images/backgrounds/sj_2.png",
        "/images/backgrounds/sj_3.png",
        "/images/backgrounds/jumps_1.jpg",
        "/images/backgrounds/jumps_2.jpg",
        "/images/backgrounds/jumps_3.jpg",
        "/images/backgrounds/qs_1.jpg",
        "/images/backgrounds/qs_2.jpg",
        "/images/backgrounds/qs_3.jpg",
        "/images/backgrounds/sh_1.jpg",
        "/images/backgrounds/sh_2.jpg",
        "/images/backgrounds/sh_3.jpg",
        "/images/backgrounds/st_1.jpg",
        "/images/backgrounds/st_2.jpg",
        "/images/backgrounds/st_3.jpg"
    ];
    backgroundElement.style.backgroundImage = "url('" + images[Math.floor(Math.random() * images.length)] + "')";
}