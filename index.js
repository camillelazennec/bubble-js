const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble); 

const size = Math.random() * 200 + 100 + "px"; //Obtenir une bulle entre 100 et 300px
bubble.style.height = size; //injecter la taille
bubble.style.width = size;

bubble.style.top = Math.random() * 100 + 50 + "%"; 
bubble.style.left = Math.random() * 100 + 50 + "%"; 

bubble.style.setProperty("--left", Math.random() * 100 + "%");