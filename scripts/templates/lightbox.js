//index de référence pour les slides à  afficher
let slideIndex = 1;

//mise en place de la lightbox
export function lightboxTemplate(data) {
    const lightbox = document.createElement("section");
    lightbox.setAttribute("id", "lightbox");
    const content = document.createElement("div");
    content.setAttribute("id", "lightbox_content")
    const leftArrow = document.createElement("img");
    leftArrow.setAttribute("src", "assets/icons/left-arrow.png");
    leftArrow.setAttribute("class", "lightbox_leftArrow");
    leftArrow.addEventListener("click", () => {
        nextSlide(-1);
    })
    const rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "assets/icons/right-arrow.png");
    rightArrow.setAttribute("class", "lightbox_rightArrow");
    rightArrow.addEventListener("click", () => {
        nextSlide(1);
    })
    const closeBtn = document.createElement("img");
    closeBtn.setAttribute("src", "assets/icons/close.png");
    closeBtn.setAttribute("class", "lightbox_closeBtn");
    closeBtn.addEventListener("click", () => {
        closeLightbox();
    })

    content.appendChild(leftArrow);
    lightboxGallery(data, content);
    content.appendChild(rightArrow);
    content.appendChild(closeBtn);
    lightbox.appendChild(content);

    return lightbox;
}

//mise en place de toute les slides de la lightbox
function lightboxGallery(data, node) {
    for (let i = 0; i < data.length; i++) {
        const display = document.createElement("div");
        display.setAttribute("class", "slide");
        display.style.display = "none";
        if (data[i].type == "image") {
            const media = document.createElement("img");
            media.setAttribute("src", data[i].image);
            display.appendChild(media);
        }
        else if (data[i].type == "video") {
            const media = document.createElement("video");
            media.setAttribute("src", data[i].video);
            media.setAttribute("controls", "");
            display.appendChild(media);
        }
        const title = document.createElement("h4");
        title.innerText = data[i].title;

        display.appendChild(title);
        node.appendChild(display);
    }
}

//choix de la slide a afficher
export function setLightboxInfo(n) {
    let slides = document.querySelectorAll(".slide");
    if (parseInt(n) > slides.length) { slideIndex = 1 }
    if (parseInt(n) < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//ouverture ,fermeture, défilement de la lightbox
export function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

export function currentSlide(n) {
    setLightboxInfo(slideIndex = parseInt(n));
}

function nextSlide(n) {
    setLightboxInfo(slideIndex += parseInt(n));
}

document.addEventListener("keydown", (e) => {
    if (document.getElementById("lightbox").style.display != "none") {
        if (e.key === "ArrowLeft") {
            nextSlide(-1);
        }
        else if (e.key === "ArrowRight") {
            nextSlide(1);
        }
    }
})


