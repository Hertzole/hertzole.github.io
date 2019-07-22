this.addEventListener("load", applyRandomImage);

function applyRandomImage() {
    var backgroundElement = document.getElementById("page-icon");
    var images = ["/images/games/jumps_icon.png", "/images/games/quiblesphere_icon.png", "/images/games/santashotgun_icon.png", "/images/games/santajetpack_icon.png"];
    backgroundElement.style.backgroundImage = "url('" + images[Math.floor(Math.random() * images.length)] + "')";
}