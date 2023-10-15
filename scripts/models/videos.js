export class Video {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
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

    get video() {
        return this._video;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get price() {
        return this._price;
    }

    get image() {
        return "assets/images/videoThumbnails/" + this._video.slice(0, -4) + ".jpg"
    }
}