const vent = new Audio("vent-desert.mp3");

vent.loop = true;
vent.volume = 0;


// Fondu d'entrée du vent
function demarrerVent() {

    vent.play();

    let volume = 0;

    const montee = setInterval(() => {

        volume += 0.02;
        vent.volume = volume;

        if (volume >= 0.5) {
            clearInterval(montee);
        }

    }, 100);

}


// Fondu de sortie du vent
function arreterVent() {

    const descente = setInterval(() => {

        if (vent.volume > 0.02) {

            vent.volume -= 0.02;

        } else {

            vent.volume = 0;
            vent.pause();
            clearInterval(descente);

        }

    }, 100);

}


// Démarrage du vent au premier contact
document.addEventListener("click", () => {

    if (vent.paused) {
        demarrerVent();
    }

}, { once: true });


// Quand on touche la lune
const lune = document.querySelector(".play");

lune.addEventListener("click", () => {

    arreterVent();

});
