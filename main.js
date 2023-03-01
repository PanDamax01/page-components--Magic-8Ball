const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = [
	'Tak',
	'Nie',
	'Może',
	'Ciężko powiedzieć',
	'NIe chcesz znać...',
]

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1100)
}

const checkInput = () => {
	ball.classList.remove('shake-animation')

	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie mu kończyć się pytajnikiem "?"'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie'
		answer.textContent = ''
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answerArr.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
}

ball.addEventListener('click', shakeBall)
