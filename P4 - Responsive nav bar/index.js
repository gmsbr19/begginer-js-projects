const menu = document.querySelector('.navBtns').cloneNode(true)
const menuItem = [...menu.childNodes]
const menuBtn = document.querySelector('.fa-bars')
let menuOn = false

document.body.insertBefore(menu, document.querySelector('main'))

menu.classList.remove('navBtns')
menu.classList.add('innerMenu')

for(let e of menuItem){
    if (e.nodeType == 3)
        continue
    else{
        e.classList.remove("navBtn")
        e.classList.add("menuItem")
    }
}


menuBtn.addEventListener("click", ()=>{
    menuOn == false ? menuOn = true : menuOn = false
    
    if (menuOn){
        let pos = 0
        menu.style.display = 'grid'
        const btnOn = setInterval(()=>{
            if (pos >= 90)
                clearInterval(btnOn)
            else{
                pos+=5
                menuBtn.style.transform = `rotateZ(${pos}deg)`
            }
        },10)
        menu.style.animation = "open 0.2s"
    }
    else{
        pos = 90
        const btnOn = setInterval(()=>{
            if (pos <= 0)
            clearInterval(btnOn)
            else{
                pos-=5
                menuBtn.style.transform = `rotateZ(${pos}deg)`
            }
        },10)

        menu.style.animation = "close 0.2s"
        const id = setTimeout(()=>{
            menu.style.display = 'none'
        },198)
    }
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > window.innerHeight && menuOn)
    menu.style.display = 'none'
    else if(window.innerWidth < window.innerHeight && menuOn)
    menu.style.display = 'grid'
})