// 1 - Initialize canvas
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// Canvas dimentions
canvas.width = 800
canvas.height = 400

// Draws a background
context.fillStyle = '#909090' // Grey Background
context.fillRect(0, 0, canvas.width, canvas.height)

// Draws rectangles
context.fillStyle = 'yellow'
context.fillRect(0, 0, 20, 20) // Rectangle on upper left corner
context.fillRect(canvas.width - 20, 0, 20, 20) // Rectangle on upper right corner
