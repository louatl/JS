function buscarPatron(cadena, patron) {
	patron = patron.toUpperCase();
	cadena = cadena.toUpperCase();
	let index, contador = 0, inicio;
	index = cadena.indexOf(patron);

	for(;index != -1; contador++) {
		if(index != -1){
			inicio = index + 1;
			index = cadena.indexOf(patron, inicio);
		}
	}
	return contador;
}

function patronesEncontrados(cadena, array) {
	let encontrado = 0;
	for(let i = 0; i < array.length; i++) {
		encontrado += buscarPatron(cadena, array[i]);
	}
	return encontrado;
}

let intro = prompt("Introduce cadena: "), array = ["AA","BCA","RBT","JT"], total = patronesEncontrados(intro, array);
console.log("Cadena introducida: " + intro);
console.log("Patrones a buscar: " + array);
console.log("Los patrones aparecen: " + total + " veces");