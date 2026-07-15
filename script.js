const vent = new Audio("vent-desert.mp3");

vent.loop = true;
vent.volume = 0;

const lune = document.querySelector(".play");


// Démarrage du vent au premier contact
document.addEventListener("click", () => {

    if (vent.paused) {

        vent.play();

        let volume = 0;

        const fonduEntree = setInterval(() => {

            volume += 0.02;
            vent.volume = volume;

            if (volume >= 0.4) {
                clearInterval(fonduEntree);
            }

        }, 100);

    }

}, { once: true });


// Arrêt progressif quand on touche la lune
lune.addEventListener("click", (event) => {

    event.stopPropagation();

    const fonduSortie = setInterval(() => {

        if (vent.volume > 0.02) {

            vent.volume -= 0.02;

        } else {

            vent.volume = 0;
            vent.pause();
            clearInterval(fonduSortie);

        }

    }, 100);

});
