function changePage(pageID) {
    const Header = document.getElementById("header");
    const mainContent = document.getElementById("main-content")
    const container = document.getElementById("container")
    const gridContainer = document.getElementById("grid-container")
    const page22 = document.getElementById("page22")

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

    Header.innerHTML = pages[pageID].title;
    mainContent.innerHTML = pages[pageID].content;

    if (pageID === "page2") {
        container.classList.add("page2");
        gridContainer.classList.add("page2");
        page22.classList.add("page2");
    } else {
        container.classList.remove("page2");
        gridContainer.classList.remove("page2");
        page22.classList.remove("page2");
    }
}
changePage("page1")

function scrollPage22() {
    const footer = document.querySelector("footer")

    if (footer) {
        footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

const button = document.getElementById("page22")
button.addEventListener("click", scrollPage22)