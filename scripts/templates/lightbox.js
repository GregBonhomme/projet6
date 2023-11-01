//index de référence pour les slides à  afficher
let slideIndex = 1;

//mise en place de la lightbox
export function lightboxTemplate(data) {
    const lightbox = document.createElement("dialog");
    lightbox.setAttribute("id", "lightbox");
    lightbox.setAttribute("aria-label", "image closeup view")
    const content = document.createElement("div");
    content.setAttribute("id", "lightbox_content")
    const leftArrow = document.createElement("img");
    leftArrow.setAttribute("src", "assets/icons/left-arrow.png");
    leftArrow.setAttribute("class", "lightbox_leftArrow");
    leftArrow.setAttribute("alt", "Previous image");
    leftArrow.setAttribute("aria-label", "Next image");
    leftArrow.addEventListener("click", () => {
        nextSlide(-1);
    })
    const rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "assets/icons/right-arrow.png");
    rightArrow.setAttribute("class", "lightbox_rightArrow");
    rightArrow.setAttribute("alt", "Next image");
    rightArrow.setAttribute("aria-label", "Previous image");
    rightArrow.addEventListener("click", () => {
        nextSlide(1);
    })
    const closeBtn = document.createElement("img");
    closeBtn.setAttribute("src", "assets/icons/close.png");
    closeBtn.setAttribute("class", "lightbox_closeBtn");
    closeBtn.setAttribute("alt", "Close dialog");
    closeBtn.setAttribute("aria-label", "Close dialog");
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
        const slide = document.createElement("div");
        slide.setAttribute("class", "slide");
        slide.style.display = "none";
        if (data[i].type == "image") {
            const media = document.createElement("img");
            media.setAttribute("src", data[i].image);
            media.setAttribute("alt", data[i].title);
            slide.appendChild(media);
        }
        else if (data[i].type == "video") {
            const media = document.createElement("video");
            media.setAttribute("src", data[i].video);
            media.setAttribute("controls", "");
            media.setAttribute("alt", data[i].title);
            slide.appendChild(media);
        }
        const title = document.createElement("h4");
        title.setAttribute("lang", "eng");
        title.innerText = data[i].title;

        slide.appendChild(title);
        node.appendChild(slide);
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
    document.getElementById("lightbox").showModal();
}

function closeLightbox() {
    document.getElementById("lightbox").close();
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


