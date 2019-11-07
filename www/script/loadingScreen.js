/* Function calls when window is loaded */
window.addEventListener("load", () => {
	const loadingScreen = document.getElementById("loadingScreen")
	/* Applies the loadingFinished class to the loading screen so it dissapears*/
	loadingScreen.setAttribute("class", "loadingFinished")
}) 