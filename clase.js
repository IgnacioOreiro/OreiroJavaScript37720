

function solicitarNombre(){
    let nombreIngresado = prompt("Ingrese su nombre porfavor!");
    alert("El nombre ingresado es " + nombreIngresado)
    }
    let medidas;
    function solicitarMedidas(){
    medidas = prompt("Porfavor ingrese las medidas de su sillon!");
    alert("Estas fueron las medidas ingresadas "+ medidas);
}
    function entregarPrecios(datoSolicitado){
    if ((datoSolicitado >= "150") && (datoSolicitado <= "160")){
    alert("El precio de su sillon es de $22500");
}else if((datoSolicitado >= "170") && (datoSolicitado <= "180")){
    alert("El precio de su sillon es de $24500");
}else if((datoSolicitado >= "180") && (datoSolicitado <= "190")){
    alert("El precio de su sillon es de $26500");
}else if((datoSolicitado >= "200") && (datoSolicitado <= "210")){
    alert("El precio de su sillon es de $28500");
}
}

    solicitarNombre();
    solicitarMedidas();
    entregarPrecios(medidas);





