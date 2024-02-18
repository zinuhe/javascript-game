// 1 - Initialize canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Canvas dimentions
canvas.width = 1080
canvas.height = 700

let time = 0

// Game Loop
function update () {
  // Fill the background
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 1000, 700) // x, y, w, h

  // Draws the rectangle
  ctx.fillStyle = 'blue'
  ctx.fillRect(0, 0 + time, 100, 100) // x, y, w, h
  time += 1
  // console.log({ time })

  if (time > 300) {
    return null
  }

  window.requestAnimationFrame(update) // Loop
}

update()
