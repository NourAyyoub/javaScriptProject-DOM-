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