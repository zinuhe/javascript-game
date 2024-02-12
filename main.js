// 1 - Initialize canvas
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Board dimentions
canvas.width = 800;
canvas.height = 400;

// Draw something
context.fillStyle = '#909090' // Background
context.fillRect(0, 0, canvas.width, canvas.height)
