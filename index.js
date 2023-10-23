let navbar = document.createElement("div")
navbar.classList.add("navbar")

let logo = document.createElement("img")
logo.setAttribute("src","images/javaScriptLogo.png")
logo.setAttribute("alt","JavaScriptLogo")
navbar.appendChild(logo)

let menuItems = ['Contact', 'Services', 'About', 'Home']
for(let i = 0;i < menuItems.length;i++)
{
    let item = document.createElement("a")
    let text = document.createTextNode(menuItems[i])
    item.setAttribute("href","#")
    item.appendChild(text)
    navbar.appendChild(item)
}

document.styleSheets[0].insertRule("body { margin: 0; }")
document.styleSheets[0].insertRule(".navbar { overflow: hidden; background-color: #333; }")
document.styleSheets[0].insertRule(".navbar a { float: right; color: #f2f2f2; text-align: center;padding: 14px 16px; text-decoration: none; font-size: 17px; }")
document.styleSheets[0].insertRule(".navbar a:hover { background-color: #ddd;color: black;}")

logo.style.cssText = "width:60px;height:60px; border-radius: 20px;"

document.body.appendChild(navbar)

//////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////
let container = document.createElement("div")

container.className = "card-container"

let number_of_cards = 35
for(let i=1 ; i<=number_of_cards ; i++)
{
    let card = document.createElement("div")
    let h3 = document.createElement("h3")
    let h3_p = document.createElement("p")
    
    let h3_text = document.createTextNode(i)
    let h3_p_text = document.createTextNode("Product")

    h3.appendChild(h3_text)
    h3_p.appendChild(h3_p_text)

    card.appendChild(h3)
    card.appendChild(h3_p)

    card.className = "card"

    container.appendChild(card)
}

document.styleSheets[0].insertRule(".card-container { text-align: center; display: inline-block;}")
document.styleSheets[0].insertRule(".card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); width: 200px; margin: 15px; text-align: center; font-family: arial; display: inline-block; }")

document.body.appendChild(container)