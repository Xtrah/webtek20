var footer = document.createElement("section")
var footerOne = document.createElement("div")
var footerTwo = document.createElement("div")
var footerOneContent = document.createTextNode("Vigbjørn Hassel : +47 987 65 432")
var footerTwoContent = document.createTextNode("©2019 Hassel Software AS")


footer.appendChild(footerOne)
footer.appendChild(footerTwo)
footerOne.appendChild(footerOneContent)
footerTwo.appendChild(footerTwoContent)
footer.setAttribute("id", "footer")
footerOne.setAttribute("id", "footerOne")
footerTwo.setAttribute("id", "footerTwo")

document.querySelector("body").appendChild(footer)
console.log("hei big boy")



