
const products = [
    { name: "chocolate", price: 25 },
    { name: "referesco", price: 50 },
    { name: "papitas", price: 75 },
    { name: "hamburguesa", price: 100 },
    { name: "alfajor", price: 120 }
];

let cart = []


let option = prompt("Bienvenido, desea realizar una compra? si/no")

while (option != "si" && option != "no") {
    alert("Por favor ingrese si o no")
    option = prompt("Desea realiazar una compra? si/no")
}

if (option == "si") {
    alert("Estos son nuestros productos")
    let allProducts = products.map((products) => products.name + " " + products.price + "$");
    alert(allProducts.join(" - "))
}
else if (option == "no") {
    alert("Muchas gracias, hasta pronto!")
}

while (option != "no") {
    let products = prompt("Escoje tus productos \n Chocolate $25 \n refresco $50 \n papitas $75 \n hamburguesa $100 \n alfajor $120")
    let price = 0

    if (products == "chocolate" || products == "refresco" || products == "papitas" || products == "hamburguesa" || products == "alfajor") {
        switch (products) {
            case "chocolate":
                price = 25;
                break;
            case "refresco":
                price = 50;
                break;
            case "papitas":
                price = 75;
                break;
            case "hamburguesa":
                price = 100;
                break;
            case "alfajor":
                price = 120;
                break;
            default:
                break;
        }
        let units = parseInt(prompt("Cuantas unidades desea?"))

        cart.push({ products, units, price })
        console.log(cart)
    }
    else {
        alert("Producto no disponible")
    }

    option = prompt("Continuar comprando? si/no")

    while (option === "no") {
        alert("Muchas gracias por su compra. Hasta Pronto!")
        cart.forEach((finalCart) => {
            console.log(`products: ${finalCart.products}, units: ${finalCart.units}, Total a pagar por producto ${finalCart.units * finalCart.price}`)
        })
        break;
    }
}

function finalAccount() {
    const total = cart.reduce((acc, el) => acc + el.price * el.units, 0)
    console.log(`Su total a pagar es de: ${total}`)
}

finalAccount();
