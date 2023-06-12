//image gallery
const galleryImgs = [
	{
		src: "./assets/gallery/MuscleCar.png",
		alt: "Thumbnail Image 1",
	},
	{
		src: "./assets/gallery/Jeep.png",
		alt: "Thumbnail 2.0",
	},
	{
		src: "./assets/gallery/Vespa.png",
		alt: "Thumbnail Image 3",
	},
];

let mainImg = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");
//thumbs -> <img src="./assets/gallery/MuscleCar.png"
//          alt="Thumbnail Image 1" data-array-index="0" data-selected="true">

mainImg.src = galleryImgs[0].src;
mainImg.alt = galleryImgs[0].alt;
galleryImgs.forEach(function (image, index) {
	let thumb = document.createElement("img");
	thumb.src = image.src;
	thumb.alt = image.alt;
	thumb.dataset.arrayIndex = index;
	thumb.dataset.selected = index === 0 ? true : false;
	thumb.addEventListener("click", function (e) {
		let selectedIndex = e.target.dataset.arrayIndex;
		let selectedImg = galleryImgs[selectedIndex];
		mainImg.src = selectedImg.src;
		mainImg.alt = selectedImg.alt;
		thumbnails.querySelectorAll("img").forEach(function (img) {
			img.dataset.selected = false;
		});
		e.target.dataset.selected = true;
	});
	thumbnails.appendChild(thumb);
});
