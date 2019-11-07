import {gallery} from './gallery.js';
window.addEventListener("load", () => {
	const loadingScreen = document.getElementById("loadingScreen")
	loadingScreen.setAttribute("class", "loadingFinished")
	console.log("Is loaded")
	gallery()
	console.log("Nå har gallery funk kjørt fra loading.js")
}) 