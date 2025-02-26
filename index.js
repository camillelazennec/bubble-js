const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble); 

const size = Math.randome() * 200 + 100 + "px"; //Obtenir une bulle entre 100 et 300px
bubble.style.height = size; //injecter la taille
bubble.style.width = size;
;;;
console.log(size);;