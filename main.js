//Nav Menu, open -> close
document.querySelector("#open-nav-menu").addEventListener("click", function () {
	document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document
	.querySelector("#close-nav-menu")
	.addEventListener("click", function () {
		document.querySelector("header nav .wrapper").classList.remove("nav-open");
	});

//Greeting Section
const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "Texas";
var temp = "75.656565";
temp = Math.round(temp);
var tempScale = "C";
let weatherText = `It's currently ${weatherCondition} in ${userLocation} and it's ${temp}°${tempScale} outside.`;

document.querySelector("H1#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;

//temp conversion

//image gallery
