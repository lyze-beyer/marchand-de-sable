const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");
const vent = document.querySelector("#vent");

let index = 0;


function demarrerVent() {

    if (vent) {

        vent.volume = 0;

        vent.play()
        .then(() => {

            let volume = 0;

            const fondu = setInterval(() => {

                volume += 0.02;

                if (volume >= 0.5) {

                    volume = 0.5;
                    clearInterval(fondu);

                }

                vent.volume = volume;

            }, 200);

        })
        .catch((erreur) => {

            console.log("Le navigateur bloque le son :", erreur);

        });

    }

}



function afficherPhrase() {


    if (index < phrases.length) {


        phrases[index].classList.add("visible");


        // Le vent commence avec la première phrase
        if (index === 0) {

            demarrerVent();

        }


        setTimeout(() => {


            phrases[index].classList.remove("visible");


            index++;


            afficherPhrase();


        }, 7000);


    } else {


        setTimeout(() => {

            lune.classList.add("visible");

        }, 3000);


    }


}


afficherPhrase();
