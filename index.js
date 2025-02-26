const counterDisplay = document.querySelector("h3"); //compteur des bulles touchées
let counter = 0;

const bubbleMarker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble); 

    const size = Math.random() * 200 + 100 + "px"; //Obtenir une bulle entre 100 et 300px
    bubble.style.height = size; //injecter la taille
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%"; 
    bubble.style.left = Math.random() * 100 + 50 + "%"; 

    const plusMinus = Math.random() > 0.5 ? 1 : -1; //La bulle part à droite ou à gauche
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => { //faire disparaitre la bulle au click
        counter++;
        counterDisplay.textContent = counter; //afficher le compteur
        bubble.remove();
    });

    setTimeout(() => { //supprime la bulle après 8s
        bubble.remove();
    }, 8000);
};


setInterval(bubbleMarker, 3000); //Fonction jouer tt les 3 seconde

