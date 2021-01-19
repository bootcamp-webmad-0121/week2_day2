

// // setTimeout()

// console.log('Previo a proceso asíncrono')

// const timeoutID = setTimeout(() => console.log('Pues yo soy asíncrono...'), 3000)

// console.log('Tras proceso asíncrono')


// document.querySelector('button').onclick = () => {
//     console.log('Temporizador con ID', timeoutID, 'discontinuado')
//     clearTimeout(timeoutID)
// }






const refreshTime = () => {
    const now = new Date()
    const formattedNow = now.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    document.querySelector('#currentTime').textContent = formattedNow
}


const intervalID = setInterval(refreshTime, 1000)


document.querySelector('button').onclick = () => {
    console.log('Intervalo con ID', intervalID, 'detenido')
    clearInterval(intervalID)
}
