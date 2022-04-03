setInterval(setClock, 1000)

const timeHånd = document.querySelector('[data-hour-hand]')
const minutthånd = document.querySelector('[data-minute-hand]')
const sekundhånd = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const sekunder = currentDate.getSeconds() / 60
  const minutter = (sekunder + currentDate.getMinutes()) / 60
  const timer = (minutter + currentDate.getHours()) / 12
  setRotation(sekundhånd, sekunder)
  setRotation(minutthånd, minutter)
  setRotation(timeHånd, timer)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}




setClock()