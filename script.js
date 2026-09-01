const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");
const chanson = document.querySelector("#chanson");
const poeme = document.querySelector("#poeme");

let index = 0;

function afficherPhrase() {

    if (index < phrases.length) {

        const phraseActuelle = phrases[index];

        // Apparition
        phraseActuelle.classList.add("visible");

        // La phrase reste visible 5 secondes
        setTimeout(() => {

            // Disparition
            phraseActuelle.classList.remove("visible");

            // On attend que le fondu soit terminé
            // avant de faire apparaître la suivante
            setTimeout(() => {

                index++;

                afficherPhrase();

            }, 2000);

        }, 5000);

    } else {

        // Toutes les phrases ont disparu.
        // La lune apparaît après 3 secondes.
        setTimeout(() => {

            lune.classList.add("visible");

        }, 3000);

    }
}

afficherPhrase();


// CLIC SUR LA LUNE = DÉMARRAGE DE LA CHANSON

lune.addEventListener("click", function () {

    chanson.play();

});


// QUAND LA CHANSON EST TERMINÉE = DÉMARRAGE DU POÈME

let poemeLance = false;

chanson.addEventListener("timeupdate", function () {

    if (!poemeLance && chanson.duration - chanson.currentTime <= 6) {

        poemeLance = true;

        poeme.play();

    }

});
