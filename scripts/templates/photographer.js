function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const a = document.createElement('a');
        a.setAttribute("href", "photographer.html?id=" + id)

        const img = document.createElement('img');
        img.setAttribute("class", "portrait");
        img.setAttribute("src", "assets/photographers/" + portrait)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('span');
        location.setAttribute("class", "location")
        location.innerText = city + ", " + country;

        const tagLine = document.createElement("span");
        tagLine.setAttribute("class", "tagline");
        tagLine.innerText = tagline;

        const fee = document.createElement("span");
        fee.setAttribute("class", "price");
        fee.innerText = price + "€/jour"

        article.appendChild(a);
        article.appendChild(location);
        article.appendChild(tagLine);
        article.appendChild(fee);
        a.appendChild(img);
        a.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}