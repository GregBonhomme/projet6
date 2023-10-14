function galleryTemplate(data) {
    const gallery = document.createElement("section");
    gallery.setAttribute("class", "gallery");
    for (i = 0; i < data.length; i++) {
        gallery.appendChild(galleryCardTemplate(data[i]));
    }
    return gallery;
}

function galleryCardTemplate(data) {
    const card = document.createElement("div");
    card.setAttribute("class", "media_card");
    const img = document.createElement("img")
    img.setAttribute("src", data.image);
    const title = document.createElement("h3");
    title.innerText = data.title;
    const likes = document.createElement("div");
    likes.setAttribute("class", "likes");
    const counter = document.createElement("span");
    counter.innerText = data.likes;
    const heart = document.createElement("img");
    heart.setAttribute("src", "assets/icons/like.png");

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(likes);
    likes.appendChild(counter);
    likes.appendChild(heart);

    return card;
}