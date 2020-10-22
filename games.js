this.addEventListener("load", applyRandomImage);

function applyRandomImage() {
    var backgroundElement = document.getElementById("page-icon");
    var images = [
        "/images/games/jumps_icon.png",
        "/images/games/quiblesphere_icon.png",
        "/images/games/santashotgun_icon.png",
        "/images/games/santajetpack_icon.png",
        "/images/games/santatower_icon.png",
    ];
    var titles = [
        "Jumps",
        "Quible Sphere",
        "Santa Gets a Shotgun",
        "Santa's Jetpack",
        "Santa Gets a Tower"
    ];

    var randomNumber = Math.floor(Math.random() * images.length);

    backgroundElement.style.backgroundImage = "url('" + images[randomNumber] + "')";
    backgroundElement.title = titles[randomNumber];
}