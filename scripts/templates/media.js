let totalLikes = 0;

export function galleryTemplate(data) {
    const gallery = document.createElement("section");
    gallery.setAttribute("id", "gallery");

    for (let i = 0; i < data.length; i++) {
        gallery.appendChild(galleryCardTemplate(data[i]));
    }
    return gallery;
}

function galleryCardTemplate(data) {
    const card = document.createElement("div");
    card.setAttribute("class", "media_card");
    const img = document.createElement("img")
    img.setAttribute("src", data.image);
    img.setAttribute("class", "media_card_preview")
    const info = document.createElement("div");
    info.setAttribute("class", "card_info");
    const title = document.createElement("h3");
    title.innerText = data.title;
    const likes = document.createElement("div");
    const counter = document.createElement("span");
    counter.innerText = data.likes;
    const heart = document.createElement("img");
    heart.setAttribute("src", "assets/icons/like.png");
    heart.setAttribute("class", "heart");
    totalLikes = totalLikes + data.likes;
    heart.addEventListener("click", addLike);

    card.appendChild(img);
    card.appendChild(info);
    info.appendChild(title);
    info.appendChild(likes);
    likes.appendChild(counter);
    likes.appendChild(heart);

    return card;
}

export function footerTemplate(photographer) {
    const footer = document.createElement("section");
    footer.setAttribute("class", "photograph-footer");

    const likes = document.createElement("div");

    const counter = document.createElement("span");
    counter.innerText = totalLikes;
    counter.setAttribute("id", "totalLikes")

    const icon = document.createElement("img");
    icon.setAttribute("src", "assets/icons/black_like.png")

    const price = document.createElement("span");
    price.innerText = photographer.price + "€ / jour";

    footer.appendChild(likes);
    footer.appendChild(price)
    likes.appendChild(counter);
    likes.appendChild(icon);

    return footer;
}

function addLike() {
    let count = parseInt(this.previousSibling.innerText);
    this.previousSibling.innerText = count + 1;

    let totalCount = parseInt(document.getElementById("totalLikes").innerText);
    document.getElementById("totalLikes").innerText = totalCount + 1;

}
