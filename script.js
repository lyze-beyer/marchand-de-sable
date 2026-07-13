const bouton = document.querySelector(".play");

bouton.addEventListener("click", () => {

    bouton.classList.add("active");

    document.querySelector(".experience").classList.add("commence");

});
