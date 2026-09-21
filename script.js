const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");
const chanson = document.querySelector("#chanson");
const poeme = document.querySelector("#poeme");

let index = 0;


// =========================
// APPARITION DES PHRASES
// =========================

function afficherPhrase() {

    if (index < phrases.length) {

        const phraseActuelle = phrases[index];

        phraseActuelle.classList.add("visible");

        setTimeout(() => {

            phraseActuelle.classList.remove("visible");

            setTimeout(() => {

                index++;

                afficherPhrase();

            }, 2000);

        }, 5000);

    } else {

        setTimeout(() => {

            lune.classList.add("visible");

        }, 1000);

    }
}

afficherPhrase();


// =========================
// CLIC SUR LE CERCLE
// =========================

lune.addEventListener("click", function () {

    chanson.play();

});


// =========================
// FIN DE LA CHANSON
// =========================

chanson.addEventListener("ended", function () {

    poeme.play();

});
