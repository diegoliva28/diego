let clave= "diego"

function login(){
    let ingresar= false;
    
    for (let i=0;i<3;i++){
        let nombreusuario= prompt("ingrese su nombre de usuario.");
        if(nombreusuario==clave){
            alert("bienvenido "+nombreusuario+"");
            ingresar= true;
            break;
         }else { 
            alert(" Error.Este es el intento "+(i+1)+" de 3");
        }
    }
    return ingresar;
}

if(login()){
    let saldo= parseInt(prompt("ingresar saldo"));
    let iva=0.21;
    let prestamo= 0; 
let opcion= prompt("Tu saldo es de "+saldo+" .\nElegí una opción: \n1- Saldo. \n2 - prestamo. \n3 - monto total. \nPresioná X para finalizar.");
    while(opcion!="X" && opcion!= "x"){
        switch(opcion){
            case "1":
                let deposito= parseInt(prompt("ingrese monto a de positar"));
                saldo+=deposito;
                alert("deposito concretado. tu saldo es "+saldo);
                break;
            case "2":
                prestamo= parseInt(prompt("El monto que queres adquirir es de:"));
                 alert ("tu prestamo tiene una recarga de "+(prestamo*iva)+"");
                 break;
            case "3": 
                alert("tu saldo,con el prestamo, es "+(saldo+prestamo+(prestamo*iva)));
                break;
            default:
                alert("Opcion invalida");
                break;

        }
        opcion = prompt("Tu saldo es de "+saldo+" .\nElegí una opción: \n1- Saldo. \n2 - prestamo. \n3 - monto total. \nPresioná X para finalizar.");
    }
    }else{
    alert("entrada denegada. bloqueo de cuenta");
}
alert("fin") 

