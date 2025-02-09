function changePage(pageID) {
    const header = document.getElementById("header");
    const mainContent = document.getElementById("main-content")
    const container = document.getElementById("container")
    const gridContainer = document.getElementById("grid-container")
    const flipCardContainer = document.getElementById("flip-card-container")
    const RNG = document.getElementById("RNG")

    const pages = {
        page1: {
            title: `<h1>Info</h1>`,
            content: `
            <div class="info-spacing">
                        <h2>Currently Learning</h2>
                        <p>JS/CSS/HTML</p>
                    </div>
                    <div class="info-spacing">
                        <h2>Header</h2>
                        <p>Content</p>
                    </div>
                    <div class="info-spacing">
                        <h2>Random Quote</h2>
                        <div id="RNG-txt"><div>
                    </div>
                `
        },
        page2: {
            title: `<h1>wjdad</h1>`,
            content: `
                <div class="info-spacing">
                    <h2>New Topic</h2>
                    <p>New content for Page 2!</p>
                </div>
                <div class="info-spacing">
                    <h2>Another Header</h2>
                    <p>More content for Page 2.</p>
                </div>
                <div class="info-spacing">
                    <h2>Additional Section</h2>
                    <p>Additional content for Page 2.</p>
                </div>
            `
        }
    };

    header.innerHTML = pages[pageID].title;
    mainContent.innerHTML = pages[pageID].content;

    if (pageID === "page1") {
        randomTxt()
    }

    if (pageID === "page2") {
        container.classList.add("page2");
        gridContainer.classList.add("page2");
        RNG.classList.add("page2")
        scrollToFooter.classList.add("page2");
        flipCardContainer.classList.add("page2");
    } else {
        container.classList.remove("page2");
        gridContainer.classList.remove("page2");
        RNG.classList.remove("page2")
        scrollToFooter.classList.remove("page2");
        flipCardContainer.classList.remove("page2");
    }
}



changePage("page1")



function scroll() {
    const footer = document.querySelector("footer")

    if (footer) {
        footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

const button = document.getElementById("scrollToFooter")
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
    const outputElement = document.getElementById("RNG-number")

    const index = Math.floor(Math.random() * 100);
    outputElement.innerHTML = `RNG: ${index}`;
}



function randomTxt() {
    const outputElement = document.getElementById("RNG-txt")

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
