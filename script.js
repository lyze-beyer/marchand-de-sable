
const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");
const audio = document.querySelector("#audio");
const fin = document.querySelector(".fin");

let index = 0;


// =========================
// APPARITION DES PHRASES
// INTRODUCTION PLUS COURTE
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

            }, 1000);

        }, 3000);

    } else {

        setTimeout(() => {

            lune.classList.add("visible");

        }, 500);

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
// 12 SECONDES AVANT LA FIN
// =========================

audio.addEventListener("timeupdate", function () {

    if (
        audio.duration &&
        audio.currentTime >= audio.duration - 12
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


// =========================
// OUVERTURE DU QUESTIONNAIRE
// =========================

const boutonTrace = document.querySelector("#ouvrir-questionnaire");
const questionnaire = document.querySelector("#questionnaire");

boutonTrace.addEventListener("click", function () {

    fin.classList.remove("visible");

    questionnaire.hidden = false;

});


// =========================
// ENVOI DES TÉMOIGNAGES
// VERS FORMSPREE
// =========================

const formulaireTrace = document.querySelector("#formulaire-trace");

formulaireTrace.addEventListener("submit", async function (event) {

    event.preventDefault();

    const boutonEnvoi = formulaireTrace.querySelector('button[type="submit"]');

    if (boutonEnvoi.disabled) {
        return;
    }

    boutonEnvoi.disabled = true;
    boutonEnvoi.textContent = "ENVOI EN COURS…";

    // Supprimer un ancien message éventuel
    const ancienMessage = document.querySelector("#message-formulaire");

    if (ancienMessage) {
        ancienMessage.remove();
    }

    const message = document.createElement("p");
    message.id = "message-formulaire";
    message.setAttribute("role", "status");

    try {

        const donnees = new FormData(formulaireTrace);

        const reponse = await fetch(
            "https://formspree.io/f/xoeeoaov",
            {
                method: "POST",
                body: donnees,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (!reponse.ok) {
            throw new Error("Le témoignage n'a pas pu être envoyé.");
        }

        // Afficher le remerciement seulement après
        // confirmation de réception par Formspree

        formulaireTrace.hidden = true;

        const remerciement = document.createElement("div");
        remerciement.id = "remerciement-trace";

        const texte = document.createElement("p");
        texte.textContent =
            "Votre trace est maintenant dans la bouteille. Merci.";

        remerciement.appendChild(texte);

        formulaireTrace.insertAdjacentElement(
            "afterend",
            remerciement
        );

    } catch (erreur) {

        message.textContent =
            "L'envoi n'a pas fonctionné. Votre texte est toujours là. Veuillez réessayer.";

        formulaireTrace.appendChild(message);

        boutonEnvoi.disabled = false;
        boutonEnvoi.textContent = "ENVOYER MA TRACE";

        console.error("Erreur Formspree :", erreur);

    }

});






    
