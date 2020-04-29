import './style.css'
import printMe from './print'

function component () {
  const element = document.createElement('div')
  element.innerHTML = 'hello world!'
  element.classList.add('header')

  const btn = document.createElement('button')
  btn.innerHTML = 'click mei peng!'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())