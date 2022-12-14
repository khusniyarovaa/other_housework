let button = document.querySelector('button')
let input = document.getElementById('text')
let square = document.getElementById('square')
let range = document.getElementById('range')
let circle = document.getElementById('circle')
let e_btn = document.getElementById('e_btn')


let changeСolor = function(event) {
square.style.backgroundColor = input.value
input.value = ''
}

let hideButton = e_btn.style.display = 'none'

let changeSize = function(event) {
  circle.style.width = range.value + '%'
  circle.style.height = range.value + '%'
}

button.addEventListener('click', changeСolor)
range.addEventListener('input', changeSize)




