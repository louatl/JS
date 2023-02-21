class Conductor {
	constructor(nombre, licencia) {
		this.nombre = nombre;
		this.licencia = licencia;
	}

	getNombre() {
		return this.nombre;
	}
	getLicencia() {
		return this.licencia;
	}
	setNombre(nombre) {
		this.nombre = nombre;
	}
	setLicencia(licencia) {
		this.licencia = licencia;
	}
	mostrarDatosConductor() {
		console.log("Nombre de conductor: " + this.nombre);
		console.log("Licencia de conductor: " + this.licencia);
	}
}

class Autobus {
	constructor(capacidad, pasajeros, matricula, listadoConductores) {
		this.capacidad = capacidad;
		this.pasajeros = pasajeros;
		this.matricula = matricula;
		this.listadoConductores = listadoConductores;
	}

	getCapacidad() {
		return this.capacidad;
	}
	getPasajeros() {
		return this.pasajeros;
	}
	getMatricula() {
		return this.matricula;
	}
	getListadoConductores() {
		return this.listadoConductores;
	}
	setCapacidad(capacidad) {
		this.capacidad = capacidad;
	}
	setPasajeros(pasajeros) {
		this.pasajeros = pasajeros;
	}
	setMatricula(matricula) {
		this.matricula = matricula;
	}
	setListadoConductores(listadoConductores) {
		this.listadoConductores = new Array(listadoConductores);
	}

	mostrarDatosAutobus() {
		console.log("Capacidad total: " + this.capacidad);
		console.log("Pasajeros: " + this.pasajeros);
		console.log("Matrícula: " + this.matricula);

		for(let i = 0; i < this.listadoConductores.length; i++) {
			console.log("Conductor " + (i + 1) + ":");
			this.listadoConductores[i].mostrarDatosConductor();
		}
	}

	subir(pasajeros) {
		if(this.pasajeros + pasajeros > 50)
			this.pasajeros = 50;
		else
			this.pasajeros += pasajeros;
	}

	bajar(pasajeros) {
		if(this.pasajeros < pasajeros)
			this.pasajeros = 0;
		else
			this.pasajeros -= pasajeros;
	}

	buscarConductor(licencia) {
		let bool = false;
		for(let i = 0; i < this.listadoConductores.length && !bool; i++) {
			if(this.listadoConductores[i].getLicencia().toLowerCase() == licencia.toLowerCase())
				bool = true;
		}
		return bool;
	}

}

function main() {
	let a = new Conductor("Lina", "1205OOP"), b = new Conductor("Victor", "5421L"), c = new Conductor("Alae", "1234JKL");
	let lista = Array(a, b, c);
	let autobus = new Autobus(50, 30, "5421L", lista);
	
	autobus.mostrarDatosAutobus();
	if(autobus.buscarConductor("1251H"))
		console.log("Encontrado.");
	else
	console.log("No encontrado.");
	
	autobus.subir(11);
	console.log("\n");
	autobus.mostrarDatosAutobus();
	autobus.bajar(25);
	console.log("\n");
	autobus.mostrarDatosAutobus();
}


main();