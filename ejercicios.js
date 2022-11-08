class producto {

    constructor(titulo,precio, codigo, id) {
        this.titulo = titulo;
        this.precio = parseInt(precio);
        this.codigo = parseInt(codigo);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

}

const productos = [
    new producto("iphone 8plus", 80000, 100, 1),
    new producto("samsung galaxy 20",75000,101, 2),
    new producto("alcatel one pro",15000,102,3),
    new producto("TCL advance",50000,103,4)
   
]
console.log(productos);

function resultados(array){
    let info="";
    array.forEach(elemento => {
        info += 'Título: ' + elemento.titulo + '\nprecio: ' + elemento.precio + '\nCodigo: ' + elemento.codigo+'.\n\n'
    });

    return info;

}

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
let opcion= prompt("Elegí una opción: \n1- Agregar producto . \n2 - catalogo. \n3 - orden (por precio) \nPresioná X para finalizar.");
    while(opcion.toUpperCase()!="X"){
        let nuevoarray= productos.slice(0);
        switch(opcion){
            case "1":
                let continuar = true;

                 while (continuar) {

                    let ingreso = prompt('Ingresa los datos del producto: titulo, precio,codigo, separados por una barra diagonal (.) Ingresa X para finalizar');

                    if (ingreso.toUpperCase() == 'X') {
                        continuar = false;
                        break;
                    }

                    const datos = ingreso.split('.');
                    console.log(datos);

                    const nuevo = new producto(datos[0], datos[1], datos[2]);

                    productos.push(nuevo);
                    nuevo.asignarId(productos);
                    console.log(productos);
                }
                 break;
            case "2":
                alert(resultados(productos));
                break;
            case "3": 
                let catalogo=nuevoarray.sort((a,b) =>a.precio-b.precio);
                alert(resultados(catalogo))
                break;
            default:
                alert("Opcion invalida");
                break;

        }
    
        opcion = prompt("Elegí una opción: \n1- Agregar producto. \n2 - catalogo. \n3 - orden (por precio). \nPresioná X para finalizar.");
    }
    }else{
    alert("entrada denegada. bloqueo de cuenta");
}
alert("fin")

//actividad 1

/* let nombre="homero";
let apellido="simpson";
let edad=40;

console.log(nombre);
console.log(apellido);
console.log(edad); */

//actividad 2 

/* const ciudad1="springfield";
const ciudad2="Shelbyville"
const ciudad3="Capital City";
const ciudad4="Cypress Creek";
const ciudad5="Bronson";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

//actividad 3

let nombre="Bart simpson";
let calle=" 742 evergreen terr"
let ciudad=" springfield"
let nacimiento= "02-11-70"
const codigo= "B47U89RE243"

let carnet= "codigo:"+codigo+ " "+"\n"+
            "nombre:"+nombre+ " "+"\n"+
            "calle:"+calle+ " "+"\n"+
            "ciudad:"+ciudad+ " "+"\n"+
            "nacimiento:"+nacimiento;

console.log(carnet);
