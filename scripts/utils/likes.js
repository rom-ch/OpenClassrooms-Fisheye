export default class Likes {
	// methode recuperer les likes et calculer le nombre total de like
	static getTotalLikes() {
		const insertLikes = document.querySelector(".insert__likes");
		const likesNumber = document.querySelectorAll("[data-likes]");
		let totalLikesList = [];
		let totalLikes;
		likesNumber.forEach(test => {
			totalLikesList.push(test.dataset.likes * 1);
			totalLikes = totalLikesList.reduce((acc, cur) => acc + cur, 0);
		});

		insertLikes.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;
	}

	static likeMedia(icon) {
		const parentMedia = icon.closest(".media");
		const likeNumberEl = icon.previousElementSibling;

		if (parentMedia.dataset.userLike === "false") {
			parentMedia.dataset.userLike = "true";
			parentMedia.dataset.likes = parentMedia.dataset.likes * 1 + 1;
			likeNumberEl.style.fontWeight = "700";
		} else {
			parentMedia.dataset.userLike = "false";
			parentMedia.dataset.likes = parentMedia.dataset.likes * 1 - 1;
			likeNumberEl.style.fontWeight = "400";
		}
		likeNumberEl.innerHTML = parentMedia.dataset.likes;
		this.getTotalLikes();
	}

	// methode gerer les like et unlike
	static handleLike() {
		const likeIcon = document.querySelectorAll(".media__like-icon");

		likeIcon.forEach(icon => {
			icon.addEventListener("click", () => {
				this.likeMedia(icon);
			});

			icon.addEventListener("keydown", e => {
				if (e.key === "Enter") this.likeMedia(icon);
			});
		});
	}
}
