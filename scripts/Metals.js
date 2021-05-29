import { getMetals, setMetal } from "./database.js" //needs setMetal function

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {//changed {} to ()
            setMetal(parseInt(event.target.value)) 
        }
    } 
) //needed event listener completion

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}