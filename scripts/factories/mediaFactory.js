import { Images } from '../models/images.js';
import { Video } from '../models/videos.js';

export class MediaFactory {
    constructor(data) {
        if (data.hasOwnProperty('image')) {
            return new Images(data);
        }
        else if (data.hasOwnProperty("video")) {
            return new Video(data);
        }
        else {
            return "Format inconnu"
        }
    }
}