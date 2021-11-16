const crearContador = () => {
	let count = 1
	return () => {
		console.log(count++);
	}
}

const contar = crearContador()
contar()
contar()
contar()