const createGame = () => {
	const secretNumber = 5
	return (num) => {
		if (num >=1 && num <= 100) {
			if (num > secretNumber) {
				return 'Muy alto!'
			} else if (num < secretNumber) {
				return 'Muy bajo!';
			} else {
				return 'Lo adivinaste, felicitaciones!';
			}
		} else {
			return 'Fuera de rango: solo numeros entre 1 y 100';
		}
	}
}

const guess = createGame()
guess(8)
guess(4)
guess(5)

// Bonus App
console.log('ADIVINE EL NUMERO SECRETO');
process.stdout.write('Ingrese un numero: ')
process.stdin.on('data', function (data) {
	const guess = createGame()
	const msg = guess(parseInt(data.toString()))
	console.log(msg);
	if (msg === 'Lo adivinaste, felicitaciones!') {
		process.exit()
	}
  process.stdout.write('Ingrese un numero: ')
})