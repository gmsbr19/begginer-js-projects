const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')
const increaseBtn = document.getElementById('increaseBtn')
const counter = document.getElementById('counter')
const buttons = document.querySelector('.buttons')

let count = 0

decreaseBtn.onclick = () => {
    count--
    counter.textContent = `${count}`
}
resetBtn.onclick = () => {
    count = 0
    counter.textContent = `0`
}
increaseBtn.onclick = () => {
    count++
    counter.textContent = `${count}`
}

buttons.onclick = () => {
    if (count > 0)
        counter.style.color = 'green'
    if (count < 0)
        counter.style.color = 'red'
    if (count == 0)
        counter.style.color = 'black'
}
