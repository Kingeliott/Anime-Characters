let currentSound = null;

 function flipAnimate() {
    const sounds = ["/Sounds/katon (1).mp3", "/Sounds/anime-wow-sound-effect-mp3cut.mp3", "/Sounds/error_CDOxCYm.mp3"
        , "/Sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3", "/Sounds/oh-my-god-bro-oh-hell-nah-man.mp3", "/Sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3",
        "/Sounds/mlg-airhorn.mp3", "/Sounds/goofy-ahh-sounds.mp3",
    ];

    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    currentSound = new Audio(randomSound);
    currentSound.play();

    this.animate(
        {transform: ["rotateY(0deg)", "rotateY(360deg)"]},
        { duration: 1000, iterations: 1, easing: "ease-in-out"}
    )
 }

 document.addEventListener("DOMContentLoaded", () => { 
 document.querySelectorAll("img").forEach (img => {
    img.addEventListener("click", flipAnimate);
})});