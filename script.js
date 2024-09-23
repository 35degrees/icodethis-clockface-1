const hourHand = document.querySelector('.hour-hand')
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')

let degrees = 0
function showTime() {
	setInterval(() => {
		const time = new Date()
		const hour = time.getHours()
		const minute = time.getMinutes()
		const second = time.getSeconds()

		console.log(`The time is ${hour}:${minute}:${second}`)

		secondHand.style.transform = `rotate(${(second / 60) * 360 - 90}deg)`
		console.log({ second })
		minuteHand.style.transform = `rotate(${(minute / 60) * 360 - 90}deg)`
		hourHand.style.transform = `rotate(${(hour / 12) * 360 - 90}deg)`
	}, 1000)
}

showTime()
