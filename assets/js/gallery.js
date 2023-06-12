//image gallery
const galleryImgs = [
	{
		src: "./assets/gallery/MuscleCar.png",
		art: "Thumbnail Image 1",
	},
	{
		src: "./assets/gallery/Jeep.png",
		art: "Thumbnail Image 2",
	},
	{
		src: "./assets/gallery/Vespa.png",
		art: "Thumbnail Image 3",
	},
];

let mainImg = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");
//thumbs -> <img src="./assets/gallery/MuscleCar.png"
//          alt="Thumbnail Image 1" data-array-index="0" data-selected="true">

mainImg.src = galleryImgs[0].src;
mainImg.art = galleryImgs[0].art;
galleryImgs.forEach(function (image, index) {
	console.log(image.src);
});
