const x = document.createElement('i')
x.classList.add('fa-regular', 'fa-x')
x.style.color = 'red'

const o = document.createElement('i')
o.classList.add('fa-regular', 'fa-o')
o.style.color = 'rgb(51, 51, 255)'

const indicatorContainer = document.getElementById('indicator-container')
const turnIndicator = document.getElementById('turn-indicator')
const gameDisplay = document.getElementById('game')
const reset = document.getElementById('btn')

const container = ['', '', '', '', '', '', '', '', '']
window.addEventListener('load', main())
reset.addEventListener('click', () => location.reload(true))

function main(){
    let icon = function(){
        this.value = x
        this.color = this.value.style.color
    }
    
    let atual = new icon
    indicatorContainer.appendChild(atual.value)
    
    for(let i = 0; i < 9; i++){
        const iContainer = document.createElement('div')
        iContainer.classList.add('i-container')
        iContainer.setAttribute('pos', i + 1)
        gameDisplay.appendChild(iContainer)
        
        iContainer.addEventListener('click', Click)
        function Click(e){
            if(!e.currentTarget.classList.contains('filled') && e.currentTarget.classList.contains('i-container')){
                if(e.currentTarget.firstChild){
                    e.currentTarget.removeChild(e.currentTarget.firstChild)
                }
                e.currentTarget.classList.add('filled')
                e.currentTarget.appendChild(atual.value.cloneNode(true))
                if(atual.value == x){
                    e.currentTarget.setAttribute('el', 'x')
                    atual.value = o
                } else {
                    e.currentTarget.setAttribute('el', 'o')
                    atual.value = x
                }
                changeIndicator(atual.value)
            } else {
                return
            }
    
            winner = verifyWinner(e.currentTarget)
            const array = Array.from(document.getElementsByClassName('i-container'))
            if(winner){
                showWinner()
                console.log(Array.from(document.getElementsByClassName('i-container')))
                array.forEach(element => {
                    element.classList.add('filled')
                })
            }
            else if(!winner && array.every(v => v.classList.contains('filled'))){
                turnIndicator.textContent = 'Velha!'
                gameDisplay.style.boxShadow = '0px 0px 10px 5px #adadad'
            }

        }

        iContainer.addEventListener('mouseenter', mouseEnter)
        function mouseEnter(e){
            if(!e.currentTarget.classList.contains('filled') && e.currentTarget.classList.contains('i-container')){
                e.currentTarget.appendChild(atual.value.cloneNode(true))
                e.currentTarget.style.cursor = 'pointer'
                e.currentTarget.firstChild.style.color = '#adadad56'
            } else {
                e.currentTarget.style.cursor = 'initial'
                return
            }  
        }

        iContainer.addEventListener('mouseleave', mouseLeave)
        function mouseLeave(e){
            if(!e.currentTarget.classList.contains('filled') && e.currentTarget.classList.contains('i-container')){
                e.currentTarget.removeChild(e.currentTarget.firstChild)
            } else {
                return
            }   
        }
        function showWinner(){
            if(winner == 'x'){
                turnIndicator.textContent = 'Vencedor: '
                turnIndicator.appendChild(indicatorContainer)
                indicatorContainer.removeChild(indicatorContainer.firstChild)
                indicatorContainer.appendChild(x)
                gameDisplay.style.backgroundColor = 'red'
                gameDisplay.style.boxShadow = '0px 0px 10px 5px red'
            }
            else if(winner == 'o'){
                turnIndicator.textContent = 'Vencedor: '
                turnIndicator.appendChild(indicatorContainer)
                indicatorContainer.removeChild(indicatorContainer.firstChild)
                indicatorContainer.appendChild(o)
                gameDisplay.style.backgroundColor = 'rgb(51, 51, 255)'
                gameDisplay.style.boxShadow = '0px 0px 10px 5px rgb(51, 51, 255)'
            }
        }
        
    }

}


function changeIndicator(value){
    indicatorContainer.removeChild(indicatorContainer.firstChild)
    indicatorContainer.appendChild(value)
}

function verifyWinner(target){
    let winner = ''
    container[target.getAttribute('pos') - 1] = target.getAttribute('el')
    const l1 = container.slice(0, 3)
    const l2 = container.slice(3, 6)
    const l3 = container.slice(6, 9)

    if(areEqual(l1))
        winner = l1[1]
    else if(areEqual(l2))
        winner = l2[1]
    else if(areEqual(l3))
        winner = l3[1]
    else if(container[0] == container[3] && container[3] == container[6] && container[0] != '')
        winner = container[0]
    else if(container[1] == container[4] && container[4] == container[7] && container[1] != '')
        winner = container[1]
    else if(container[2] == container[5] && container[5] == container[8] && container[2] != '')
        winner = container[2]
    else if(container[2] == container[4] && container[4] == container[6] && container[2] != '')    
        winner = container[2]
    else if(container[0] == container[4] && container[4] == container[8] && container[0] != '')    
        winner = container[0]

    return winner
}

const areEqual = arr => arr.every(v => v === arr[0] && v != '')