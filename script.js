function scroll() {
    const footer = document.querySelector("footer")

    if (footer) {
        footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

const button = document.getElementById("scroll-to-footer")
button.addEventListener("click", scroll)



function flipCard(front) {
    const innerCard = front.closest(".flip-card-inner");
    
    innerCard.classList.toggle("flipped");

    setTimeout(() => {
        innerCard.classList.remove("flipped");
        innerCard.classList.add("fast-flip");
       
        setTimeout(() => {
            innerCard.classList.remove("fast-flip");
        }, 500)
    }, 3000)
}


function randomNumber() {
    const outputElement = document.getElementById("random-number-generator-output")

    const index = Math.floor(Math.random() * 100);
    outputElement.innerHTML = `random-number-generator: ${index}`;
}



function randomTxt() {
    const outputElement = document.getElementById("random-text-generator")

    const texts =  ["Believe you can, and you're halfway there.",
    "The best way to predict the future is to create it.",
    "Do what you can, with what you have, where you are.",
    "Your limitation—it's only your imagination.",
    "Dream it. Wish it. Do it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success doesn’t come from what you do occasionally, but what you do consistently.",
    "Push yourself, because no one else is going to do it for you.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Life is short. Smile while you still have teeth.",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats!",
    "I’m not lazy, I’m just on energy-saving mode.",
    "The unexamined life is not worth living.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "In the middle of every difficulty lies opportunity.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Do or do not, there is no try.",
    "I am Groot.",
    "It's dangerous to go alone! Take this.",
    "Not all those who wander are lost.",
    "Adventure is out there!",
    "Keep calm and code on.",
    "RNG gods, bless this roll!",
    "Always look on the bright side of life."];

    const index = Math.floor(Math.random() * texts.length);
    outputElement.innerHTML = texts[index]
}
