
let cantidadHamburguesas = prompt("Ingrese el numero de hamburguesas que desea")
let quierePapas = prompt("Quiere papas?")
for (let index = 0; index < cantidadHamburguesas; index++) {
let ingrediene1 = prompt("Porfavor ingrese el primer ingrediente de su hamburguesa");
let ingrediene2 = prompt("Porfavor ingrese el segundo ingrediente de su hamburguesa");
let ingrediene3 = prompt("Porfavor ingrese el tercer ingrediente de su hamburguesa");
let ingrediene4 = prompt("Porfavor ingrese el cuarto ingrediente de su hamburguesa");

if ((ingrediene1 != "") && (ingrediene2 != "") && (ingrediene3 != "") && (ingrediene4 != "")) {
    let pedido = "Su hamburguesa tiene los sigientes ingredientes: " + "1) " + ingrediene1 + " " + "2) " + ingrediene2 + " " + "3) " + ingrediene3 + " " + "4) " + ingrediene4 + "<br>";
    document.write(pedido);
} else {
    document.write("Porfavor recuerde que es necesario ingresar todos los ingredientes");
}
}

while((quierePapas !="no") && (quierePapas != "No") && (quierePapas != "NO")){
    document.write("Aqui tiene sus papas y su " );
}
