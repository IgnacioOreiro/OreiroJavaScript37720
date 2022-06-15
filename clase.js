let medida = prompt("")

sillon2 = "170 a 180" 
sillon3 = "180 a 190"
sillon4 = "190 a 200"
sillon5 = "200"

calor1 = "El color de su sillon es verde"
color2 = "El color de su sillon es rojo"
color3 = "El color de su sillon es blanco"
color4 = "El color de su sillon es offwhite"

let sillon1 =  prompt("Seleccione la medida de su sillon 170 a 180 de 180 a 190 o 190 a 200");
while ((sillon1 != 'ESC') && (sillon2 = "170 a 180")  && (sillon3 = "180 a 190")  && (sillon4 = "190 a 200") && (sillon5 = "200")) {
    switch (sillon1) {
        case medida:
            alert(valor1);
            break;
        case medida2:
            alert(valor2);
            break;
        case medida3:
            alert(valor3);
            break;
        case medida4:
            alert(valor4);
            break;
        default:
            alert("Error");
            break;
    }

    let color =  prompt("Seleccione el color de su sillon");
while (color != 'ESC' && (medida = "170 a 180")  && (medida2 = "180 a 190")  && (medida3 = "190 a 200") && (medida4 = "200")) {
    switch (color) {
        case "verde":
            alert();
            break;
        case "rojo":
            alert("El valor de su sillon es de $21850");
            break;
        case "blanco":
            alert("El valor de su sillon es de $23400");
            break;
        case "offwhite":
            alert("El valor de su sillon es de $24450");
            break;
        default:
            alert("Error");
            break;
    }
    color = prompt("Seleccione el color de su sillon");
}
}

