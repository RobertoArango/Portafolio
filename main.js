const imgArray = [
    './imagenes/Escaperoom.webp',
    './imagenes/game.avif',
    './imagenes/Python.webp'
]

const img = document.getElementById('slide')
let i = 0

const slideshow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideshow, 4000)
}