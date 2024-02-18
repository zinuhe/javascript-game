// 1 - Initialize canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Canvas dimentions
canvas.width = 1080
canvas.height = 700
// Draw a background
// ctx.fillStyle = '#909090' // Grey Background
// ctx.fillRect(0, 0, canvas.width, canvas.height)

// Draws a filled rectangle
ctx.fillStyle = 'blue'
ctx.fillRect(0, 0, 100, 100) // x, y, w, h

// Draws an outlined rectangle
ctx.strokeStyle = 'green' // "rgb(255 0 0 / 50%)";
ctx.strokeRect(150, 0, 100, 100) // x, y, w, h

// Draws a line
// set line stroke and line width
ctx.strokeStyle = 'red' // '#F9DC5C', rgba(0,0,255,0.5)'
ctx.lineWidth = 5

// draws a red line
ctx.beginPath()
ctx.moveTo(0, 150)
ctx.lineTo(300, 150)
ctx.stroke()

// ctx.setLineDash([4, 2]);
// ctx.lineDashOffset = -offset;

// Draws a circle
ctx.beginPath()
ctx.arc(55, 250, 50, 0, 2 * Math.PI, false)
ctx.lineWidth = 3
ctx.strokeStyle = '#000000'
ctx.stroke()

// Draws a half circle
ctx.beginPath()
// ctx.moveTo(300, 400)
ctx.arc(200, 250, 50, 0, Math.PI, false) //  (clockwise)
ctx.stroke()

// Draws a filled triangle
ctx.beginPath()
ctx.moveTo(50, 350)
ctx.lineTo(50, 450) // down
ctx.lineTo(100, 400) // right
ctx.fill()

// Stroked triangle
ctx.beginPath()
ctx.moveTo(150, 350)
ctx.lineTo(150, 450) // down
ctx.lineTo(200, 400) // right
ctx.closePath()
ctx.stroke()

// Using Path2D()
const rectangle = new Path2D()
rectangle.rect(300, 5, 50, 50)

const circle = new Path2D()
circle.arc(325, 30, 22, 0, 2 * Math.PI)

ctx.stroke(rectangle)
ctx.fill(circle)
