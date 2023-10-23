let footer = document.createElement("footer")
let p = document.createElement("p")
let text_p = document.createTextNode("CopyRights ")
let span_p = document.createElement("span")

let  currentYear = new Date().getFullYear()

p.appendChild(text_p) 
p.innerHTML += currentYear
footer.appendChild(p)

document.styleSheets[0].insertRule("footer { position: fixed; left: 0; bottom: 0; width: 100%; background-color: #333; color: white; text-align: center;}")

document.body.appendChild(footer)