const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");
const audio = document.querySelector("#audio");
const fin = document.querySelector(".fin");

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
// DÉMARRAGE DE L'AUDIO
// UNIQUEMENT SUR LE CERCLE
// SOURIS + TÉLÉPHONE
// =========================

lune.addEventListener("pointerup", function (event) {

    event.preventDefault();

    if (!lune.classList.contains("visible")) {
        return;
    }

    audio.currentTime = 0;

    const lecture = audio.play();

    if (lecture !== undefined) {

        lecture.catch(function (erreur) {

            console.log("Lecture audio impossible :", erreur);

        });

    }

});


// =========================
// DISPARITION DU CERCLE
// 5 SECONDES AVANT LA FIN
// =========================

audio.addEventListener("timeupdate", function () {

    if (
        audio.duration &&
        audio.currentTime >= audio.duration - 5
    ) {

        lune.classList.remove("visible");

    }

});


// =========================
// FIN DU VOYAGE SONORE
// =========================

audio.addEventListener("ended", function () {

    lune.classList.remove("visible");

    fin.classList.add("visible");

});
