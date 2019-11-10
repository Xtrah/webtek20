// Getting the submit button and adding click listener
let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", submitForm)
// Getting all form input elements to later check for valid input
let form = document.getElementById("contactUsForm")
let name = document.getElementById("name")
let email = document.getElementById("email")
let telephone = document.getElementById("telephone")
function submitForm(event){
	// Checking for validity. If valid clear form and alert user that the form has been "sent"
	if (name.checkValidity() && email.checkValidity() && telephone.checkValidity()){
		event.preventDefault()
		form.reset()
		alert("The message has been sent!")
	}
}