let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", submitForm)
let name = document.getElementById("name")
let email = document.getElementById("email")
let telephone = document.getElementById("telephone")
function submitForm(event){
	if (name.checkValidity() && email.checkValidity() && telephone.checkValidity()){
		event.preventDefault()
		alert("All is valid!")
	}
}