import { photographer } from "../pages/photographer.js";

export class Images {

    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._type = "image";
    }



    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get image() {
        return "assets/photographers/Sample Photos/" + photographer.name + "/" + (this._image);
    }

    get likes() {
        return this._likes;
    }

    set likes(value) {
        return this._likes = value;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }

    get type() {
        return this._type;
    }

}
// 