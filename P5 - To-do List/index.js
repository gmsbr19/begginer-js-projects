const form = document.getElementById('newTask')
const submitBtn = document.querySelector('#submitBtn')
const defaultTask = document.getElementById('task')
const taskList = document.getElementById('task-list')
const actionBtns = document.querySelector('.action-buttons')
let id = 0


submitBtn.addEventListener('click', e => {
    e.preventDefault()
    
    const input = document.getElementById('input')
    const task = defaultTask.cloneNode(true)
    const taskText = task.childNodes[1].childNodes[3]
    if(!input.value){
        window.alert('Insira uma tarefa!')
        return
    } else {
        taskText.textContent = input.value
    }
    task.style.display = 'flex'
    taskList.appendChild(task)
    input.value = ""
    auto_grow(taskText)
    
    const updateBtn = task.childNodes[3].childNodes[1]
    const deleteBtn = task.childNodes[3].childNodes[3]
    const checkbox = task.childNodes[1].childNodes[1]
    
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(task)
    })
    
    updateBtn.addEventListener('click', () => {
        if(!taskText.classList.contains('checked')){
            checkbox.disabled ? checkbox.disabled = false : checkbox.disabled = true
            updateBtn.classList.toggle('changing')
            taskText.classList.toggle('changing')
            
            if(updateBtn.classList.contains('changing')){
                taskText.removeAttribute('readonly')
                taskText.focus()
            } else {
                taskText.setAttribute('readonly', 'readonly')
            }
            taskText.addEventListener('keypress', e => {
                if(e.key == 'Enter'){
                    updateBtn.classList.remove('changing')
                    taskText.classList.remove('changing')
                    checkbox.disabled = false
                    taskText.setAttribute('readonly', 'readonly')
                }
            })
        }
    })
    
    checkbox.addEventListener('change', e => {
            taskText.classList.toggle('checked')
    })
})

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}