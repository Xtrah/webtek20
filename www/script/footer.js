var footer = document.createElement("section")
var footerOne = document.createElement("div")
var footerTwo = document.createElement("div")
var pOne = document.createElement("h3")
var pTwo = document.createElement("h3")
var pOneText = document.createTextNode("Vigbjørn Hassel : +47 987 65 432")
var pTwoText = document.createTextNode("©2019 Hassel Software AS")

// var footerOneContent = document.createTextNode("Vigbjørn Hassel : +47 987 65 432")
// var footerTwoContent = document.createTextNode("©2019 Hassel Software AS")
var img = document.createElement("img")

img.src = "img/contactIcon.png"
img.alt = "footerPhoneIcon"
img.id = "footerImg"

footer.appendChild(footerOne)
pOne.appendChild(pOneText)
footer.appendChild(footerTwo)
pTwo.appendChild(pTwoText)
footerOne.appendChild(img)
footerOne.appendChild(pOne)
footerTwo.appendChild(pTwo)
footer.setAttribute("id", "footer")
footerOne.setAttribute("id", "footerOne")
footerTwo.setAttribute("id", "footerTwo")

document.querySelector("body").appendChild(footer)
