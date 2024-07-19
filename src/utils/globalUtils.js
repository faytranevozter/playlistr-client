export default {
	addRoomToURL: (token, hex) => {
		window.location.replace(
			`${publicURL}/room?access_token=${token}&room_id=${hex}`
		);
	},
	configureSlides: (arr, rowLength) => {
		let allSlides = [];
		let numSlides = arr.length / rowLength;

		for (let slideIndex = 0; slideIndex < numSlides; slideIndex++) {
			let currentSlide = [];

			for (let itemIndex = 0; itemIndex < rowLength; itemIndex++) {
				let playlist = arr[itemIndex];
				if (playlist !== undefined) currentSlide.push(playlist);
			}

			arr.splice(0, rowLength);

			allSlides.push(currentSlide);
		}

		return allSlides;
	}
};
