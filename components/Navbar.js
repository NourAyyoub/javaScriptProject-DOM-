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