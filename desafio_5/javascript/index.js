/* ----- VARIABLES ----- */

const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");
const ulist = document.getElementsByClassName("ulist")[0];
const total = document.getElementsByClassName("total")[0];
let totalSuma = 0;
let item;
let listado = [];


/* ----- CONSTRUCTOR ----- */

class list {
	constructor(product, price, quantity) {
		this.product = product,
		this.price = price,
		this.quantity = quantity
	}
}

/* ----- FUNCTION ADD ----- */

function addProduct(e) {
	e.preventDefault();
	item = new list(
		document.getElementById("product").value,
		parseInt(document.getElementById("price").value),
		document.getElementById("quantity").value
	);

	if (item.product == "" || item.product == undefined || item.price == "" || item.price == undefined || item.quantity == "" || item.quantity == undefined) {
		alert("Rellena todas las opciones, por favor");
	} else {
		listado.push(item);
		console.log(listado);
		ulist.innerHTML = "";
		for (let index = 0; index < listado.length; index++) {
			let items = document.createElement("li")
			items.className = "item";
			items.innerHTML = `
        <p><strong>Producto:</strong> ${listado[index].product}</h4>
        <p><strong>Precio:</strong> $${listado[index].price}</P>
        <p><strong>Cantidad:</strong> ${listado[index].quantity}</P>
      	`;
			ulist.appendChild(items);
		}

		total.innerHTML = "";
		totalSuma = totalSuma + item.price;
		total.innerHTML = `
      Total: $${totalSuma};
    	`;
	}

}

addButton.addEventListener("click", addProduct);

/* ----- FUNCTION DELETE ----- */

function deleteProducts() {
	listado = [];
	console.log(listado);
	ulist.innerHTML = "";
}
deleteButton.addEventListener("click", () => {
	deleteProducts();
});