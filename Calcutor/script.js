let theme = document.querySelector('.theme')
let answer = document.getElementById('inputbox')
let equal = document.querySelector('.equal')
let reset = document.querySelector('.reset')
let buttons = document.querySelectorAll('.input')
let delete1 = document.querySelector('.del')

window.onload=(()=>{
    answer.innerHTML = JSON.parse(localStorage.getItem('elem'))
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        answer.innerHTML +=  button.innerHTML 
        let storeval = localStorage.setItem('elem',JSON.stringify(answer.innerHTML))       
    })
})

reset.addEventListener('click',()=>{
    answer.innerHTML = ''
    let storeval = localStorage.setItem('elem',JSON.stringify(answer.innerHTML))
})
equal.addEventListener('click',()=>{
     let result = eval(answer.innerHTML);
     answer.innerHTML = result
     let storeval = localStorage.setItem('elem',JSON.stringify(answer.innerHTML))
})

delete1.addEventListener('click',()=>{
    let value = answer.innerHTML;
    value = value.slice(0,-1)
    answer.innerHTML = value
    let storeval = localStorage.setItem('elem',JSON.stringify(answer.innerHTML))
})

theme.addEventListener('click',()=>{
    document.body.classList.toggle('change')
})


