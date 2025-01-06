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
                        <h2>Header</h2>
                        <p>Content</p>
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

    const texts = ["Hello", "World", "How are you?", "Random Text", "Have a great day!"];

    const index = Math.floor(Math.random() * texts.length);
    outputElement.innerHTML = texts[index]
}
