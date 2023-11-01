import { MediaFactory } from '../factories/mediaFactory.js';
import { galleryTemplate, footerTemplate } from '../templates/media.js';
import { lightboxTemplate } from '../templates/lightbox.js';

//on vérifie si les informations sont dans le local storage
let photographersData = window.localStorage.getItem('photographersData');
if (photographersData === null) {
    const info = await fetch("data/photographers.json");
    photographersData = await info.json();
    const tempData = JSON.stringify(photographersData);
    window.localStorage.setItem('photographersData', tempData);
} else {
    photographersData = JSON.parse(photographersData);
}
//on récupère l'id du photographe de cette page
let params = new URLSearchParams(location.search);
let pageId = params.get('id');
//on retrouve toutes les informations de ce photographe
export let photographer = findPhotographer();
export let gallery = findGallery();

function findPhotographer() {
    let photographer = {};
    const photographers = photographersData.photographers;
    for (let i = 0; i < photographers.length; i++) {
        if (photographers[i]["id"] == pageId) {
            Object.assign(photographer, photographers[i]);
        }
    }
    return photographer;
}

function findGallery() {
    let temp = [];
    const media = photographersData.media;
    for (let i = 0; i < media.length; i++) {
        if (media[i]["photographerId"] == pageId) {
            temp.push(media[i]);
        }
    }
    let gallery = []
    temp.forEach((media) => gallery.push(new MediaFactory(media)));
    return gallery;
}

/* Affichage de la page */

function setPageInfo() {
    const modal_title = document.querySelector(".modal h2");
    modal_title.innerHt
    modal_title.innerText = modal_title.innerText + "\n " + photographer.name;
    const header = document.querySelector(".photograph-header");
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
    img.setAttribute("src", "assets/photographers/" + photographer.portrait);
    img.setAttribute("alt", photographer.name);

    header.prepend(headerInfo);
    header.appendChild(img);
    headerInfo.appendChild(h2);
    headerInfo.appendChild(location);
    headerInfo.appendChild(tagLine);
    main.appendChild(galleryTemplate(gallery));
    main.appendChild(footerTemplate(photographer));
    main.appendChild(lightboxTemplate(gallery));
}

/* Fonction de filtres */

function applyFilter(value, tab) {
    switch (value) {
        case 'popularity':
            tab.sort((a, b) => b.likes - a.likes);
            break;
        case 'date':
            tab.sort((a, b) => a.date.localeCompare(b.date))
            break
        case 'title':
            tab.sort((a, b) => {
                let titleA = a.title.toUpperCase();
                let titleB = b.title.toUpperCase();
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                } else {
                    return 0;
                }
            });
            break;
    }
    return tab;
}

//permettre de rafraichir la gallerie d'image en fonction du filtre sélectioné
let filter = document.getElementById("filter_select");
filter.addEventListener("change", () => {
    document.getElementById("gallery").remove();
    document.getElementById("lightbox").remove();
    applyFilter(filter.value, gallery);
    main.appendChild(galleryTemplate(gallery));
    main.appendChild(lightboxTemplate(gallery));
    console.log(gallery);
})

setPageInfo();