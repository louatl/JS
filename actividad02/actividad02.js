function esPrimo(n){
	let primo = true;
 	for(let i = 2; i < n && primo; i++) {
  		if(n % i == 0)
			primo = false;
	  }
	return primo;
}

function calcularCifras(n) {
	let cont = 0;
	while(n != 0) {
		cont++;
		n = parseInt(n / 10);
	}
	return cont;
}

function esPalindromo(n) {
  let aux = n, cifras = calcularCifras(n), inverso = 0, power, digito;
	if(cifras == 1)
		return true;
    while (cifras > 0) {
		power = parseInt(Math.pow(10, cifras - 1));
		digito = aux % 10;
		inverso += digito * power;
      	aux = parseInt(aux / 10);
		cifras--;
    }
	return inverso == n ? true : false;
}

let num, primos = [], palindromos = [], ambos = [];

do{
  num = parseInt(prompt("Introduce el número X (se comprobará desde 1 hasta X): "));
  if(num <= 2){
    alert("Valor no válido.. introduce otro");
  }
}while(num <= 2);

for(let i = 1; i <= num; i++){
  
  if(esPrimo(i)) {
    primos.push(i);
    // cont1++;
  }
  
  if(esPalindromo(i)) {
    palindromos.push(i);
    // cont2++;
  }
  
  if(esPrimo(i) && esPalindromo(i)) {
    ambos.push(i);
    // cont3++;
  }
}

alert("Primos: " + primos);
alert("Palindromos: " + palindromos);
alert("Primos y Palindromos: " + ambos);