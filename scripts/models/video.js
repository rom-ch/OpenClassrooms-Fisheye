import MediaModel from "./media.js";

export default class VideoModel extends MediaModel {
	constructor(media) {
		super(media);
		this._video = media.video;
	}

	get contentLink() {
		return `assets/medias/${this._video}`;
	}

	get getMediaContent() {
		return `
        <video class="video">
            <source src="assets/medias/${this._video}" type="video/mp4">
      	</video>
      `;
	}
}
