const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")


function updateClock(){

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    const hourDeg = h * 30
    const minuteDeg = m * 6
    const secondDeg = s * 6

    hourEl.style.transform = `rotate(${hourDeg}deg)`
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`
    secondEl.style.transform = `rotate(${secondDeg}deg)`

    setTimeout(updateClock, 1000)
}

updateClock()