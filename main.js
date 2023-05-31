//declarations
var greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "Texas";
const temp = 75;

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
