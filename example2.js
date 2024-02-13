// 1 - Initialize canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Canvas dimentions
canvas.width = 1080
canvas.height = 900

// Draw a filled rectangle
ctx.fillStyle = 'blue'
ctx.fillRect(0, 0, 100, 100) // x, y, w, h

// Draw an outlined rectangle
ctx.strokeStyle = 'green'
ctx.strokeRect(150, 0, 100, 100) // x, y, w, h

// Draw a line
// set line stroke and line width
ctx.strokeStyle = 'red' // '#F9DC5C', rgba(0,0,255,0.5)'
ctx.lineWidth = 5

// draw a red line
ctx.beginPath()
ctx.moveTo(0, 150)
ctx.lineTo(300, 150)
ctx.stroke()

// Draw a circle
ctx.beginPath()
ctx.arc(55, 250, 50, 0, 2 * Math.PI, false)
ctx.lineWidth = 3
ctx.strokeStyle = '#000000'
ctx.stroke()
