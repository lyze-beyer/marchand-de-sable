const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");

let index = 0;


function afficherPhrase() {

    if (index < phrases.length) {

        phrases[index].classList.add("visible");

        setTimeout(() => {

            index++;
            afficherPhrase();

        }, 6000);

    } else {

        setTimeout(() => {

            lune.classList.add("visible");

        }, 3000);

    }

}


afficherPhrase();
