const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");
const audio = document.querySelector("#audio");

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
// CLIC SUR LE CERCLE = AUDIO
// =========================

lune.addEventListener("click", function () {

    audio.play();

});


// =========================
// DISPARITION DU CERCLE
// 5 SECONDES AVANT LA FIN
// =========================

audio.addEventListener("loadedmetadata", function () {

    console.log("Durée du son :", audio.duration);

});

audio.addEventListener("timeupdate", function () {

    if (
        audio.duration &&
        audio.currentTime >= audio.duration - 5
    ) {

        lune.classList.remove("visible");

    }

});
