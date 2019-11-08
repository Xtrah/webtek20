let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", submitForm)
let form = document.getElementById("contactUsForm")
let name = document.getElementById("name")
let email = document.getElementById("email")
let telephone = document.getElementById("telephone")
function submitForm(event){
	if (name.checkValidity() && email.checkValidity() && telephone.checkValidity()){
		event.preventDefault()
		form.reset()
		alert("The message has been sent!")
	}
}