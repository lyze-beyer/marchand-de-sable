const phrases = document.querySelectorAll(".phrase");
const lune = document.querySelector(".play");


async function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function voyage() {

    phrases.forEach(phrase => {
        phrase.style.opacity = "0";
    });


    for (let i = 0; i < phrases.length; i++) {

        phrases[i].style.transition = "opacity 4s ease";

        phrases[i].style.opacity = "1";


        await attendre(7000);


        phrases[i].style.opacity = "0";


        await attendre(3000);
    }


    lune.style.opacity = "1";

}


voyage();
