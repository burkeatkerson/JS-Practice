//declarations
var greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "Texas";
const temp = 75;

// new Date().getHours();

setInterval(function () {
	let localTime = new Date();
	document.querySelector("span[data-time=hours").textContent = localTime
		.getHours()
		.toString()
		.padStart(2, "0");
	document.querySelector("span[data-time=minutes").textContent = localTime
		.getMinutes()
		.toString()
		.padStart(2, "0");
	document.querySelector("span[data-time=seconds").textContent = localTime
		.getSeconds()
		.toString()
		.padStart(2, "0");
}, 1000);

//Nav Menu, open -> close
document.querySelector("#open-nav-menu").addEventListener("click", function () {
	document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document
	.querySelector("#close-nav-menu")
	.addEventListener("click", function () {
		document.querySelector("header nav .wrapper").classList.remove("nav-open");
	});

//temp conversion
function tempToCel(temp) {
	var celsius = Math.round((temp - 32) * (5 / 9));
	return celsius;
}

//Greeting Section
document.querySelector("H1#greeting").innerHTML = greetingText;
document.querySelector(
	"p#weather"
).innerHTML = `It's currently ${weatherCondition} in ${userLocation} and it's ${temp}°F outside.`;

document
	.querySelector(".weather-group")
	.addEventListener("click", function (e) {
		var tempID = e.target.id;
		if (tempID == "celsius") {
			celsius = tempToCel(temp);
			document.querySelector(
				"p#weather"
			).innerHTML = `It's currently ${weatherCondition} in ${userLocation} and it's ${celsius}°C outside.`;
		} else if (tempID == "fahr") {
			var fahr = temp;
			document.querySelector(
				"p#weather"
			).innerHTML = `It's currently ${weatherCondition} in ${userLocation} and it's ${fahr}°F outside.`;
		}
	});

//image gallery
