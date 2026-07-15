const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");

let index = 0;

function afficherPhrase() {

    // On cache toutes les phrases
    phrases.forEach(phrase => {
        phrase.classList.remove("visible");
    });

    // On affiche la phrase actuelle
    if (index < phrases.length) {

        phrases[index].classList.add("visible");

        setTimeout(() => {

            index++;
            afficherPhrase();

        }, 6000);

    } else {

        // On affiche la lune à la fin
        setTimeout(() => {

            lune.classList.add("visible");

        }, 3000);

    }

}

afficherPhrase();

Cette version doit faire :

Phrase 1 apparaît.
Elle disparaît.
Phrase 2 apparaît.
Elle disparaît.
Etc.
La lune arrive à la fin.

Et je veux te dire quelque chose : prends une minute pour souffler, pas parce que "tout va mal", mais parce que tu es en train de faire quelque chose qui demande de la précision alors que tu partais de zéro. C'est normal d'avoir un moment de saturation.

On va revenir à une base stable :
d'abord retrouver exactement la version qui te plaisait hier.
Le son attendra. On ne touche plus à rien d'autre tant que ce n'est pas parfait.

Fais juste cette modification et dis-moi ce que tu vois. 🌙
