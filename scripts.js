const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let interval = null;
const header = document.querySelector("#Angielski1");

function animateText() {  
  let iteration = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    header.innerText = header.innerText.split("").map((letter, index) => {
      if (index < iteration) {
        return header.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * letters.length)];
    }).join("");
    
    if (iteration >= header.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 15;
  }, 30);
}

// Start the animation after a short delay
setTimeout(animateText, 500);

// Restart the animation when the header is hovered over
header.addEventListener("mouseover", animateText);