const simpleColors = ['red', 'green', 'blue', 'orange', 'yellow', 'indigo', 'violet']

simpleBtn = document.getElementById('simpleBtn')
hexBtn = document.getElementById('hexBtn')
let mode = document.getElementById("mainMode")

const clickMe = document.getElementById('clickMe')
let color = document.getElementById('color')
const body = document.querySelector('body')

let simpleMode = true
let hexMode = false

simpleBtn.onclick = () => {
    mode.textContent = 'Simple'
    simpleMode = true
    hexMode = false
}
hexBtn.onclick = () => {
    mode.textContent = 'Hex'
    simpleMode = false
    hexMode = true
}

clickMe.onclick = () => {
    if (simpleMode){
        let rand = Math.floor(Math.random() * simpleColors.length)
        let newString = `${simpleColors[rand]}`
        color.textContent = newString.charAt(0).toUpperCase() + newString.slice(1)
        body.style.backgroundColor = ` ${simpleColors[rand]}`
    }
    if (hexMode){
        let randHex = Math.floor(Math.random()*0xFFFFFF<<0).toString(16)
        color.textContent = ` #${randHex}`
        body.style.backgroundColor = `${color.textContent}`
    }
}
