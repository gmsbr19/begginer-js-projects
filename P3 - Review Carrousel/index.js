class worker {
    constructor(img, name, work, bio){
        this.img = img
        this.name = name
        this.work = work
        this.bio = bio
    }
}

const thiago = new worker('thiago.jpeg' , 'Thiago Portela', 'Web Developer', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore adipisci at mollitia dolorum. Eligendi tempora, quia numquam ex atque ad autem beatae deserunt, dicta magnam sapiente error unde eveniet!')
const iasmim = new worker('iasmim.jpeg', 'Iasmim Nazário', 'Software tester', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore adipisci at mollitia dolorum. Eligendi tempora, quia numquam ex atque ad autem beatae deserunt, dicta magnam sapiente error unde eveniet!')
const alan = new worker('alan.jpeg', 'Alan Gabriel', 'System analytics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore adipisci at mollitia dolorum. Eligendi tempora, quia numquam ex atque ad autem beatae deserunt, dicta magnam sapiente error unde eveniet!')

const workers = []
function addWorker (worker){
    workers.push(worker)
}

addWorker(thiago)
addWorker(iasmim)
addWorker(alan)

const next = document.querySelector('.fa-angle-right')
const previous = document.querySelector('.fa-angle-left')
const btns = document.querySelector('.switchBtns')

let position = 0

window.addEventListener("pageshow", slide)
btns.addEventListener("click", slide)

function slide(){
    next.onclick = () => {
        position++
        if(position >= workers.length)
            position = 0
        right()
    }
    previous.onclick = () => {
        position--
        if(position < 0)
            position = workers.length - 1
        left()
    }

    document.getElementById('img').src = `${workers[position].img}`
    document.getElementById('name').innerHTML = `${workers[position].name}`
    document.getElementById('work').innerHTML = `${workers[position].work.toUpperCase()}`
    document.getElementById('bio').innerHTML = `${workers[position].bio}`
    
}

function right(){
    let id = null
    const element = document.querySelector('#info')
    const op = document.getElementsByClassName('op')
    opEls = Array.from(op)
    opEls.forEach((e)=>{
        e.style.opacity = 0
    })
    let pos = 50
    let opValue = 0
    id = setInterval(()=>{
        if (pos == 0)
            clearInterval(id)
        else{
            opEls.forEach(e => {
                e.style.opacity = opValue
                opValue += 0.005
            })
            element.style.left = pos + 'px'
            pos--
        }
    }, 5)
}
function left(){
    let id = null
    const element = document.querySelector('#info')
    const op = document.getElementsByClassName('op')
    opEls = Array.from(op)
    opEls.forEach((e)=>{
        e.style.opacity = 0
    })
    let pos = -50
    let opValue = 0
    id = setInterval(()=>{
        if (pos == 0)
            clearInterval(id)
        else{
            opEls.forEach(e => {
                e.style.opacity = opValue
                opValue += 0.005
            })
            element.style.left = pos + 'px'
            pos++
        }
    }, 5)
}