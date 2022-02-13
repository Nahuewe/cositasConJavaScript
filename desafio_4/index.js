/* ----- Constructor ----- */
class Product {
	constructor(product, price) {
		this.product = product,
		this.price = price
	}
}

/* ----- Funcion Principal ----- */

let items = [];
function questionProducts() {
	items = [new Product(prompt("Nombre del producto"), parseFloat(prompt("Precio del producto")))];

	/* ----- Agregar Productos ----- */

	let questionPrompt = prompt(`Agregar otro producto? \nSi \nNo (Con N mayuscula)`);

	while (questionPrompt !== "No") {
		items.push(new Product(prompt("Nombre del producto"), parseFloat(prompt("Precio del producto"))));
		questionPrompt = prompt(`Agregar otro producto? \nSi \nNo (Con N mayuscula)`);
	}

	/* ----- Imprimir Productos ----- */

	function printProducts(order) {
		let listado = `Lista de productos (${order}):\n`;
		let total = 0;

		for (let i = 0; i < items.length; i++) {
			listado += `${i + 1}. Producto: ${items[i].product} - Precio: $${items[i].price}\n`;
			total += items[i].price;
		}

		console.log(`${listado} \nTotal: $${total}`);
		alert(`${listado} \nTotal: $${total}`);
	}

	/* ----- Ordenar Productos ----- */

	let orderPrompt = prompt(`Ordenar productos por: \n1. Orden alfabetico. \n2. Menor a mayor precio. \n3. Mayor a menor precio.`);
	while (orderPrompt != 1 && orderPrompt != 2 && orderPrompt != 3) {
		orderPrompt = prompt(`Opción no válida, intenta de nuevo! \nOrdenar productos por: \n1. Orden alfabetico. \n2. Menor a mayor precio. \n3. Mayor a menor precio.`)
	}

	if (orderPrompt == 1) {
		items.sort(function (a, b) {
			if (a.product.toLowerCase() > b.product.toLowerCase()) {
				return 1
			}
			if (a.product.toLowerCase() < b.product.toLowerCase()) {
				return -1
			}
			return 0
		});
		printProducts("Orden alfabetico");
	};

	if (orderPrompt == 2) {
		items.sort(function (a, b) {
			if (a.price > b.price) {
				return 1
			}
			if (a.price < b.price) {
				return -1
			}
			return 0
		});
		printProducts("Menor a mayor precio");
	};

	if (orderPrompt == 3) {
		items.sort(function (a, b) {
			if (a.price < b.price) {
				return 1
			}
			if (a.price > b.price) {
				return -1
			}
			return 0
		});
		printProducts("Mayor a menor precio");
	};
}