import { MediaFactory } from '../factories/mediaFactory.js';/*
import { galleryTemplate } from '../templates/media.js';*/

let photographersData = window.localStorage.getItem('photographersData');
if (photographersData === null) {
    const info = await fetch("data/photographers.json");
    photographersData = await info.json();
    const tempData = JSON.stringify(photographersData);
    window.localStorage.setItem('photographersData', tempData);
} else {
    photographersData = JSON.parse(photographersData);
}

export function checkPhotographer() {
    //on récupère l'id du photographe de cette page
    let params = new URLSearchParams(location.search);
    let targetId = params.get('id');
    //on obtient tout les infos de ce photographes dans un objet "result"
    let result = {};
    const photographers = photographersData.photographers;
    for (let i = 0; i < photographers.length; i++) {
        if (photographers[i]["id"] == targetId) {
            Object.assign(result, photographers[i]);
        }
    }
    console.log(result);
    return result;
}

function checkGallery() {
    //on récupère l'id du photographe de cette page
    let params = new URLSearchParams(location.search);
    let targetId = params.get('id');
    //on obtient tout les médias lié a ce photographe
    let temp = [];
    const media = photographersData.media;
    for (let i = 0; i < media.length; i++) {
        if (media[i]["photographerId"] == targetId) {
            temp.push(media[i]);
        }
    }
    let gallery = []
    temp.forEach((media) => gallery.push(new MediaFactory(media)));
    console.log(gallery);
    return gallery;
}

function setPageInfo() {
    const photographer = checkPhotographer();
    const gallery = checkGallery();
    const header = document.querySelector(".photograph-header");
    const filter = document.getElementById("filter_select");

    const footer = document.getElementById("photograph-footer");

    const headerInfo = document.createElement("div");
    headerInfo.setAttribute("class", "header_info");

    const h2 = document.createElement('h2');
    h2.innerText = photographer.name;

    const location = document.createElement('span');
    location.setAttribute("class", "location");
    location.innerText = photographer.city + ", " + photographer.country;

    const tagLine = document.createElement("span");
    tagLine.setAttribute("class", "tagline");
    tagLine.innerText = photographer.tagline;

    const img = document.createElement('img');
    img.setAttribute("class", "portrait");
    img.setAttribute("src", "assets/photographers/" + photographer.portrait)

    header.prepend(headerInfo);
    header.appendChild(img);
    headerInfo.appendChild(h2);
    headerInfo.appendChild(location);
    headerInfo.appendChild(tagLine);
    //filter.appendChild(setFilters(photographer.id));
    main.appendChild(galleryTemplate(gallery));
    //footer.appendChild(totalLikes(photographer.id));
}

setPageInfo();