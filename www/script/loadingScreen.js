import {gallery} from './gallery.js';
window.addEventListener("load", () => {
	const loadingScreen = document.getElementById("loadingScreen")
	loadingScreen.setAttribute("class", "loadingFinished")
	// Calling gallery functionality after page load
	gallery()
}) 