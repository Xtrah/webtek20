 // Functions imported from modules 
 import {gallery} from './gallery.js'
 import {navSlide} from './navBurger.js'
 
 // Function calls when window is loaded 
 window.addEventListener("load", () => {
	 const loadingScreen = document.getElementById("loadingScreen")
	 // Applies the loadingFinished class to the loading screen so it dissapears
	 loadingScreen.setAttribute("class", "loadingFinished")
	 // Calling gallery and navbar functionality after page load 
	 navSlide()
	 gallery()
 })  